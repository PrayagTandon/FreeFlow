import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST() {
  try {
    console.log('=== FIX SCHEMA API START ===');
    
    const dbClient = await pool.connect();
    try {
      // Check freelancer table and add missing columns
      console.log('Checking freelancer table schema...');
      
      const freelancerExists = await dbClient.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'freelancer'
        )
      `);

      if (freelancerExists.rows[0].exists) {
        console.log('Freelancer table exists, checking for missing columns...');
        
        // Check for required columns
        const columnsCheck = await dbClient.query(`
          SELECT column_name 
          FROM information_schema.columns 
          WHERE table_name = 'freelancer' 
          AND column_name IN ('activejobs', 'rejectedbids', 'pendingbids')
        `);
        
        const existingColumns = columnsCheck.rows.map(row => row.column_name);
        const requiredColumns = ['activejobs', 'rejectedbids', 'pendingbids'];
        const missingColumns = requiredColumns.filter(col => !existingColumns.includes(col));
        
        if (missingColumns.length > 0) {
          console.log('Adding missing columns to freelancer table:', missingColumns);
          
          for (const column of missingColumns) {
            try {
              if (column === 'activejobs') {
                await dbClient.query('ALTER TABLE freelancer ADD COLUMN IF NOT EXISTS activejobs INTEGER DEFAULT 0');
                console.log(`Added column: ${column}`);
              } else if (column === 'rejectedbids') {
                await dbClient.query('ALTER TABLE freelancer ADD COLUMN IF NOT EXISTS rejectedbids INTEGER DEFAULT 0');
                console.log(`Added column: ${column}`);
              } else if (column === 'pendingbids') {
                await dbClient.query('ALTER TABLE freelancer ADD COLUMN IF NOT EXISTS pendingbids INTEGER DEFAULT 0');
                console.log(`Added column: ${column}`);
              }
            } catch (alterError) {
              console.log(`Column ${column} couldn't be added:`, alterError.message);
            }
          }
        } else {
          console.log('Freelancer table has all required columns');
        }
      } else {
        console.log('Freelancer table does not exist');
      }

      // Check client table
      console.log('Checking client table schema...');
      const clientExists = await dbClient.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'client'
        )
      `);

      if (clientExists.rows[0].exists) {
        console.log('Client table exists');
      } else {
        console.log('Client table does not exist');
      }

      // Check users table
      console.log('Checking users table schema...');
      const usersExists = await dbClient.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'users'
        )
      `);

      if (usersExists.rows[0].exists) {
        console.log('Users table exists');
      } else {
        console.log('Users table does not exist');
      }

      return NextResponse.json({
        message: 'Schema fix completed',
        status: 'success'
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== FIX SCHEMA API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json({
      message: 'Schema fix failed',
      error: error.message
    }, { status: 500 });
  } finally {
    console.log('=== FIX SCHEMA API END ===');
  }
} 