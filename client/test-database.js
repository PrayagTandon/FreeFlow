const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:3000/api';

async function testDatabase() {
  console.log('🧪 Starting Database Tests...\n');

  try {
    // Step 1: Initialize Database
    console.log('1️⃣ Initializing database...');
    const initResponse = await fetch(`${BASE_URL}/init-db`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (initResponse.ok) {
      const initData = await initResponse.json();
      console.log('✅ Database initialized successfully:', initData.message);
    } else {
      console.log('❌ Database initialization failed');
      return;
    }

    // Step 2: Test Registration
    console.log('\n2️⃣ Testing user registration...');
    const testUser = {
      firstName: 'Test',
      lastName: 'User',
      email: 'testuser@example.com',
      password: 'testpassword123',
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
      console.log('   User Role:', registerData.user.cognitoid);
    } else {
      const errorData = await registerResponse.json();
      console.log('❌ Registration failed:', errorData.error);
    }

    // Step 3: Test Login
    console.log('\n3️⃣ Testing user login...');
    const loginData = {
      email: 'testuser@example.com',
      password: 'testpassword123'
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
      console.log('   User Email:', loginResult.user.email);
      console.log('   User Table:', loginResult.user.table);
    } else {
      const errorData = await loginResponse.json();
      console.log('❌ Login failed:', errorData.error);
    }

    // Step 4: Test Duplicate Registration
    console.log('\n4️⃣ Testing duplicate registration...');
    const duplicateResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testUser)
    });

    if (duplicateResponse.status === 409) {
      const errorData = await duplicateResponse.json();
      console.log('✅ Duplicate registration properly rejected:', errorData.error);
    } else {
      console.log('❌ Duplicate registration should have been rejected');
    }

    // Step 5: Test Invalid Login
    console.log('\n5️⃣ Testing invalid login...');
    const invalidLoginData = {
      email: 'testuser@example.com',
      password: 'wrongpassword'
    };

    const invalidLoginResponse = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidLoginData)
    });

    if (invalidLoginResponse.status === 401) {
      const errorData = await invalidLoginResponse.json();
      console.log('✅ Invalid login properly rejected:', errorData.error);
    } else {
      console.log('❌ Invalid login should have been rejected');
    }

    // Step 6: Test Non-existent User Login
    console.log('\n6️⃣ Testing login with non-existent user...');
    const nonExistentLoginData = {
      email: 'nonexistent@example.com',
      password: 'testpassword123'
    };

    const nonExistentResponse = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nonExistentLoginData)
    });

    if (nonExistentResponse.status === 401) {
      const errorData = await nonExistentResponse.json();
      console.log('✅ Non-existent user login properly rejected:', errorData.error);
    } else {
      console.log('❌ Non-existent user login should have been rejected');
    }

    console.log('\n🎉 All tests completed!');

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

// Run the tests
testDatabase(); 