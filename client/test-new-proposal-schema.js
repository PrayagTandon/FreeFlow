// Test script to verify the new proposal schema
const BASE_URL = 'http://localhost:3000/api';

async function testNewProposalSchema() {
  console.log('🧪 Testing New Proposal Schema...\n');

  try {
    // Test 1: Create a proposal with all new fields
    console.log('1️⃣ Testing proposal creation with new schema...');
    const testProposal = {
      name: 'Senior React Developer',
      description: 'We are looking for a senior React developer to join our team and help build scalable web applications.',
      tags: 'React, TypeScript, Node.js, AWS',
      location: 'Remote',
      jobLevel: 'Senior',
      budget: 8000,
      contractToHire: true,
      qualificationsPreferred: 'Bachelor\'s degree in Computer Science, 5+ years experience with React, experience with microservices',
      validTill: '2024-12-31',
      companyName: 'TechCorp Inc.',
      customizable: true,
      photoUrl: 'https://example.com/office1.jpg,https://example.com/team1.jpg',
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
      console.log('Budget:', data.proposal.budget);
      console.log('Contract to Hire:', data.proposal.contractToHire);
    } else {
      const errorData = await postResponse.json();
      console.log('❌ Proposal creation failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

    // Test 2: Fetch proposals to verify the new structure
    console.log('\n2️⃣ Testing proposal retrieval with new schema...');
    const getResponse = await fetch(`${BASE_URL}/post-proposal?clientId=1`);
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      console.log('✅ Proposals retrieved successfully');
      console.log('Number of proposals:', data.proposals.length);
      
      if (data.proposals.length > 0) {
        const latestProposal = data.proposals[0];
        console.log('\nLatest Proposal Details:');
        console.log('- Name:', latestProposal.name);
        console.log('- Company:', latestProposal.companyName);
        console.log('- Location:', latestProposal.location);
        console.log('- Job Level:', latestProposal.jobLevel);
        console.log('- Budget:', latestProposal.budget);
        console.log('- Contract to Hire:', latestProposal.contractToHire);
        console.log('- Tags:', latestProposal.tags);
        console.log('- Valid Till:', latestProposal.validTill);
        console.log('- Customizable:', latestProposal.customizable);
        console.log('- Photo URLs:', latestProposal.photoUrl);
      }
    } else {
      const errorData = await getResponse.json();
      console.log('❌ Proposal retrieval failed');
      console.log('Error:', errorData.error);
    }

    console.log('\n🎉 New proposal schema testing completed!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testNewProposalSchema(); 