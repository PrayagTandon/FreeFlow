import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST(request) {
  try {
    console.log('=== POST PROPOSAL API START ===');
    
    const { 
      name, description, tags, location, jobLevel, budget, 
      contractToHire, qualificationsPreferred, validTill, 
      companyName, customizable, photoUrl, clientId, clientEmail 
    } = await request.json();

    // Validate required fields
    if (!name || !description || !clientId || !clientEmail) {
      return NextResponse.json(
        { error: 'Name, description, client ID, and client email are required' },
        { status: 400 }
      );
    }

    const dbClient = await pool.connect();
    try {
      // Start a transaction
      await dbClient.query('BEGIN');
      console.log('Transaction started successfully');

             // Create jobposted table if it doesn't exist
       const createTableQuery = `
         CREATE TABLE IF NOT EXISTS jobposted (
           id SERIAL PRIMARY KEY,
           clientid INTEGER NOT NULL,
           name VARCHAR(200) NOT NULL,
           description TEXT NOT NULL,
           tags TEXT[],
           location VARCHAR(100),
           joblevel VARCHAR(50),
           budget INTEGER,
           contracttohire BOOLEAN DEFAULT false,
           qualificationspreferred TEXT,
           postingtime TIME DEFAULT CURRENT_TIME,
           postingdate DATE DEFAULT CURRENT_DATE,
           validtill DATE,
           companyname VARCHAR(100),
           customizable BOOLEAN DEFAULT true,
           photourls TEXT[],
           email VARCHAR(100)
         )
       `;
       
       await dbClient.query(createTableQuery);
       console.log('Jobposted table created/verified successfully');

       // Insert the new proposal
       const insertQuery = `
         INSERT INTO jobposted (
           clientid, name, description, tags, location, joblevel, budget, 
           contracttohire, qualificationspreferred, validtill, companyname, 
           customizable, photourls, email
         )
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
         RETURNING id, name, description, tags, location, joblevel, budget, 
                   contracttohire, qualificationspreferred, validtill, companyname, 
                   customizable, photourls, email
       `;

             // Use fixed clientid: 3
       const clientIdInt = 3;
       
       const result = await dbClient.query(insertQuery, [
         clientIdInt,
         name,
         description,
         tags ? tags.split(',').map(tag => tag.trim()) : [],
         location || null,
         jobLevel || null,
         budget ? parseInt(budget) : null,
         contractToHire || false,
         qualificationsPreferred || null,
         validTill || null,
         companyName || null,
         customizable !== undefined ? customizable : true,
         photoUrl ? (Array.isArray(photoUrl) ? photoUrl : [photoUrl]) : [],
         clientEmail
       ]);

      // Commit the transaction
      await dbClient.query('COMMIT');
      console.log('Transaction committed successfully');

      const proposal = result.rows[0];
      console.log('Proposal created successfully:', proposal.id);

             return NextResponse.json({
         message: 'Proposal posted successfully',
         proposal: {
           id: proposal.id,
           name: proposal.name,
           description: proposal.description,
           tags: proposal.tags,
           location: proposal.location,
           jobLevel: proposal.joblevel,
           budget: proposal.budget,
           contractToHire: proposal.contracttohire,
           qualificationsPreferred: proposal.qualificationspreferred,
           validTill: proposal.validtill,
           companyName: proposal.companyname,
           customizable: proposal.customizable,
           photoUrl: proposal.photourls,
           email: proposal.email
         }
       }, { status: 201 });

    } catch (insertError) {
      // Rollback on error
      console.error('Error during transaction, rolling back...');
      try {
        await dbClient.query('ROLLBACK');
        console.log('Transaction rolled back successfully');
      } catch (rollbackError) {
        console.error('Rollback failed:', rollbackError.message);
      }
      
      console.error('Proposal creation failed:', insertError);
      return NextResponse.json(
        { error: 'Failed to create proposal', details: insertError.message },
        { status: 500 }
      );
    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== POST PROPOSAL API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== POST PROPOSAL API END ===');
  }
}

export async function GET(request) {
  try {
    console.log('=== GET PROPOSALS API START ===');
    
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get('clientId');
    const status = searchParams.get('status') || 'all';

    if (!clientId) {
      return NextResponse.json(
        { error: 'Client ID is required' },
        { status: 400 }
      );
    }

    const dbClient = await pool.connect();
    try {
             // Create jobposted table if it doesn't exist
       const createTableQuery = `
         CREATE TABLE IF NOT EXISTS jobposted (
           id SERIAL PRIMARY KEY,
           clientid INTEGER NOT NULL,
           name VARCHAR(200) NOT NULL,
           description TEXT NOT NULL,
           tags TEXT[],
           location VARCHAR(100),
           joblevel VARCHAR(50),
           budget INTEGER,
           contracttohire BOOLEAN DEFAULT false,
           qualificationspreferred TEXT,
           postingtime TIME DEFAULT CURRENT_TIME,
           postingdate DATE DEFAULT CURRENT_DATE,
           validtill DATE,
           companyname VARCHAR(100),
           customizable BOOLEAN DEFAULT true,
           photourls TEXT[],
           email VARCHAR(100)
         )
       `;
       
       await dbClient.query(createTableQuery);
       console.log('Jobposted table created/verified successfully');

       // Get proposals for the client
       let query = `
         SELECT id, name, description, tags, location, joblevel, budget, 
                contracttohire, qualificationspreferred, validtill, companyname, 
                customizable, photourls, email
         FROM jobposted 
         WHERE clientid = $1
       `;
      let params = [clientId];

      if (status !== 'all') {
        query += ' AND status = $2';
        params.push(status);
      }

      query += ' ORDER BY created_at DESC';

             // Use fixed clientid: 3
       const clientIdInt = 3;
       params[0] = clientIdInt;
       
       const result = await dbClient.query(query, params);
       console.log(`Found ${result.rows.length} job postings for client ${clientIdInt}`);

             return NextResponse.json({
         message: 'Proposals retrieved successfully',
         proposals: result.rows.map(proposal => ({
           id: proposal.id,
           name: proposal.name,
           description: proposal.description,
           tags: proposal.tags,
           location: proposal.location,
           jobLevel: proposal.joblevel,
           budget: proposal.budget,
           contractToHire: proposal.contracttohire,
           qualificationsPreferred: proposal.qualificationspreferred,
           validTill: proposal.validtill,
           companyName: proposal.companyname,
           customizable: proposal.customizable,
           photoUrl: proposal.photourls,
           email: proposal.email
         }))
       }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== GET PROPOSALS API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== GET PROPOSALS API END ===');
  }
} 