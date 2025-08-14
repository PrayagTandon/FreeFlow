import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST(request) {
  try {
    console.log('=== SUBMIT PROPOSAL API START ===');
    
    // Parse request body
    let requestData;
    try {
      requestData = await request.json();
      console.log('Parsed request data:', requestData);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return NextResponse.json(
        { error: 'Invalid JSON in request body', details: parseError.message },
        { status: 400 }
      );
    }

    const { 
      jobId, 
      coverLetter, 
      budgetQuoted, 
      proposedTimeline, 
      freelancerEmail,
      clientEmail 
    } = requestData;
    
    // Validate required fields
    if (!jobId || !coverLetter || !budgetQuoted || !proposedTimeline || !freelancerEmail || !clientEmail) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Creating proposal for job:', jobId);

    const dbClient = await pool.connect();
    try {
      // Start a transaction to ensure both operations succeed or fail together
      await dbClient.query('BEGIN');
      console.log('Transaction started for proposal submission');
      
      // Table already exists, just proceed with insert
      console.log('Using existing proposals table');
      
      // Insert the new proposal
      const insertQuery = `
        INSERT INTO proposals (
          jobid, coverletter, budgetquoted, proposedtimeline, 
          status, submittedat, fromemail, toemail
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, jobid, coverletter, budgetquoted, proposedtimeline, 
                  status, submittedat, fromemail, toemail
      `;
      
      const result = await dbClient.query(insertQuery, [
        jobId,
        coverLetter,
        budgetQuoted,
        proposedTimeline,
        'pending', // Default status - match your SQL enum
        new Date().toISOString(), // Current timestamp
        freelancerEmail,
        clientEmail
      ]);

      console.log('Proposal created successfully:', result.rows[0]);
      
      // Increment the freelancer's activebids count
      console.log('Incrementing freelancer activebids count for:', freelancerEmail);
      const updateFreelancerQuery = `
        UPDATE freelancer 
        SET activebids = COALESCE(activebids, 0) + 1
        WHERE email = $1
        RETURNING email, activebids
      `;
      
      const freelancerUpdateResult = await dbClient.query(updateFreelancerQuery, [freelancerEmail]);
      
      if (freelancerUpdateResult.rows.length > 0) {
        console.log('✅ Freelancer activebids updated successfully');
        console.log('Updated freelancer:', freelancerUpdateResult.rows[0]);
      } else {
        console.log('⚠️ Freelancer not found or activebids not updated');
      }
      
      // Commit the transaction
      await dbClient.query('COMMIT');
      console.log('Transaction committed successfully');

      return NextResponse.json({
        message: 'Proposal submitted successfully',
        proposal: result.rows[0],
        freelancerUpdate: freelancerUpdateResult.rows[0] || null
      }, { status: 201 });

    } catch (dbError) {
      // Rollback the transaction on error
      console.error('Database error during proposal submission, rolling back...');
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
    console.error('=== SUBMIT PROPOSAL API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== SUBMIT PROPOSAL API END ===');
  }
} 