// Debug script to troubleshoot wallet display issue
const BASE_URL = 'http://localhost:3000/api';

async function debugWalletDisplay() {
  console.log('🔍 Debugging Wallet Display Issue...\n');

  try {
    // Test 1: Check what's in localStorage
    console.log('1️⃣ Checking localStorage...');
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        console.log('✅ User data found in localStorage:');
        console.log('Full user object:', parsedUser);
        console.log('metamaskid field:', parsedUser.metamaskid);
        console.log('metamask field:', parsedUser.metamask);
        console.log('wallet field:', parsedUser.wallet);
        console.log('All available fields:', Object.keys(parsedUser));
      } else {
        console.log('❌ No user data in localStorage');
      }
    } else {
      console.log('⚠️ Not running in browser environment');
    }

    // Test 2: Check if we can access the client dashboard
    console.log('\n2️⃣ Testing client dashboard access...');
    try {
      const response = await fetch(`${BASE_URL}/check-schema`);
      if (response.ok) {
        console.log('✅ API is accessible');
      } else {
        console.log('❌ API not accessible');
      }
    } catch (error) {
      console.log('❌ API error:', error.message);
    }

    // Test 3: Check if we can create a test proposal (to test the full flow)
    console.log('\n3️⃣ Testing proposal creation flow...');
    const testProposal = {
      title: 'Debug Test Proposal',
      description: 'This is a test proposal to debug the wallet issue',
      tags: 'Debug, Test',
      budget: '$100-$200',
      deadline: '2024-12-31',
      clientId: 1,
      clientEmail: 'debug@test.com'
    };

    try {
      const response = await fetch(`${BASE_URL}/post-proposal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testProposal)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Test proposal created successfully');
        console.log('Proposal ID:', data.proposal.id);
      } else {
        const errorData = await response.json();
        console.log('❌ Test proposal creation failed');
        console.log('Error:', errorData.error);
      }
    } catch (error) {
      console.log('❌ Test proposal error:', error.message);
    }

    console.log('\n🎯 Debug Summary:');
    console.log('- Check the console above for user data structure');
    console.log('- Verify that metamaskid field exists and has a value');
    console.log('- If metamaskid is missing, the issue is in login/registration');
    console.log('- If metamaskid exists but shows "No wallet connected", check the dashboard code');

  } catch (error) {
    console.error('❌ Debug failed:', error.message);
  }
}

// Instructions for running this debug script
console.log('📋 Instructions:');
console.log('1. Open your browser console (F12)');
console.log('2. Navigate to your client dashboard page');
console.log('3. Run this script in the console');
console.log('4. Check the output for wallet field information');

// Run the debug
debugWalletDisplay(); 