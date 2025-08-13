import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST() {
  try {
    console.log('=== TEST INSERT START ===');
    
    // Test data
    const testUser = {
      firstName: 'Test',
      lastName: 'User',
      email: 'testinsert@example.com',
      password: 'password123',
      role: 'Freelancer',
      wallet: '0x1234567890123456789012345678901234567890'
    };
    
    console.log('Test user data:', testUser);
    
    // Connect to database
    const dbClient = await pool.connect();
    console.log('Database connected');
    
    try {
      // Hash password
      console.log('Hashing password...');
      const hashedPassword = await bcrypt.hash(testUser.password, 10);
      console.log('Password hashed successfully');
      
      // Combine name
      const fullName = `${testUser.firstName} ${testUser.lastName}`;
      console.log('Full name:', fullName);
      
      // Check if user exists
      console.log('Checking for existing user...');
      const existingUser = await dbClient.query(
        'SELECT * FROM freelancer WHERE email = $1',
        [testUser.email]
      );
      
      if (existingUser.rows.length > 0) {
        console.log('User already exists, deleting for test...');
        await dbClient.query('DELETE FROM freelancer WHERE email = $1', [testUser.email]);
      }
      
      // Insert user
      console.log('Inserting user...');
      const result = await dbClient.query(
        `INSERT INTO freelancer (cognitoid, name, email, password, metamaskid) 
         VALUES ($1, $2, $3, $4, $5) 
         RETURNING id, cognitoid, name, email, metamaskid`,
        [testUser.role, fullName, testUser.email, hashedPassword, testUser.wallet]
      );
      
      const user = result.rows[0];
      console.log('User inserted successfully:', user.id);
      
      // Clean up - delete the test user
      await dbClient.query('DELETE FROM freelancer WHERE id = $1', [user.id]);
      console.log('Test user cleaned up');
      
      dbClient.release();
      console.log('=== TEST INSERT END ===');
      
      return NextResponse.json({
        message: 'Insert test successful',
        user: {
          id: user.id,
          cognitoid: user.cognitoid,
          name: user.name,
          email: user.email,
          metamask: user.metamaskid
        }
      });
      
    } catch (dbError) {
      console.error('Database operation failed:', dbError);
      dbClient.release();
      throw dbError;
    }
    
  } catch (error) {
    console.error('=== TEST INSERT ERROR ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    
    return NextResponse.json({
      error: 'Insert test failed',
      message: error.message,
      type: error.constructor.name
    }, { status: 500 });
  }
} 