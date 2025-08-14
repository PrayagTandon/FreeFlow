// Test script to check client table and foreign key relationship
const testClientTable = async () => {
  try {
    console.log('🔍 Testing client table structure and foreign key relationship...');
    
    // Test database connection
    console.log('\n📋 Testing database access...');
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Test creating a job with the current user's cognitoid
    console.log('\n🔄 Testing job creation with client.cognitoid reference...');
    
    // First, let's check what user data we have in localStorage
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
      console.log('❌ Current user is not a client. Please login as a client.');
      return;
    }
    
    const testJob = {
      name: 'Client Table Test Job',
      description: 'Testing job creation with correct client.metamaskid foreign key reference',
      tags: 'Test, Client, Foreign Key',
      location: 'Remote',
      jobLevel: 'Entry',
      budget: 200,
      qualificationsPreferred: 'Basic knowledge',
      validTill: '2024-12-31',
      companyName: 'Test Client Corp',
      photoUrl: ['https://example.com/test.jpg'],
      clientEmail: user.email
    };
    
    console.log('\n📝 Attempting to create job with clientId:', user.metamaskid);
    
    const createResponse = await fetch('http://localhost:3000/api/post-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...testJob,
        clientId: user.metamaskid
      })
    });
    
    if (createResponse.ok) {
      console.log('🎉 SUCCESS! Job created successfully!');
      console.log('✅ Foreign key constraint to client.metamaskid is working');
      
      // Test the get-jobs endpoint
      console.log('\n🧪 Testing get-jobs endpoint...');
      const getJobsResponse = await fetch('http://localhost:3000/api/get-jobs');
      
      if (getJobsResponse.ok) {
        const getJobsData = await getJobsResponse.json();
        console.log('🎉 SUCCESS! Get-jobs endpoint is working!');
        console.log(`📝 Found ${getJobsData.total} jobs`);
        
        if (getJobsData.jobs && getJobsData.jobs.length > 0) {
          console.log('\n🔍 Latest job details:');
          const latestJob = getJobsData.jobs[0];
          console.log(`   Title: ${latestJob.title}`);
          console.log(`   Company: ${latestJob.companyName}`);
          console.log(`   Client ID: ${latestJob.clientId}`);
          console.log(`   Client Name: ${latestJob.clientName || 'Not available'}`);
          console.log(`   Expires: ${latestJob.validTill}`);
        }
        
        console.log('\n✅ Everything is working correctly!');
        console.log('Now you can:');
        console.log('1. Post proposals from client-dashboard ✅');
        console.log('2. Visit: http://localhost:3000/freelancer-home (to see jobs displayed) ✅');
        
      } else {
        const errorData = await getJobsResponse.json();
        console.log('❌ Get-jobs endpoint still failing');
        console.log('Error:', errorData.error);
        console.log('Details:', errorData.details);
      }
      
    } else {
      const errorData = await createResponse.json();
      console.log('❌ Failed to create test job');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
      
      if (errorData.details && errorData.details.includes('foreign key constraint')) {
        console.log('\n💡 The foreign key constraint issue persists.');
        console.log('This means the client table either:');
        console.log('1. Does not exist');
        console.log('2. Does not have a metamaskid column');
        console.log('3. Does not contain the value:', user.metamaskid);
        
        console.log('\n🔧 To fix this, you need to:');
        console.log('1. Ensure the client table exists with a metamaskid column');
        console.log('2. Insert the current user into the client table');
        console.log('3. Or update the foreign key to reference the correct table/column');
      }
    }
    
  } catch (error) {
    console.error('💥 Error in client table test:', error.message);
  }
};

// Run the test
testClientTable(); 