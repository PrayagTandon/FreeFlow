import { NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function GET(request) {
  try {
    console.log('=== GET USER CHAT ROOMS API START ===');
    
    const { searchParams } = new URL(request.url);
    const userMetamaskId = searchParams.get('userMetamaskId');
    const userRole = searchParams.get('userRole'); // 'client' or 'freelancer'

    if (!userMetamaskId || !userRole) {
      return NextResponse.json(
        { error: 'User metamask ID and role are required' },
        { status: 400 }
      );
    }

    if (!['client', 'freelancer'].includes(userRole)) {
      return NextResponse.json(
        { error: 'User role must be either "client" or "freelancer"' },
        { status: 400 }
      );
    }

    console.log(`Getting chat rooms for ${userRole}: ${userMetamaskId}`);

    const dbClient = await pool.connect();
    try {
      let query;
      let params;

      if (userRole === 'client') {
        // Get chat rooms where user is the client
        query = `
          SELECT 
            cr.id,
            cr.proposal_id,
            cr.stream_channel_id,
            cr.client_id,
            cr.freelancer_id,
            cr.created_at,
            cr.status,
            p.coverletter,
            p.budgetquoted,
            p.proposedtimeline,
            p.status as proposal_status,
            j.name as job_title,
            j.description as job_description,
            j.budget as job_budget,
            j.companyname,
            f.name as freelancer_name,
            c.name as client_name
          FROM chat_rooms cr
          INNER JOIN proposals p ON cr.proposal_id = p.id
          INNER JOIN jobposted j ON p.jobid = j.id
          INNER JOIN freelancer f ON cr.freelancer_id = f.metamaskid
          INNER JOIN client c ON cr.client_id = c.metamaskid
          WHERE cr.client_id = $1
          ORDER BY cr.created_at DESC
        `;
        params = [userMetamaskId];
      } else {
        // Get chat rooms where user is the freelancer
        query = `
          SELECT 
            cr.id,
            cr.proposal_id,
            cr.stream_channel_id,
            cr.client_id,
            cr.freelancer_id,
            cr.created_at,
            cr.status,
            p.coverletter,
            p.budgetquoted,
            p.proposedtimeline,
            p.status as proposal_status,
            j.name as job_title,
            j.description as job_description,
            j.budget as job_budget,
            j.companyname,
            f.name as freelancer_name,
            c.name as client_name
          FROM chat_rooms cr
          INNER JOIN proposals p ON cr.proposal_id = p.id
          INNER JOIN jobposted j ON p.jobid = j.id
          INNER JOIN freelancer f ON cr.freelancer_id = f.metamaskid
          INNER JOIN client c ON cr.client_id = c.metamaskid
          WHERE cr.freelancer_id = $1
          ORDER BY cr.created_at DESC
        `;
        params = [userMetamaskId];
      }
      
      const result = await dbClient.query(query, params);
      console.log(`Found ${result.rows.length} chat rooms for ${userRole} ${userMetamaskId}`);

      return NextResponse.json({
        message: 'User chat rooms retrieved successfully',
        rooms: result.rows.map(room => ({
          id: room.id,
          proposalId: room.proposal_id,
          streamChannelId: room.stream_channel_id,
          clientId: room.client_id,
          freelancerId: room.freelancer_id,
          createdAt: room.created_at,
          status: room.status,
          proposal: {
            coverLetter: room.coverletter,
            budgetQuoted: room.budgetquoted,
            proposedTimeline: room.proposedtimeline,
            status: room.proposal_status
          },
          job: {
            title: room.job_title,
            description: room.job_description,
            budget: room.job_budget,
            companyName: room.companyname
          },
          participants: {
            clientName: room.client_name,
            freelancerName: room.freelancer_name
          }
        }))
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET USER CHAT ROOMS API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET USER CHAT ROOMS API END ===');
  }
} 