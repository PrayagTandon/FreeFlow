// Test script to verify column name fixes
const BASE_URL = 'http://localhost:3000/api';

async function testColumnFix() {
  console.log('🔧 Testing Column Name Fixes...\n');

  try {
    // Test 1: Client Registration
    console.log('1️⃣ Testing Client Registration...');
    const testClient = {
      firstName: 'Test',
      lastName: 'Client',
      email: 'test.client@example.com',
      password: 'password123',
      role: 'Client',
      wallet: '0x1234567890123456789012345678901234567890'
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
      console.log('MetamaskID:', clientData.user.metamaskid);
    } else {
      const errorData = await clientResponse.json();
      console.log('❌ Client registration failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    // Test 2: Freelancer Registration
    console.log('\n2️⃣ Testing Freelancer Registration...');
    const testFreelancer = {
      firstName: 'Test',
      lastName: 'Freelancer',
      email: 'test.freelancer@example.com',
      password: 'password123',
      role: 'Freelancer',
      wallet: '0x0987654321098765432109876543210987654321'
    };

    const freelancerResponse = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testFreelancer)
    });

    if (freelancerResponse.ok) {
      const freelancerData = await freelancerResponse.json();
      console.log('✅ Freelancer registration successful!');
      console.log('User ID:', freelancerData.user.id);
      console.log('Role:', freelancerData.user.role);
      console.log('MetamaskID:', freelancerData.user.metamaskid);
    } else {
      const errorData = await freelancerResponse.json();
      console.log('❌ Freelancer registration failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    console.log('\n🎉 Column name fix verification completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testColumnFix(); 