import { NextResponse } from 'next/server';
import pool from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    console.log('=== REGISTRATION API START ===');
    console.log('Request method:', request.method);
    
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

    const { firstName, lastName, email, password, role, wallet } = requestData;
    console.log('Parsed data:', { 
      firstName: firstName || 'MISSING', 
      lastName: lastName || 'MISSING', 
      email: email || 'MISSING', 
      role: role || 'MISSING', 
      wallet: wallet ? 'provided' : 'not provided',
      password: password ? 'provided' : 'MISSING'
    });

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !role) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate role
    if (role !== 'Client' && role !== 'Freelancer') {
      console.log('Validation failed - invalid role:', role);
      return NextResponse.json(
        { error: 'Role must be either Client or Freelancer' },
        { status: 400 }
      );
    }

    console.log('Connecting to database...');
    let dbClient;
    try {
      dbClient = await pool.connect();
      console.log('Database connected successfully');
    } catch (dbConnectError) {
      console.error('Database connection failed:', dbConnectError);
      return NextResponse.json(
        { error: 'Database connection failed', details: dbConnectError.message },
        { status: 500 }
      );
    }
    
    try {
      // Check if all required tables exist and create them if they don't
      console.log('Checking if all required tables exist...');
      
      // Check and create users table if needed
      try {
        const usersTableCheck = await dbClient.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'users'
          );
        `);
        
        if (!usersTableCheck.rows[0].exists) {
          console.log('Users table does not exist, creating it...');
          try {
            await dbClient.query(`
              CREATE TABLE users (
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
            console.log('Users table created successfully');
          } catch (createError) {
            console.error('Failed to create users table with full schema, trying simplified version...');
            // Fallback to simpler schema
            await dbClient.query(`
              CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                cognitoid VARCHAR(100) UNIQUE NOT NULL,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                metamaskid VARCHAR(100),
                role VARCHAR(20) NOT NULL
              )
            `);
            console.log('Users table created with simplified schema');
          }
        } else {
          console.log('Users table exists');
        }
      } catch (usersTableError) {
        console.error('Users table check/creation failed:', usersTableError);
        return NextResponse.json(
          { error: 'Users table setup failed', details: usersTableError.message },
          { status: 500 }
        );
      }

      // Check and create client table if needed
      try {
        const clientTableCheck = await dbClient.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'client'
          );
        `);
        
        if (!clientTableCheck.rows[0].exists) {
          console.log('Client table does not exist, creating it...');
          await dbClient.query(`
            CREATE TABLE client (
              id SERIAL PRIMARY KEY,
              cognitoid VARCHAR(100) UNIQUE NOT NULL,
              name VARCHAR(100) NOT NULL,
              email VARCHAR(100) NOT NULL,
              password VARCHAR(100) NOT NULL,
              metamask VARCHAR(100)
            )
          `);
          console.log('Client table created successfully');
        } else {
          console.log('Client table exists');
        }
      } catch (clientTableError) {
        console.error('Client table check/creation failed:', clientTableError);
        return NextResponse.json(
          { error: 'Client table setup failed', details: clientTableError.message },
          { status: 500 }
        );
      }

      // Check and create freelancer table if needed
      try {
        const freelancerTableCheck = await dbClient.query(`
          SELECT EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'freelancer'
          );
        `);
        
        if (!freelancerTableCheck.rows[0].exists) {
          console.log('Freelancer table does not exist, creating it...');
          await dbClient.query(`
            CREATE TABLE freelancer (
              id SERIAL PRIMARY KEY,
              cognitoid VARCHAR(100) UNIQUE NOT NULL,
              name VARCHAR(100) NOT NULL,
              email VARCHAR(100) NOT NULL,
              password VARCHAR(100) NOT NULL,
              metamaskid VARCHAR(100),
              activejobs INTEGER DEFAULT 0,
              rejectbids INTEGER DEFAULT 0,
              pendingbids INTEGER DEFAULT 0
            )
          `);
          console.log('Freelancer table created successfully');
        } else {
          console.log('Freelancer table exists, checking schema...');
          // Check if required columns exist
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
            console.log('Missing columns detected:', missingColumns);
            console.log('Adding missing columns to freelancer table...');
            
            for (const column of missingColumns) {
              try {
                if (column === 'activejobs') {
                  await dbClient.query('ALTER TABLE freelancer ADD COLUMN activejobs INTEGER DEFAULT 0');
                } else if (column === 'rejectedbids') {
                  await dbClient.query('ALTER TABLE freelancer ADD COLUMN rejectedbids INTEGER DEFAULT 0');
                } else if (column === 'pendingbids') {
                  await dbClient.query('ALTER TABLE freelancer ADD COLUMN pendingbids INTEGER DEFAULT 0');
                }
                console.log(`Added column: ${column}`);
              } catch (alterError) {
                console.log(`Column ${column} might already exist or couldn't be added:`, alterError.message);
              }
            }
            console.log('Freelancer table schema updated');
          } else {
            console.log('Freelancer table has all required columns');
          }
        }
      } catch (freelancerTableError) {
        console.error('Freelancer table check/creation failed:', freelancerTableError);
        return NextResponse.json(
          { error: 'Freelancer table setup failed', details: freelancerTableError.message },
          { status: 500 }
        );
      }
      
      // Check if user already exists
      console.log('Checking for existing user...');
      let existingUser;
      try {
        existingUser = await dbClient.query(
          'SELECT * FROM users WHERE email = $1',
          [email]
        );
        console.log('Existing user check completed');
      } catch (existingUserError) {
        console.error('Existing user check failed:', existingUserError);
        return NextResponse.json(
          { error: 'Database query failed', details: existingUserError.message },
          { status: 500 }
        );
      }

      if (existingUser.rows.length > 0) {
        console.log('User already exists');
        return NextResponse.json(
          { error: 'User with this email already exists' },
          { status: 409 }
        );
      }

      // Hash password
      console.log('Hashing password...');
      let hashedPassword;
      try {
        const saltRounds = 10;
        hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Password hashed successfully');
      } catch (hashError) {
        console.error('Password hashing failed:', hashError);
        return NextResponse.json(
          { error: 'Password hashing failed', details: hashError.message },
          { status: 500 }
        );
      }

      // Combine first and last name
      const fullName = `${firstName} ${lastName}`;
      console.log('Full name:', fullName);

      // Generate CognitoID (using role as prefix)
      const cognitoId = `${role}_${Date.now()}`;
      console.log('Generated CognitoID:', cognitoId);

      // Insert new user into Users table
      console.log('Inserting user into database...');
      console.log('SQL Parameters:', [cognitoId, fullName, email, hashedPassword, wallet || null, role]);
      
      let result;
      try {
        // Start a transaction
        console.log('Starting database transaction...');
        await dbClient.query('BEGIN');
        console.log('Transaction started successfully');
        
        // Insert into users table
        console.log('Inserting into users table...');
        result = await dbClient.query(
          `INSERT INTO users (cognitoid, name, email, password, metamaskid, role) 
           VALUES ($1, $2, $3, $4, $5, $6) 
           RETURNING id, cognitoid, name, email, metamaskid, role`,
          [cognitoId, fullName, email, hashedPassword, wallet || null, role]
        );
        console.log('User inserted successfully into users table');

        // Insert into appropriate role-specific table
        if (role === 'Client') {
          console.log('Inserting into client table...');
          await dbClient.query(
            `INSERT INTO client (cognitoid, name, email, password, metamaskid) 
             VALUES ($1, $2, $3, $4, $5)`,
            [cognitoId, fullName, email, hashedPassword, wallet || null]
          );
          console.log('User inserted successfully into client table');
        } else if (role === 'Freelancer') {
          console.log('Inserting into freelancer table...');
                        await dbClient.query(
                `INSERT INTO freelancer (cognitoid, name, email, password, metamaskid, activejobs, rejectedbids, pendingbids) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
                [cognitoId, fullName, email, hashedPassword, wallet || null, 0, 0, 0]
              );
          console.log('User inserted successfully into freelancer table');
        }

        // Commit the transaction
        console.log('Committing transaction...');
        await dbClient.query('COMMIT');
        console.log('Transaction committed successfully');

      } catch (insertError) {
        // Rollback on error
        console.error('Error during transaction, rolling back...');
        try {
          await dbClient.query('ROLLBACK');
          console.log('Transaction rolled back successfully');
        } catch (rollbackError) {
          console.error('Rollback failed:', rollbackError.message);
        }
        
        console.error('User insertion failed:', insertError);
        console.error('Insert error details:', {
          message: insertError.message,
          code: insertError.code,
          detail: insertError.detail,
          hint: insertError.hint,
          stack: insertError.stack
        });
        return NextResponse.json(
          { error: 'User insertion failed', details: insertError.message },
          { status: 500 }
        );
      }

      const user = result.rows[0];
      console.log('User inserted successfully:', user.id);

      return NextResponse.json({
        message: `${role} registered successfully`,
        user: {
          id: user.id,
          cognitoid: user.cognitoid,
          name: user.name,
          email: user.email,
          metamaskid: user.metamaskid,
          role: user.role
        }
      }, { status: 201 });

    } finally {
      console.log('Releasing database connection');
      if (dbClient) {
        dbClient.release();
      }
    }

  } catch (error) {
    console.error('=== REGISTRATION API ERROR ===');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error code:', error.code);
    console.error('Error detail:', error.detail);
    console.error('Error hint:', error.hint);
    
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error.message,
        type: error.constructor.name,
        code: error.code
      },
      { status: 500 }
    );
  } finally {
    console.log('=== REGISTRATION API END ===');
  }
} 