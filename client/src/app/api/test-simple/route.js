import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    console.log('=== SIMPLE TEST START ===');
    
    // Test 1: Basic response
    console.log('Test 1: Basic response');
    
    // Test 2: Database connection
    console.log('Test 2: Database connection');
    const dbClient = await pool.connect();
    console.log('Database connected');
    
    // Test 3: Simple query
    console.log('Test 3: Simple query');
    const result = await dbClient.query('SELECT NOW()');
    console.log('Query result:', result.rows[0]);
    
    // Test 4: bcrypt
    console.log('Test 4: bcrypt');
    const hashedPassword = await bcrypt.hash('testpassword', 10);
    console.log('Password hashed:', hashedPassword.substring(0, 20) + '...');
    
    // Test 5: Check tables
    console.log('Test 5: Check tables');
    const clientTable = await dbClient.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'client'
      );
    `);
    const freelancerTable = await dbClient.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'freelancer'
      );
    `);
    
    console.log('Client table exists:', clientTable.rows[0].exists);
    console.log('Freelancer table exists:', freelancerTable.rows[0].exists);
    
    dbClient.release();
    console.log('=== SIMPLE TEST END ===');
    
    return NextResponse.json({
      message: 'All tests passed',
      database: 'connected',
      bcrypt: 'working',
      tables: {
        client: clientTable.rows[0].exists,
        freelancer: freelancerTable.rows[0].exists
      }
    });
    
  } catch (error) {
    console.error('=== SIMPLE TEST ERROR ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    
    return NextResponse.json({
      error: 'Test failed',
      message: error.message,
      type: error.constructor.name
    }, { status: 500 });
  }
} 