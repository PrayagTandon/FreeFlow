import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST(request) {
  try {
    console.log('=== FIX SCHEMA API START ===');
    
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

    const { action } = requestData;
    console.log('Action requested:', action);

    const dbClient = await pool.connect();
    try {
      if (action === 'add_activebids_to_freelancer') {
        console.log('Adding activebids column to freelancer table...');
        
        // Check if activebids column exists
        const checkColumnQuery = `
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_name = 'freelancer' AND column_name = 'activebids'
        `;
        
        const columnCheck = await dbClient.query(checkColumnQuery);
        
        if (columnCheck.rows.length === 0) {
          console.log('activebids column does not exist, adding it...');
          
          const addColumnQuery = `
            ALTER TABLE freelancer 
            ADD COLUMN activebids INTEGER DEFAULT 0
          `;
          
          await dbClient.query(addColumnQuery);
          console.log('✅ activebids column added successfully');
          
          // Update existing records to have activebids = pendingbids for now
          const updateQuery = `
            UPDATE freelancer 
            SET activebids = COALESCE(pendingbids, 0)
            WHERE activebids IS NULL
          `;
          
          const updateResult = await dbClient.query(updateQuery);
          console.log(`✅ Updated ${updateResult.rowCount} freelancer records`);
          
        } else {
          console.log('activebids column already exists');
        }
        
        return NextResponse.json({
          message: 'Schema fix completed',
          status: 'success',
          action: action
        }, { status: 200 });
        
      } else if (action === 'add_updatedat_to_proposals') {
        console.log('Proposals table structure is correct - no updatedat column needed');
        console.log('Status updates will only modify the status field');
        
        return NextResponse.json({
          message: 'Schema fix completed',
          status: 'success',
          action: action
        }, { status: 200 });
      }

      return NextResponse.json({
        message: 'Schema fix completed',
        status: 'success',
        action: action
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== FIX SCHEMA API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    console.log('=== FIX SCHEMA API END ===');
  }
} 