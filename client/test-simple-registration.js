// Simple test script for basic registration functionality
const BASE_URL = 'http://localhost:3000/api';

async function testSimpleRegistration() {
  console.log('🧪 Testing Simple Registration...\n');

  try {
    // Test 1: Check database status
    console.log('1️⃣ Checking database status...');
    const statusResponse = await fetch(`${BASE_URL}/check-schema`);
    
    if (statusResponse.ok) {
      const statusData = await statusResponse.json();
      console.log('✅ Database status check successful');
      console.log('Tables:', Object.keys(statusData.tables));
    } else {
      console.log('⚠️ Database status check failed, continuing anyway...');
    }

    // Test 2: Try to register a simple user
    console.log('\n2️⃣ Testing simple user registration...');
    const testUser = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test.user@example.com',
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

    console.log('Response status:', registerResponse.status);
    
    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ Registration successful!');
      console.log('Message:', registerData.message);
      console.log('User ID:', registerData.user.id);
      console.log('Role:', registerData.user.role);
    } else {
      const errorData = await registerResponse.json();
      console.log('❌ Registration failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    console.log('\n🎉 Simple registration test completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

// Run the test
testSimpleRegistration(); 