import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function PUT(request) {
  try {
    console.log('=== UPDATE BID STATUS API START ===');
    
    const { proposalId, status, clientEmail } = await request.json();

    if (!proposalId || !status || !clientEmail) {
      return NextResponse.json(
        { error: 'Proposal ID, status, and client email are required' },
        { status: 400 }
      );
    }

    // Validate status
    const validStatuses = ['accepted', 'rejected', 'pending', 'under_review'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status. Must be one of: accepted, rejected, pending, under_review' },
        { status: 400 }
      );
    }

    console.log(`Updating proposal ${proposalId} status to ${status} for client ${clientEmail}`);

    const dbClient = await pool.connect();
    try {
      // Verify that this proposal belongs to the client
      const verifyQuery = `
        SELECT p.id, p.jobid, j.clientid 
        FROM proposals p
        INNER JOIN jobposted j ON p.jobid = j.id
        WHERE p.id = $1 AND p.toemail = $2
      `;
      
      const verifyResult = await dbClient.query(verifyQuery, [proposalId, clientEmail]);
      
      if (verifyResult.rows.length === 0) {
        return NextResponse.json(
          { error: 'Proposal not found or access denied' },
          { status: 404 }
        );
      }

      // Start a transaction to ensure both operations succeed or fail together
      await dbClient.query('BEGIN');
      console.log('Transaction started for bid status update');
      
      // Update the proposal status
      const updateQuery = `
        UPDATE proposals 
        SET status = $1
        WHERE id = $2
        RETURNING id, status, fromemail
      `;
      
      console.log(`Executing UPDATE query: ${updateQuery}`);
      console.log(`Parameters: status=${status}, proposalId=${proposalId}`);
      
      const result = await dbClient.query(updateQuery, [status, proposalId]);
      
      if (result.rows.length === 0) {
        await dbClient.query('ROLLBACK');
        return NextResponse.json(
          { error: 'Failed to update proposal status' },
          { status: 500 }
        );
      }

      console.log(`✅ Proposal ${proposalId} status successfully updated to ${status}`);
      console.log(`Updated record:`, result.rows[0]);
      
      // If bid is accepted or rejected, decrement the freelancer's activebids count
      if (status === 'accepted' || status === 'rejected') {
        const freelancerEmail = result.rows[0].fromemail;
        console.log('Decrementing freelancer activebids count for:', freelancerEmail);
        
        const updateFreelancerQuery = `
          UPDATE freelancer 
          SET activebids = GREATEST(COALESCE(activebids, 0) - 1, 0)
          WHERE email = $1
          RETURNING email, activebids
        `;
        
        const freelancerUpdateResult = await dbClient.query(updateFreelancerQuery, [freelancerEmail]);
        
        if (freelancerUpdateResult.rows.length > 0) {
          console.log('✅ Freelancer activebids decremented successfully');
          console.log('Updated freelancer:', freelancerUpdateResult.rows[0]);
        } else {
          console.log('⚠️ Freelancer not found or activebids not updated');
        }
      }
      
      // Commit the transaction
      await dbClient.query('COMMIT');
      console.log('Transaction committed successfully');

      return NextResponse.json({
        message: 'Bid status updated successfully',
        proposal: {
          id: result.rows[0].id,
          status: result.rows[0].status
        }
      }, { status: 200 });

    } catch (dbError) {
      // Rollback the transaction on error
      console.error('Database error during bid status update, rolling back...');
      try {
        await dbClient.query('ROLLBACK');
        console.log('Transaction rolled back successfully');
      } catch (rollbackError) {
        console.error('Rollback failed:', rollbackError.message);
      }
      throw dbError; // Re-throw to be caught by outer catch block
    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== UPDATE BID STATUS API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== UPDATE BID STATUS API END ===');
  }
} 