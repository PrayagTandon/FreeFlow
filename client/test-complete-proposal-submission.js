// Test script to verify complete proposal submission
const BASE_URL = 'http://localhost:3000/api';

async function testCompleteProposalSubmission() {
  console.log('🧪 Testing Complete Proposal Submission...\n');

  try {
    // Test 1: Create a proposal with all required fields
    console.log('1️⃣ Testing proposal creation with all fields...');
    const testProposal = {
      name: 'Full Stack Developer',
      description: 'We need a skilled full stack developer to build our next-generation web application.',
      tags: 'React, Node.js, PostgreSQL, AWS',
      location: 'Hybrid (New York)',
      jobLevel: 'Senior',
      budget: 12000,
      qualificationsPreferred: 'Bachelor\'s degree in Computer Science, 5+ years experience, AWS certification preferred',
      validTill: '2024-12-31',
      companyName: 'Innovation Labs',
      photoUrl: 'https://example.com/office.jpg,https://example.com/team.jpg',
      clientId: 1,
      clientEmail: 'test@example.com'
    };

    const postResponse = await fetch(`${BASE_URL}/post-proposal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testProposal)
    });

    if (postResponse.ok) {
      const data = await postResponse.json();
      console.log('✅ Proposal created successfully');
      console.log('Proposal ID:', data.proposal.id);
      console.log('Proposal Name:', data.proposal.name);
      console.log('Company:', data.proposal.companyName);
      console.log('Location:', data.proposal.location);
      console.log('Job Level:', data.proposal.jobLevel);
      console.log('Budget:', data.proposal.budget);
      console.log('Contract to Hire:', data.proposal.contractToHire);
      console.log('Customizable:', data.proposal.customizable);
      console.log('Tags:', data.proposal.tags);
      console.log('Valid Till:', data.proposal.validTill);
      console.log('Qualifications:', data.proposal.qualificationsPreferred);
      console.log('Photo URLs:', data.proposal.photoUrl);
      
      // Verify automatic fields
      console.log('\n🔍 Verifying Automatic Fields:');
      console.log('- Contract to Hire (should be true):', data.proposal.contractToHire === true ? '✅ PASS' : '❌ FAIL');
      console.log('- Customizable (should be true):', data.proposal.customizable === true ? '✅ PASS' : '❌ FAIL');
      console.log('- Status (should be Active):', data.proposal.status === 'Active' ? '✅ PASS' : '❌ FAIL');
      console.log('- Created At (should exist):', data.proposal.createdAt ? '✅ PASS' : '❌ FAIL');
      
    } else {
      const errorData = await postResponse.json();
      console.log('❌ Proposal creation failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    // Test 2: Fetch proposals to verify storage
    console.log('\n2️⃣ Testing proposal retrieval and storage...');
    const getResponse = await fetch(`${BASE_URL}/post-proposal?clientId=1`);
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      console.log('✅ Proposals retrieved successfully');
      console.log('Number of proposals:', data.proposals.length);
      
      if (data.proposals.length > 0) {
        const latestProposal = data.proposals[0];
        console.log('\n📋 Latest Proposal Complete Data:');
        console.log('- ID:', latestProposal.id);
        console.log('- Name:', latestProposal.name);
        console.log('- Description:', latestProposal.description);
        console.log('- Company:', latestProposal.companyName);
        console.log('- Location:', latestProposal.location);
        console.log('- Job Level:', latestProposal.jobLevel);
        console.log('- Budget:', latestProposal.budget);
        console.log('- Contract to Hire:', latestProposal.contractToHire);
        console.log('- Customizable:', latestProposal.customizable);
        console.log('- Tags:', latestProposal.tags);
        console.log('- Valid Till:', latestProposal.validTill);
        console.log('- Qualifications:', latestProposal.qualificationsPreferred);
        console.log('- Photo URLs:', latestProposal.photoUrl);
        console.log('- Status:', latestProposal.status);
        console.log('- Created At:', latestProposal.createdAt);
      }
    } else {
      const errorData = await getResponse.json();
      console.log('❌ Proposal retrieval failed');
      console.log('Error:', errorData.error);
    }

    console.log('\n🎯 Summary of Required Fields:');
    console.log('✅ Client Input Fields:');
    console.log('  - name (Job Title)');
    console.log('  - description');
    console.log('  - tags (comma-separated)');
    console.log('  - location');
    console.log('  - jobLevel (dropdown)');
    console.log('  - budget (USD)');
    console.log('  - qualificationsPreferred');
    console.log('  - validTill (date)');
    console.log('  - companyName');
    console.log('  - photoUrl (comma-separated)');
    console.log('\n✅ Automatic Fields:');
    console.log('  - contractToHire (always true)');
    console.log('  - customizable (always true)');
    console.log('  - posting_time (auto-generated)');
    console.log('  - posting_date (auto-generated)');
    console.log('  - status (defaults to Active)');
    console.log('  - created_at (auto-generated)');

    console.log('\n🎉 Complete proposal submission testing completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testCompleteProposalSubmission(); 