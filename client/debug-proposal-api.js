// Debug script to identify the 500 error in proposal API
const BASE_URL = 'http://localhost:3000/api';

async function debugProposalAPI() {
  console.log('🔍 Debugging Proposal API 500 Error...\n');

  try {
    // Test 1: Check if the API endpoint is accessible
    console.log('1️⃣ Testing API endpoint accessibility...');
    try {
      const response = await fetch(`${BASE_URL}/check-schema`);
      if (response.ok) {
        console.log('✅ API endpoint is accessible');
      } else {
        console.log('❌ API endpoint not accessible:', response.status);
      }
    } catch (error) {
      console.log('❌ API connection error:', error.message);
    }

    // Test 2: Test with minimal data to identify the issue
    console.log('\n2️⃣ Testing with minimal proposal data...');
    const minimalProposal = {
      name: 'Test Job',
      description: 'Test description',
      clientId: 1,
      clientEmail: 'test@example.com'
    };

    try {
      const response = await fetch(`${BASE_URL}/post-proposal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(minimalProposal)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Minimal proposal created successfully');
        console.log('Response:', data);
      } else {
        const errorData = await response.json();
        console.log('❌ Minimal proposal failed');
        console.log('Status:', response.status);
        console.log('Error:', errorData.error);
        console.log('Details:', errorData.details);
      }
    } catch (error) {
      console.log('❌ Request error:', error.message);
    }

    // Test 3: Test with full data to see if it's a specific field issue
    console.log('\n3️⃣ Testing with full proposal data...');
    const fullProposal = {
      name: 'Full Stack Developer',
      description: 'We need a skilled developer',
      tags: 'React, Node.js',
      location: 'Remote',
      jobLevel: 'Senior',
      budget: 5000,
      qualificationsPreferred: 'Bachelor degree',
      validTill: '2024-12-31',
      companyName: 'Test Corp',
      photoUrl: 'https://example.com/photo.jpg',
      clientId: 1,
      clientEmail: 'test@example.com'
    };

    try {
      const response = await fetch(`${BASE_URL}/post-proposal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullProposal)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Full proposal created successfully');
        console.log('Response:', data);
      } else {
        const errorData = await response.json();
        console.log('❌ Full proposal failed');
        console.log('Status:', response.status);
        console.log('Error:', errorData.error);
        console.log('Details:', errorData.details);
      }
    } catch (error) {
      console.log('❌ Request error:', error.message);
    }

         // Test 4: Check database connection
     console.log('\n4️⃣ Testing database connection...');
     try {
       const response = await fetch(`${BASE_URL}/init-db`);
       if (response.ok) {
         console.log('✅ Database connection successful');
       } else {
         console.log('❌ Database connection failed');
         const errorData = await response.json();
         console.log('Error:', errorData.error);
       }
     } catch (error) {
       console.log('❌ Database test error:', error.message);
     }

     // Test 5: Check if jobposted table exists
     console.log('\n5️⃣ Testing jobposted table access...');
     try {
       const response = await fetch(`${BASE_URL}/post-proposal?clientId=1`);
       if (response.ok) {
         console.log('✅ Jobposted table access successful');
       } else {
         console.log('❌ Jobposted table access failed');
         const errorData = await response.json();
         console.log('Error:', errorData.error);
       }
     } catch (error) {
       console.log('❌ Jobposted table test error:', error.message);
     }

         console.log('\n🎯 Debug Summary:');
     console.log('- Check the console above for specific error messages');
     console.log('- Look for database connection issues');
     console.log('- Check if the jobposted table can be created');
     console.log('- Verify all required fields are being sent correctly');
     console.log('- Column names: photourls (not photo_url), qualificationspreferred (not qualifications_preferred)');

  } catch (error) {
    console.error('❌ Debug failed:', error.message);
  }
}

// Run the debug
debugProposalAPI(); 