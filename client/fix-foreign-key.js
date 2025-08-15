// Script to fix the foreign key constraint issue
const fixForeignKey = async () => {
  try {
    console.log('🔧 Fixing foreign key constraint issue...');
    
    // First, let's check if we can access the database
    console.log('\n📋 Testing database access...');
    
    const testResponse = await fetch('http://localhost:3000/api/init-db');
    if (!testResponse.ok) {
      console.log('❌ Cannot access database');
      return;
    }
    console.log('✅ Database access successful');
    
    // Now let's create a new job to trigger table recreation with correct foreign key
    console.log('\n🔄 Creating new job to trigger table recreation with correct foreign key...');
    
    const testJob = {
      name: 'Foreign Key Fix Test',
      description: 'This job will trigger the table recreation with correct foreign key constraint to client.cognitoid',
      tags: 'Fix, Foreign Key, Test',
      location: 'Remote',
      jobLevel: 'Entry',
      budget: 100,
      qualificationsPreferred: 'None required',
      validTill: '2024-12-31',
      companyName: 'FK Fix Corp',
      photoUrl: ['https://example.com/fkfix.jpg'],
      clientEmail: 'fkfix@test.com'
    };
    
    const createResponse = await fetch('http://localhost:3000/api/post-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testJob)
    });
    
    if (createResponse.ok) {
      console.log('✅ Job created successfully - table should now have correct foreign key constraint');
      
      // Wait a moment for the database to update
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Test the get-jobs endpoint
      console.log('\n🧪 Testing get-jobs endpoint...');
      
      const getJobsResponse = await fetch('http://localhost:3000/api/get-jobs');
      if (getJobsResponse.ok) {
        const getJobsData = await getJobsResponse.json();
        console.log('🎉 SUCCESS! Get-jobs endpoint is now working!');
        console.log(`📝 Found ${getJobsData.total} jobs`);
        
        if (getJobsData.jobs && getJobsData.jobs.length > 0) {
          console.log('\n🔍 Job details:');
          getJobsData.jobs.forEach((job, index) => {
            console.log(`${index + 1}. ${job.title}`);
            console.log(`   Company: ${job.companyName}`);
            console.log(`   Client ID: ${job.clientId}`);
            console.log(`   Client Name: ${job.clientName || 'Not available'}`);
            console.log(`   Expires: ${job.validTill}`);
            console.log(`   Days until expiry: ${job.daysUntilExpiry}`);
          });
        }
        
        console.log('\n✅ Foreign key fix completed successfully!');
        console.log('Now you can:');
        console.log('1. Post proposals from client-dashboard (should work now)');
        console.log('2. Run: node add-sample-jobs.js (to add more test jobs)');
        console.log('3. Visit: http://localhost:3000/freelancer-home (to see jobs displayed)');
        
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
        console.log('\n💡 The foreign key constraint is still the issue.');
        console.log('You may need to manually drop the jobposted table and let it recreate.');
        console.log('Or check if the users table has the correct cognitoid values.');
      }
    }
    
  } catch (error) {
    console.error('💥 Error in foreign key fix:', error.message);
  }
};

// Run the foreign key fix
fixForeignKey(); 