// Script to fix existing database schema by adding missing columns
const BASE_URL = 'http://localhost:3000/api';

async function fixDatabaseSchema() {
  console.log('🔧 Fixing Database Schema...\n');

  try {
    // Step 1: Check current schema
    console.log('1️⃣ Checking current database schema...');
    const schemaResponse = await fetch(`${BASE_URL}/check-schema`);
    
    if (schemaResponse.ok) {
      const schemaData = await schemaResponse.json();
      console.log('Current table status:');
      Object.entries(schemaData.tables).forEach(([tableName, status]) => {
        console.log(`   ${tableName}: ${status.status}`);
        if (status.columns) {
          console.log(`     Columns: ${status.columns.map(col => col.column_name).join(', ')}`);
        }
      });
    } else {
      console.log('❌ Schema check failed');
      return;
    }

    // Step 2: Run database initialization to fix schema
    console.log('\n2️⃣ Running database initialization to fix schema...');
    const initResponse = await fetch(`${BASE_URL}/init-db`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (initResponse.ok) {
      const initData = await initResponse.json();
      console.log('✅ Database initialization completed');
      console.log('Message:', initData.message);
    } else {
      console.log('⚠️ Database initialization failed');
      try {
        const errorData = await initResponse.json();
        console.log('Error:', errorData.error);
      } catch (e) {
        console.log('Could not parse error response');
      }
      return;
    }

    // Step 3: Check schema again
    console.log('\n3️⃣ Checking schema after fixes...');
    const schemaResponse2 = await fetch(`${BASE_URL}/check-schema`);
    
    if (schemaResponse2.ok) {
      const schemaData2 = await schemaResponse2.json();
      console.log('Updated table status:');
      Object.entries(schemaData2.tables).forEach(([tableName, status]) => {
        console.log(`   ${tableName}: ${status.status}`);
        if (status.columns) {
          console.log(`     Columns: ${status.columns.map(col => col.column_name).join(', ')}`);
        }
      });
    }

    // Step 4: Test registration to verify fix
    console.log('\n4️⃣ Testing registration to verify schema fix...');
    const testUser = {
      firstName: 'Schema',
      lastName: 'Test',
      email: 'schema.test@example.com',
      password: 'password123',
      role: 'Freelancer',
      wallet: '0x1234567890123456789012345678901234567890'
    };

    const registerResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser)
    });

    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ Registration successful! Schema is fixed.');
      console.log('User ID:', registerData.user.id);
      console.log('Role:', registerData.user.role);
    } else {
      const errorData = await registerResponse.json();
      console.log('❌ Registration still failing');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    console.log('\n🎉 Database schema fix completed!');

  } catch (error) {
    console.error('❌ Schema fix failed:', error.message);
  }
}

// Run the fix
fixDatabaseSchema(); 