// Simple test script for database functionality
const BASE_URL = 'http://localhost:3000/api';

async function testDatabase() {
  console.log('🧪 Testing Database Functionality...\n');

  try {
    // Test 1: Initialize Database
    console.log('1️⃣ Testing database initialization...');
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

    // Test 2: Register a new user
    console.log('\n2️⃣ Testing user registration...');
    const testUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@test.com',
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
      console.log('✅ Registration successful:', registerData.message);
      console.log('   User ID:', registerData.user.id);
      console.log('   User Email:', registerData.user.email);
    } else {
      const errorData = await registerResponse.json();
      console.log('❌ Registration failed:', errorData.error);
    }

    // Test 3: Login with the registered user
    console.log('\n3️⃣ Testing user login...');
    const loginData = {
      email: 'john.doe@test.com',
      password: 'password123'
    };

    const loginResponse = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });

    if (loginResponse.ok) {
      const loginResult = await loginResponse.json();
      console.log('✅ Login successful:', loginResult.message);
      console.log('   User ID:', loginResult.user.id);
      console.log('   User Table:', loginResult.user.table);
    } else {
      const errorData = await loginResponse.json();
      console.log('❌ Login failed:', errorData.error);
    }

    console.log('\n🎉 Database tests completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testDatabase(); 