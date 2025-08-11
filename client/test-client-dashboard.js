// Test script to verify client dashboard functionality
const BASE_URL = 'http://localhost:3000/api';

async function testClientDashboard() {
  console.log('🧪 Testing Client Dashboard...\n');

  try {
    // Test 1: Check if proposals API endpoint works
    console.log('1️⃣ Testing proposals API endpoint...');
    const proposalsResponse = await fetch(`${BASE_URL}/post-proposal?clientId=1`);
    
    if (proposalsResponse.ok) {
      const proposalsData = await proposalsResponse.json();
      console.log('✅ Proposals API working');
      console.log('Proposals found:', proposalsData.proposals?.length || 0);
    } else {
      console.log('❌ Proposals API failed');
      try {
        const errorData = await proposalsResponse.json();
        console.log('Error:', errorData.error);
      } catch (e) {
        console.log('Could not parse error response');
      }
    }

    // Test 2: Test posting a new proposal
    console.log('\n2️⃣ Testing proposal creation...');
    const testProposal = {
      title: 'Test Website Development',
      description: 'This is a test proposal for website development',
      tags: 'React, Next.js, UI/UX',
      budget: '$2000-$5000',
      deadline: '2024-12-31',
      clientId: 1,
      clientEmail: 'test@example.com'
    };

    const postResponse = await fetch(`${BASE_URL}/post-proposal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testProposal)
    });

    if (postResponse.ok) {
      const postData = await postResponse.json();
      console.log('✅ Proposal created successfully!');
      console.log('Proposal ID:', postData.proposal.id);
      console.log('Title:', postData.proposal.title);
    } else {
      const errorData = await postResponse.json();
      console.log('❌ Proposal creation failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    // Test 3: Verify proposal was created
    console.log('\n3️⃣ Verifying proposal was created...');
    const verifyResponse = await fetch(`${BASE_URL}/post-proposal?clientId=1`);
    
    if (verifyResponse.ok) {
      const verifyData = await verifyResponse.json();
      console.log('✅ Verification successful');
      console.log('Total proposals:', verifyData.proposals?.length || 0);
      
      if (verifyData.proposals && verifyData.proposals.length > 0) {
        const latestProposal = verifyData.proposals[0];
        console.log('Latest proposal:', latestProposal.title);
        console.log('Status:', latestProposal.status);
      }
    } else {
      console.log('❌ Verification failed');
    }

    console.log('\n🎉 Client dashboard testing completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testClientDashboard(); 