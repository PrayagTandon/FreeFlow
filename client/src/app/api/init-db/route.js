import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST() {
  try {
    const dbClient = await pool.connect();
    try {
      // Create Users table with the new schema
      await dbClient.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          cognitoid VARCHAR(100) UNIQUE NOT NULL,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL,
          metamaskid VARCHAR(100) UNIQUE,
          role VARCHAR(20) NOT NULL CHECK (role IN ('Client', 'Freelancer')),
          createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create Client table
      await dbClient.query(`
        CREATE TABLE IF NOT EXISTS client (
          id SERIAL PRIMARY KEY,
          cognitoid VARCHAR(100) UNIQUE NOT NULL,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          password VARCHAR(100) NOT NULL,
          metamaskid VARCHAR(100)
        )
      `);

                    // Create Freelancer table
              await dbClient.query(`
                CREATE TABLE IF NOT EXISTS freelancer (
                  id SERIAL PRIMARY KEY,
                  cognitoid VARCHAR(100) UNIQUE NOT NULL,
                  name VARCHAR(100) NOT NULL,
                  email VARCHAR(100) NOT NULL,
                  password VARCHAR(100) NOT NULL,
                  metamaskid VARCHAR(100),
                  activejobs INTEGER DEFAULT 0,
                  rejectedbids INTEGER DEFAULT 0,
                  pendingbids INTEGER DEFAULT 0
                )
              `);

      // Check if freelancer table exists and add missing columns if needed
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
              } else if (column === 'rejectedbids') {
                await dbClient.query('ALTER TABLE freelancer ADD COLUMN IF NOT EXISTS rejectedbids INTEGER DEFAULT 0');
              } else if (column === 'pendingbids') {
                await dbClient.query('ALTER TABLE freelancer ADD COLUMN IF NOT EXISTS pendingbids INTEGER DEFAULT 0');
              }
              console.log(`Added column: ${column}`);
            } catch (alterError) {
              console.log(`Column ${column} couldn't be added:`, alterError.message);
            }
          }
        } else {
          console.log('Freelancer table has all required columns');
        }
      }

      // Create indexes for faster lookups
      await dbClient.query('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)');
      await dbClient.query('CREATE INDEX IF NOT EXISTS idx_users_role ON users(role)');
      await dbClient.query('CREATE INDEX IF NOT EXISTS idx_users_cognitoid ON users(cognitoid)');
      await dbClient.query('CREATE INDEX IF NOT EXISTS idx_client_cognitoid ON client(cognitoid)');
      await dbClient.query('CREATE INDEX IF NOT EXISTS idx_freelancer_cognitoid ON freelancer(cognitoid)');

      return NextResponse.json({
        message: 'Database initialized successfully',
        tables: 'users, client, and freelancer tables created successfully'
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { error: 'Failed to initialize database' },
      { status: 500 }
    );
  }
} 