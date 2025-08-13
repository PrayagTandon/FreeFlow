// Comprehensive troubleshooting script for registration issues
const BASE_URL = 'http://localhost:3000/api';

async function troubleshootRegistration() {
  console.log('🔧 Registration Troubleshooting Script\n');

  try {
    // Step 1: Check database connection
    console.log('1️⃣ Testing database connection...');
    try {
      const connectionTest = await fetch(`${BASE_URL}/check-schema`);
      if (connectionTest.ok) {
        const data = await connectionTest.json();
        console.log('✅ Database connection successful');
        console.log('Database version:', data.database?.version);
        console.log('Current time:', data.database?.current_time);
      } else {
        console.log('❌ Database connection failed');
        const errorData = await connectionTest.json();
        console.log('Error:', errorData.error);
        return;
      }
    } catch (error) {
      console.log('❌ Database connection test failed:', error.message);
      return;
    }

    // Step 2: Check existing tables
    console.log('\n2️⃣ Checking existing tables...');
    const schemaResponse = await fetch(`${BASE_URL}/check-schema`);
    if (schemaResponse.ok) {
      const schemaData = await schemaResponse.json();
      console.log('Table status:');
      Object.entries(schemaData.tables).forEach(([tableName, status]) => {
        console.log(`   ${tableName}: ${status.status}`);
      });
    }

    // Step 3: Try to initialize database
    console.log('\n3️⃣ Attempting database initialization...');
    const initResponse = await fetch(`${BASE_URL}/init-db`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (initResponse.ok) {
      const initData = await initResponse.json();
      console.log('✅ Database initialization successful');
      console.log('Message:', initData.message);
    } else {
      console.log('⚠️ Database initialization response:', initResponse.status);
      try {
        const initError = await initResponse.json();
        console.log('Error details:', initError.error);
      } catch (e) {
        console.log('Could not parse error response');
      }
    }

    // Step 4: Check tables again after initialization
    console.log('\n4️⃣ Checking tables after initialization...');
    const schemaResponse2 = await fetch(`${BASE_URL}/check-schema`);
    if (schemaResponse2.ok) {
      const schemaData2 = await schemaResponse2.json();
      console.log('Updated table status:');
      Object.entries(schemaData2.tables).forEach(([tableName, status]) => {
        console.log(`   ${tableName}: ${status.status}`);
        if (status.columns) {
          console.log(`     Columns: ${status.columns.map(col => `${col.column_name}(${col.data_type})`).join(', ')}`);
        }
      });
    }

    // Step 5: Try a minimal registration test
    console.log('\n5️⃣ Testing minimal registration...');
    const testUser = {
      firstName: 'Troubleshoot',
      lastName: 'User',
      email: 'troubleshoot@example.com',
      password: 'password123',
      role: 'Client',
      wallet: '0x1234567890123456789012345678901234567890'
    };

    console.log('Sending registration request...');
    const registerResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser)
    });

    console.log('Registration response status:', registerResponse.status);
    
    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ Registration successful!');
      console.log('User ID:', registerData.user.id);
      console.log('Role:', registerData.user.role);
    } else {
      console.log('❌ Registration failed');
      try {
        const errorData = await registerResponse.json();
        console.log('Error:', errorData.error);
        console.log('Details:', errorData.details);
        console.log('Type:', errorData.type);
        console.log('Code:', errorData.code);
      } catch (e) {
        console.log('Could not parse error response');
      }
    }

    console.log('\n🎉 Troubleshooting completed!');

  } catch (error) {
    console.error('❌ Troubleshooting failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

// Run troubleshooting
troubleshootRegistration(); 