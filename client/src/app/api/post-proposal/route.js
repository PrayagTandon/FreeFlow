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

    // Debug logging for received data
    console.log('🔍 DEBUG: Received request data:', {
      name,
      description,
      tags,
      location,
      jobLevel,
      budget,
      contractToHire,
      qualificationsPreferred,
      validTill,
      companyName,
      customizable,
      photoUrl,
      clientId,
      clientEmail
    });

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
          clientid VARCHAR(100) NOT NULL,
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
          email VARCHAR(100),
          CONSTRAINT fk_jobposted_clientid FOREIGN KEY (clientid) REFERENCES client(metamaskid) ON DELETE CASCADE
        )
      `;
      
      await dbClient.query(createTableQuery);
      console.log('Jobposted table created/verified successfully');
      
      // Create index for better performance
      await dbClient.query(`
        CREATE INDEX IF NOT EXISTS idx_jobposted_clientid ON jobposted(clientid)
      `);
      console.log('Index created/verified successfully');
      
      // Debug: Check what's in the client table
      console.log('🔍 DEBUG: Checking client table contents...');
      try {
        const clientCheckQuery = 'SELECT metamaskid, name, email FROM client WHERE metamaskid = $1';
        const clientCheckResult = await dbClient.query(clientCheckQuery, [clientId]);
        console.log('🔍 DEBUG: Client table check result:', {
          clientId,
          found: clientCheckResult.rows.length > 0,
          rows: clientCheckResult.rows
        });
        
        if (clientCheckResult.rows.length === 0) {
          console.log('⚠️ WARNING: No client found with metamaskid:', clientId);
          console.log('🔍 DEBUG: Available clients in table:');
          const allClientsResult = await dbClient.query('SELECT metamaskid, name, email FROM client LIMIT 5');
          console.log('🔍 DEBUG: Sample clients:', allClientsResult.rows);
        }
      } catch (clientCheckError) {
        console.log('🔍 DEBUG: Error checking client table:', clientCheckError.message);
      }

      // Insert the new proposal
      const insertQuery = `
        INSERT INTO jobposted (
          clientid, name, description, tags, location, joblevel, budget, 
          contracttohire, qualificationspreferred, validtill, companyname, 
          customizable, photourls, email
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING id, clientid, name, description, tags, location, joblevel, budget, 
                  contracttohire, qualificationspreferred, validtill, companyname, 
                  customizable, photourls, email
      `;

             // Use the clientId from the request body (this should be the MetaMask wallet address)
       const clientIdWallet = clientId; // Use the actual clientId from request
      
      console.log('🔍 DEBUG: About to insert with clientId:', clientIdWallet);
      console.log('🔍 DEBUG: Full insert parameters:', [
        clientIdWallet,
        name,
        description,
        tags && tags.trim() ? tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [],
        location || null,
        jobLevel || null,
        budget ? parseInt(budget) : null,
        contractToHire || false,
        qualificationsPreferred || null,
        validTill || null,
        companyName || null,
        customizable !== undefined ? customizable : true,
        photoUrl && photoUrl.trim() ? (Array.isArray(photoUrl) ? photoUrl.filter(url => url && url.trim()) : [photoUrl.trim()]).filter(url => url.length > 0) : []
      ]);
      
      // Get client email from client table
      const clientEmailQuery = 'SELECT email FROM client WHERE metamaskid = $1';
      const clientEmailResult = await dbClient.query(clientEmailQuery, [clientIdWallet]);
      const clientEmail = clientEmailResult.rows.length > 0 ? clientEmailResult.rows[0].email : null;

      const result = await dbClient.query(insertQuery, [
        clientIdWallet,
        name,
        description,
        tags && tags.trim() ? tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [],
        location || null,
        jobLevel || null,
        budget ? parseInt(budget) : null,
        contractToHire || false,
        qualificationsPreferred || null,
        validTill || null,
        companyName || null,
        customizable !== undefined ? customizable : true,
        photoUrl && photoUrl.trim() ? (Array.isArray(photoUrl) ? photoUrl.filter(url => url && url.trim()) : [photoUrl.trim()]).filter(url => url.length > 0) : [],
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
          clientid VARCHAR(100) NOT NULL,
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
          email VARCHAR(100),
          CONSTRAINT fk_jobposted_clientid FOREIGN KEY (clientid) REFERENCES client(metamaskid) ON DELETE CASCADE
        )
      `;
      
      await dbClient.query(createTableQuery);
      console.log('Jobposted table created/verified successfully');
      
      // Create index for better performance
      await dbClient.query(`
        CREATE INDEX IF NOT EXISTS idx_jobposted_clientid ON jobposted(clientid)
      `);
      console.log('Index created/verified successfully');

      // Get proposals for the client
      let query = `
        SELECT id, clientid, name, description, tags, location, joblevel, budget, 
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

      query += ' ORDER BY postingdate DESC, postingtime DESC';
      
      const result = await dbClient.query(query, params);
      console.log(`Found ${result.rows.length} job postings for client ${clientId}`);

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