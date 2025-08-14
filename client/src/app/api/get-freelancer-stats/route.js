import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST(request) {
  try {
    console.log('=== GET FREELANCER STATS API START ===');
    
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

    const { metamaskId } = requestData;
    
    if (!metamaskId) {
      return NextResponse.json(
        { error: 'MetaMask ID is required' },
        { status: 400 }
      );
    }

    console.log('Fetching stats for freelancer with MetaMask ID:', metamaskId);

    const dbClient = await pool.connect();
    try {
      // Query the freelancer table to get stats
      const query = `
        SELECT 
          COALESCE(activejobs, 0) as activejobs,
          COALESCE(pendingbids, 0) as activebids
        FROM freelancer 
        WHERE metamaskid = $1
      `;
      
      console.log('Executing query:', query);
      console.log('With parameters:', [metamaskId]);
      
      const result = await dbClient.query(query, [metamaskId]);
      
      console.log('Query result:', result.rows);
      console.log('Number of rows returned:', result.rows.length);
      
      if (result.rows.length === 0) {
        console.log('No freelancer found with MetaMask ID:', metamaskId);
        
        // Let's check what's actually in the freelancer table
        const checkTableQuery = 'SELECT metamaskid, name, email FROM freelancer LIMIT 5';
        const tableCheck = await dbClient.query(checkTableQuery);
        console.log('Freelancer table contents (first 5 rows):', tableCheck.rows);
        
        return NextResponse.json({
          message: 'Freelancer not found',
          activejobs: 0,
          activebids: 0
        }, { status: 404 });
      }

      const stats = result.rows[0];
      console.log('Freelancer stats retrieved:', stats);

      return NextResponse.json({
        message: 'Freelancer stats retrieved successfully',
        activejobs: stats.activejobs,
        activebids: stats.activebids
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET FREELANCER STATS API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET FREELANCER STATS API END ===');
  }
} 