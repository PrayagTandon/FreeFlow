import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    const dbClient = await pool.connect();
    try {
      // Test basic connection
      const connectionTest = await dbClient.query('SELECT NOW()');
      
      // Check if Users table exists
      const usersTableExists = await dbClient.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'users'
        );
      `);
      
      // Get Users table schema
      const usersSchema = await dbClient.query(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'users' 
        ORDER BY ordinal_position;
      `);

      return NextResponse.json({
        message: 'Database connection successful',
        connection: {
          timestamp: connectionTest.rows[0].now,
          status: 'connected'
        },
        tables: {
          users: {
            exists: usersTableExists.rows[0].exists,
            schema: usersSchema.rows
          }
        }
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({
      error: 'Database connection failed',
      details: error.message
    }, { status: 500 });
  }
} 