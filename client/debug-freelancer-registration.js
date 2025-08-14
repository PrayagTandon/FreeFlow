// Debug script to check freelancer registration and database records
const debugFreelancerRegistration = async () => {
  try {
    console.log('🔍 Debugging freelancer registration issue...');
    
    // Check localStorage
    const userData = localStorage.getItem('user');
    if (!userData) {
      console.log('❌ No user data in localStorage');
      return;
    }
    
    const user = JSON.parse(userData);
    console.log('👤 User data from localStorage:', user);
    
    // Check if user has required fields
    if (!user.metamaskid) {
      console.log('❌ User missing metamaskid');
      return;
    }
    
    if (!user.role) {
      console.log('❌ User missing role');
      return;
    }
    
    console.log(`\n📋 User Details:`);
    console.log(`  Name: ${user.name}`);
    console.log(`  Email: ${user.email}`);
    console.log(`  Role: ${user.role}`);
    console.log(`  MetaMask ID: ${user.metamaskid}`);
    
    // Test the freelancer stats API
    console.log('\n🧪 Testing freelancer stats API...');
    const statsResponse = await fetch('/api/get-freelancer-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metamaskId: user.metamaskid })
    });
    
    console.log(`Response status: ${statsResponse.status}`);
    
    if (statsResponse.ok) {
      const statsData = await statsResponse.json();
      console.log('✅ Stats API response:', statsData);
    } else {
      const errorData = await statsResponse.json();
      console.log('❌ Stats API error:', errorData);
    }
    
    // Check if we can access the database directly
    console.log('\n🗄️ Testing database access...');
    try {
      const testResponse = await fetch('/api/test-db');
      if (testResponse.ok) {
        console.log('✅ Database connection working');
      } else {
        console.log('❌ Database connection failed');
      }
    } catch (dbError) {
      console.log('❌ Database test failed:', dbError.message);
    }
    
    // Check if there are any jobs in the system
    console.log('\n📝 Checking for available jobs...');
    try {
      const jobsResponse = await fetch('/api/get-jobs');
      if (jobsResponse.ok) {
        const jobsData = await jobsResponse.json();
        console.log(`📋 Found ${jobsData.total} jobs in the system`);
        if (jobsData.jobs.length > 0) {
          console.log('Sample job:', jobsData.jobs[0]);
        }
      } else {
        console.log('❌ Failed to fetch jobs');
      }
    } catch (jobsError) {
      console.log('❌ Jobs fetch failed:', jobsError.message);
    }
    
    console.log('\n💡 Possible issues and solutions:');
    console.log('1. The freelancer table might not exist');
    console.log('2. The freelancer record might have been created with a different metamaskid');
    console.log('3. The registration process might have failed to create the freelancer record');
    console.log('4. There might be a mismatch between the metamaskid in localStorage and the database');
    
    console.log('\n🔧 Next steps:');
    console.log('1. Check if you registered as a freelancer or client');
    console.log('2. Verify the MetaMask ID in your wallet matches the one in localStorage');
    console.log('3. Try logging out and logging back in');
    console.log('4. Check the database directly to see what records exist');
    
  } catch (error) {
    console.error('💥 Error in debug script:', error.message);
  }
};

// Run the debug script
debugFreelancerRegistration(); 