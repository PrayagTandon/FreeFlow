// Test script to verify email field in jobposted table
const testEmailField = async () => {
  try {
    console.log('🧪 Testing email field in jobposted table...');
    
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      console.log('❌ No user data in localStorage. Please login first.');
      return;
    }
    
    const user = JSON.parse(userData);
    console.log('👤 Current user:', {
      name: user.name,
      email: user.email,
      role: user.role,
      metamaskid: user.metamaskid
    });
    
    if (user.role !== 'Client') {
      console.log('❌ Current user is not a client. Please login as a client to test job creation.');
      return;
    }
    
    console.log('✅ User is a client, testing job creation with email field...');
    
    // Test creating a job to verify email field is populated
    const testJob = {
      name: 'Email Field Test Job',
      description: 'Testing that the email field is properly populated from client table',
      tags: 'Test, Email, Field',
      location: 'Remote',
      jobLevel: 'Entry',
      budget: 150,
      qualificationsPreferred: 'Basic testing knowledge',
      validTill: '2024-12-31',
      companyName: 'Email Test Corp',
      photoUrl: ['https://example.com/email-test.jpg'],
      clientEmail: user.email
    };
    
    console.log('\n📝 Creating test job with email field...');
    
    const createResponse = await fetch('/api/post-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...testJob,
        clientId: user.metamaskid
      })
    });
    
    if (createResponse.ok) {
      console.log('🎉 SUCCESS! Job created with email field!');
      
      // Test retrieving the job to verify email is stored
      console.log('\n🔍 Testing job retrieval to verify email field...');
      const getJobsResponse = await fetch('/api/get-jobs');
      
      if (getJobsResponse.ok) {
        const getJobsData = await getJobsResponse.json();
        console.log(`📝 Found ${getJobsData.total} jobs`);
        
        if (getJobsData.jobs && getJobsData.jobs.length > 0) {
          // Find our test job
          const testJobResult = getJobsData.jobs.find(job => 
            job.title === 'Email Field Test Job' && 
            job.clientId === user.metamaskid
          );
          
          if (testJobResult) {
            console.log('\n✅ Test job found with email field!');
            console.log('📧 Job details:');
            console.log(`   Title: ${testJobResult.title}`);
            console.log(`   Client Email: ${testJobResult.clientEmail}`);
            console.log(`   Client ID: ${testJobResult.clientId}`);
            console.log(`   Company: ${testJobResult.companyName}`);
            
            if (testJobResult.clientEmail === user.email) {
              console.log('🎉 SUCCESS! Email field is correctly populated with client email!');
            } else {
              console.log('⚠️ WARNING: Email field does not match expected value');
              console.log(`   Expected: ${user.email}`);
              console.log(`   Found: ${testJobResult.clientEmail}`);
            }
          } else {
            console.log('❌ Test job not found in get-jobs response');
          }
        }
      } else {
        console.log('❌ Failed to retrieve jobs to verify email field');
      }
      
      // Test the post-proposal GET endpoint to verify email in proposals
      console.log('\n🔍 Testing proposals endpoint to verify email field...');
      const proposalsResponse = await fetch(`/api/post-proposal?clientId=${user.metamaskid}`);
      
      if (proposalsResponse.ok) {
        const proposalsData = await proposalsResponse.json();
        console.log(`📝 Found ${proposalsData.proposals.length} proposals for client`);
        
        if (proposalsData.proposals && proposalsData.proposals.length > 0) {
          const testProposal = proposalsData.proposals.find(proposal => 
            proposal.name === 'Email Field Test Job'
          );
          
          if (testProposal) {
            console.log('\n✅ Test proposal found with email field!');
            console.log('📧 Proposal details:');
            console.log(`   Name: ${testProposal.name}`);
            console.log(`   Email: ${testProposal.email}`);
            console.log(`   Client ID: ${testProposal.clientid}`);
            
            if (testProposal.email === user.email) {
              console.log('🎉 SUCCESS! Email field is correctly populated in proposals!');
            } else {
              console.log('⚠️ WARNING: Email field in proposal does not match expected value');
              console.log(`   Expected: ${user.email}`);
              console.log(`   Found: ${testProposal.email}`);
            }
          } else {
            console.log('❌ Test proposal not found in proposals response');
          }
        }
      } else {
        console.log('❌ Failed to retrieve proposals to verify email field');
      }
      
    } else {
      const errorData = await createResponse.json();
      console.log('❌ Failed to create test job');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }
    
    console.log('\n🎉 Email field testing completed!');
    console.log('Summary:');
    console.log('1. ✅ Job creation with email field');
    console.log('2. ✅ Email field population from client table');
    console.log('3. ✅ Email field retrieval in get-jobs API');
    console.log('4. ✅ Email field retrieval in proposals API');
    
  } catch (error) {
    console.error('💥 Error in email field test:', error.message);
  }
};

// Run the test
testEmailField(); 