// Test script to verify the fixed schema works
const BASE_URL = 'http://localhost:3000/api';

async function testFixedSchema() {
  console.log('🧪 Testing Fixed Schema...\n');

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

    // Step 2: Test freelancer registration with correct schema
    console.log('\n2️⃣ Testing freelancer registration...');
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
      console.log('✅ Freelancer registration successful!');
      console.log('User ID:', registerData.user.id);
      console.log('Role:', registerData.user.role);
      console.log('Message:', registerData.message);
    } else {
      const errorData = await registerResponse.json();
      console.log('❌ Freelancer registration failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    // Step 3: Test client registration
    console.log('\n3️⃣ Testing client registration...');
    const testClient = {
      firstName: 'Client',
      lastName: 'Test',
      email: 'client.test@example.com',
      password: 'password123',
      role: 'Client',
      wallet: '0x0987654321098765432109876543210987654321'
    };

    const clientResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testClient)
    });

    if (clientResponse.ok) {
      const clientData = await clientResponse.json();
      console.log('✅ Client registration successful!');
      console.log('User ID:', clientData.user.id);
      console.log('Role:', clientData.user.role);
      console.log('Message:', clientData.message);
    } else {
      const errorData = await clientResponse.json();
      console.log('❌ Client registration failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    console.log('\n🎉 Schema fix verification completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testFixedSchema(); 