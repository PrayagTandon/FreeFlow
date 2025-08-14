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

      return NextResponse.json({
        message: 'Proposal submitted successfully',
        proposal: result.rows[0]
      }, { status: 201 });

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