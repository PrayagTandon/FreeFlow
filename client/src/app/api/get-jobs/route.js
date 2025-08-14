import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    
    try {
      // Fetch all jobs ordered by validtill (expiring soonest first)
      // Now that clientid is VARCHAR, we can properly JOIN with users table
      const query = `
        SELECT
          j.id,
          j.clientid,
          j.name,
          j.description,
          j.tags,
          j.location,
          j.joblevel,
          j.budget,
          j.contracttohire,
          j.qualificationspreferred,
          j.postingtime,
          j.postingdate,
          j.validtill,
          j.companyname,
          j.customizable,
          j.photourls,
          j.email,
          c.name as client_name,
          c.metamaskid as client_metamaskid
        FROM jobposted j
        LEFT JOIN client c ON j.clientid = c.metamaskid
        WHERE j.validtill >= CURRENT_DATE OR j.validtill IS NULL
        ORDER BY
          CASE
            WHEN j.validtill IS NULL THEN 1
            ELSE 0
          END,
          j.validtill ASC,
          j.postingdate DESC
      `;
      
      const result = await client.query(query);
      console.log(`📊 Found ${result.rows.length} jobs`);
      
      // Format the jobs data
      const jobs = result.rows.map(job => ({
        id: job.id,
        title: job.name,
        description: job.description,
        tags: job.tags || [],
        location: job.location,
        jobLevel: job.joblevel,
        budget: job.budget,
        contractToHire: job.contracttohire,
        qualificationsPreferred: job.qualificationspreferred,
        postingTime: job.postingtime,
        postingDate: job.postingdate,
        validTill: job.validtill,
        companyName: job.companyname,
        customizable: job.customizable,
        photoUrls: job.photourls || [],
        clientEmail: job.email,
        clientId: job.clientid,
        clientName: job.client_name,
        clientMetamaskId: job.client_metamaskid,
        // Calculate days until expiration
        daysUntilExpiry: job.validtill ? 
          Math.ceil((new Date(job.validtill) - new Date()) / (1000 * 60 * 60 * 24)) : null
      }));
      
      return NextResponse.json({
        success: true,
        jobs: jobs,
        total: jobs.length
      });
      
    } finally {
      client.release();
    }
    
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch jobs',
      details: error.message
    }, { status: 500 });
  }
} 