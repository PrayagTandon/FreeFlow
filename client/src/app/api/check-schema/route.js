import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function GET() {
  try {
    console.log('=== SCHEMA CHECK API START ===');
    
    const dbClient = await pool.connect();
    try {
      // Check all tables
      const tables = ['users', 'client', 'freelancer'];
      const tableStatus = {};
      
      for (const tableName of tables) {
        try {
          const tableCheck = await dbClient.query(`
            SELECT EXISTS (
              SELECT FROM information_schema.tables 
              WHERE table_schema = 'public' 
              AND table_name = $1
            );
          `, [tableName]);
          
          tableStatus[tableName] = {
            exists: tableCheck.rows[0].exists,
            status: tableCheck.rows[0].exists ? '✅ Exists' : '❌ Missing'
          };
          
          // If table exists, get its structure
          if (tableCheck.rows[0].exists) {
            const columnsQuery = await dbClient.query(`
              SELECT column_name, data_type, is_nullable, column_default
              FROM information_schema.columns 
              WHERE table_name = $1 
              ORDER BY ordinal_position
            `, [tableName]);
            
            tableStatus[tableName].columns = columnsQuery.rows;
          }
        } catch (error) {
          tableStatus[tableName] = {
            exists: false,
            status: `❌ Error: ${error.message}`,
            error: error.message
          };
        }
      }
      
      // Check database connection
      const connectionTest = await dbClient.query('SELECT NOW() as current_time, version() as db_version');
      
      return NextResponse.json({
        message: 'Schema check completed',
        database: {
          connected: true,
          current_time: connectionTest.rows[0].current_time,
          version: connectionTest.rows[0].db_version
        },
        tables: tableStatus
      }, { status: 200 });

    } finally {
      dbClient.release();
    }

  } catch (error) {
    console.error('=== SCHEMA CHECK API ERROR ===');
    console.error('Error:', error.message);
    
    return NextResponse.json({
      message: 'Schema check failed',
      error: error.message,
      database: {
        connected: false
      }
    }, { status: 500 });
  } finally {
    console.log('=== SCHEMA CHECK API END ===');
  }
} 