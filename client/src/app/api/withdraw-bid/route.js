import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function DELETE(request) {
  try {
    console.log('=== WITHDRAW BID API START ===');
    
    const { searchParams } = new URL(request.url);
    const proposalId = searchParams.get('proposalId');
    const freelancerEmail = searchParams.get('freelancerEmail');

    if (!proposalId || !freelancerEmail) {
      return NextResponse.json(
        { error: 'Proposal ID and freelancer email are required' },
        { status: 400 }
      );
    }

    console.log(`Withdrawing proposal ${proposalId} for freelancer ${freelancerEmail}`);

    const dbClient = await pool.connect();
    try {
      // Start a transaction to ensure both operations succeed or fail together
      await dbClient.query('BEGIN');
      console.log('Transaction started for bid withdrawal');
      
      // Verify that this proposal belongs to the freelancer
      const verifyQuery = `
        SELECT id, status, fromemail 
        FROM proposals 
        WHERE id = $1 AND fromemail = $2
      `;
      
      const verifyResult = await dbClient.query(verifyQuery, [proposalId, freelancerEmail]);
      
      if (verifyResult.rows.length === 0) {
        await dbClient.query('ROLLBACK');
        return NextResponse.json(
          { error: 'Proposal not found or access denied' },
          { status: 404 }
        );
      }

      const proposal = verifyResult.rows[0];
      
      // Check if bid can be withdrawn (only pending bids can be withdrawn)
      if (proposal.status !== 'pending') {
        await dbClient.query('ROLLBACK');
        return NextResponse.json(
          { error: `Cannot withdraw bid with status: ${proposal.status}. Only pending bids can be withdrawn.` },
          { status: 400 }
        );
      }

      // Delete the proposal
      const deleteQuery = `
        DELETE FROM proposals 
        WHERE id = $1
        RETURNING id
      `;
      
      const deleteResult = await dbClient.query(deleteQuery, [proposalId]);
      
      if (deleteResult.rows.length === 0) {
        await dbClient.query('ROLLBACK');
        return NextResponse.json(
          { error: 'Failed to withdraw proposal' },
          { status: 500 }
        );
      }

      // Decrement the freelancer's activebids count
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
      
      // Commit the transaction
      await dbClient.query('COMMIT');
      console.log('Transaction committed successfully');

      console.log(`✅ Proposal ${proposalId} successfully withdrawn`);

      return NextResponse.json({
        message: 'Bid withdrawn successfully',
        proposalId: proposalId,
        freelancerUpdate: freelancerUpdateResult.rows[0] || null
      }, { status: 200 });

    } catch (dbError) {
      // Rollback the transaction on error
      console.error('Database error during bid withdrawal, rolling back...');
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
    console.error('=== WITHDRAW BID API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== WITHDRAW BID API END ===');
  }
} 