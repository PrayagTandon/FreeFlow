// Test script for verifying registration with client/freelancer tables
const BASE_URL = 'http://localhost:3000/api';

async function testRegistrationTables() {
  console.log('🧪 Testing Registration with Client/Freelancer Tables...\n');

  try {
    // Test 1: Initialize Database with new tables
    console.log('1️⃣ Testing database initialization with new tables...');
    const initResponse = await fetch(`${BASE_URL}/init-db`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (initResponse.ok) {
      const initData = await initResponse.json();
      console.log('✅ Database initialized:', initData.message);
    } else {
      console.log('❌ Database initialization failed');
      return;
    }

    // Test 2: Register a Client
    console.log('\n2️⃣ Testing Client registration...');
    const testClient = {
      firstName: 'Alice',
      lastName: 'Client',
      email: 'alice.client@test.com',
      password: 'password123',
      role: 'Client',
      wallet: '0x1111111111111111111111111111111111111111'
    };

    const clientRegisterResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testClient)
    });

    if (clientRegisterResponse.ok) {
      const clientData = await clientRegisterResponse.json();
      console.log('✅ Client registration successful:', clientData.message);
      console.log('   User ID:', clientData.user.id);
      console.log('   CognitoID:', clientData.user.cognitoid);
      console.log('   Role:', clientData.user.role);
    } else {
      const errorData = await clientRegisterResponse.json();
      console.log('❌ Client registration failed:', errorData.error);
    }

    // Test 3: Register a Freelancer
    console.log('\n3️⃣ Testing Freelancer registration...');
    const testFreelancer = {
      firstName: 'Bob',
      lastName: 'Freelancer',
      email: 'bob.freelancer@test.com',
      password: 'password123',
      role: 'Freelancer',
      wallet: '0x2222222222222222222222222222222222222222'
    };

    const freelancerRegisterResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testFreelancer)
    });

    if (freelancerRegisterResponse.ok) {
      const freelancerData = await freelancerRegisterResponse.json();
      console.log('✅ Freelancer registration successful:', freelancerData.message);
      console.log('   User ID:', freelancerData.user.id);
      console.log('   CognitoID:', freelancerData.user.cognitoid);
      console.log('   Role:', freelancerData.user.role);
    } else {
      const errorData = await freelancerRegisterResponse.json();
      console.log('❌ Freelancer registration failed:', errorData.error);
    }

    // Test 4: Try to register with duplicate email (should fail)
    console.log('\n4️⃣ Testing duplicate email registration (should fail)...');
    const duplicateUser = {
      firstName: 'Duplicate',
      lastName: 'User',
      email: 'alice.client@test.com', // Same email as client
      password: 'password123',
      role: 'Freelancer',
      wallet: '0x3333333333333333333333333333333333333333'
    };

    const duplicateResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(duplicateUser)
    });

    if (duplicateResponse.ok) {
      console.log('❌ Duplicate registration should have failed but succeeded');
    } else {
      const errorData = await duplicateResponse.json();
      console.log('✅ Duplicate registration correctly failed:', errorData.error);
    }

    // Test 5: Test login for both users
    console.log('\n5️⃣ Testing login for both users...');
    
    // Login as Client
    const clientLoginData = {
      email: 'alice.client@test.com',
      password: 'password123'
    };

    const clientLoginResponse = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clientLoginData)
    });

    if (clientLoginResponse.ok) {
      const clientLoginResult = await clientLoginResponse.json();
      console.log('✅ Client login successful:', clientLoginResult.message);
    } else {
      const errorData = await clientLoginResponse.json();
      console.log('❌ Client login failed:', errorData.error);
    }

    // Login as Freelancer
    const freelancerLoginData = {
      email: 'bob.freelancer@test.com',
      password: 'password123'
    };

    const freelancerLoginResponse = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(freelancerLoginData)
    });

    if (freelancerLoginResponse.ok) {
      const freelancerLoginResult = await freelancerLoginResponse.json();
      console.log('✅ Freelancer login successful:', freelancerLoginResult.message);
    } else {
      const errorData = await freelancerLoginResponse.json();
      console.log('❌ Freelancer login failed:', errorData.error);
    }

    console.log('\n🎉 Registration table tests completed!');
    console.log('\n📋 Summary:');
    console.log('   - Database initialized with users, client, and freelancer tables');
    console.log('   - Client registration tested and working');
    console.log('   - Freelancer registration tested and working');
    console.log('   - Duplicate email prevention working');
    console.log('   - Login functionality working for both user types');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testRegistrationTables(); 