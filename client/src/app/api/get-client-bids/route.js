import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET(request) {
  try {
    console.log('=== GET CLIENT BIDS API START ===');
    
    const { searchParams } = new URL(request.url);
    const clientEmail = searchParams.get('clientEmail');

    if (!clientEmail) {
      return NextResponse.json(
        { error: 'Client email is required' },
        { status: 400 }
      );
    }

    console.log('Fetching bids for client email:', clientEmail);

    const dbClient = await pool.connect();
    try {
      // Get all proposals (bids) for jobs posted by this client
      // We join with jobposted table to get job details
      const query = `
        SELECT 
          p.id as proposal_id,
          p.jobid,
          p.coverletter,
          p.budgetquoted,
          p.proposedtimeline,
          p.status,
          p.submittedat,
          p.fromemail as freelancer_email,
          p.toemail as client_email,
          j.name as job_title,
          j.description as job_description,
          j.budget as job_budget,
          j.companyname,
          j.location,
          j.joblevel,
          j.tags,
          j.validtill
        FROM proposals p
        INNER JOIN jobposted j ON p.jobid = j.id
        WHERE p.toemail = $1
        ORDER BY p.submittedat DESC
      `;
      
      const result = await dbClient.query(query, [clientEmail]);
      console.log(`Found ${result.rows.length} bids for client ${clientEmail}`);

      return NextResponse.json({
        message: 'Client bids retrieved successfully',
        bids: result.rows.map(bid => ({
          proposalId: bid.proposal_id,
          jobId: bid.jobid,
          jobTitle: bid.job_title,
          jobDescription: bid.job_description,
          jobBudget: bid.job_budget,
          companyName: bid.companyname,
          location: bid.location,
          jobLevel: bid.joblevel,
          tags: bid.tags,
          validTill: bid.validtill,
          coverLetter: bid.coverletter,
          budgetQuoted: bid.budgetquoted,
          proposedTimeline: bid.proposedtimeline,
          status: bid.status,
          submittedAt: bid.submittedat,
          freelancerEmail: bid.freelancer_email,
          clientEmail: bid.client_email
        }))
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET CLIENT BIDS API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET CLIENT BIDS API END ===');
  }
} 