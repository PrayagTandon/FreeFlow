import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET(request) {
  try {
    console.log('=== GET FREELANCER BIDS API START ===');
    
    const { searchParams } = new URL(request.url);
    const freelancerEmail = searchParams.get('freelancerEmail');

    if (!freelancerEmail) {
      return NextResponse.json(
        { error: 'Freelancer email is required' },
        { status: 400 }
      );
    }

    console.log('Fetching bids for freelancer email:', freelancerEmail);

    const dbClient = await pool.connect();
    try {
      // Get all proposals (bids) submitted by this freelancer
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
          f.metamaskid as freelancer_metamaskid,
          c.metamaskid as client_metamaskid,
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
        INNER JOIN freelancer f ON p.fromemail = f.email
        INNER JOIN client c ON p.toemail = c.email
        WHERE p.fromemail = $1
        ORDER BY p.submittedat DESC
      `;
      
      const result = await dbClient.query(query, [freelancerEmail]);
      console.log(`Found ${result.rows.length} bids for freelancer ${freelancerEmail}`);

      return NextResponse.json({
        message: 'Freelancer bids retrieved successfully',
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
          clientEmail: bid.client_email,
          freelancerMetamaskId: bid.freelancer_metamaskid,
          clientMetamaskId: bid.client_metamaskid
        }))
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET FREELANCER BIDS API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET FREELANCER BIDS API END ===');
  }
} 