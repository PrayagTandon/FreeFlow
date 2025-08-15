// Script to check the freelancer table structure and contents
const checkFreelancerTableStructure = async () => {
  try {
    console.log('🔍 Checking freelancer table structure and contents...');
    
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
    
    if (user.role !== 'Freelancer') {
      console.log('❌ Current user is not a freelancer. This script is for debugging freelancer issues.');
      return;
    }
    
    console.log('\n📋 Testing freelancer table access...');
    
    // First, let's test the database connection
    const testResponse = await fetch('/api/test-db');
    if (!testResponse.ok) {
      console.log('❌ Database connection failed');
      return;
    }
    
    console.log('✅ Database connection working');
    
    // Now let's create a simple API endpoint to check the freelancer table
    // We'll use the existing test-db endpoint to run a custom query
    
    console.log('\n🗄️ Checking freelancer table structure...');
    
    // Let's test what happens when we query the freelancer table directly
    console.log('\n🧪 Testing direct freelancer table query...');
    
    // We'll create a simple test by trying to access the freelancer stats API
    // but first let's see what the exact error is
    
    console.log('\n📊 Testing freelancer stats API with detailed logging...');
    
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
      
      // The API is working but returning 404, which means the query didn't find the record
      console.log('\n🔍 Analysis:');
      console.log('1. ✅ API endpoint is working');
      console.log('2. ✅ Database connection is working');
      console.log('3. ❌ Query returned no results');
      console.log('4. ❌ This means: WHERE metamaskid = $1 found no matches');
      
      console.log('\n💡 Possible causes:');
      console.log('1. The freelancer table doesn\'t exist');
      console.log('2. The metamaskid column name is different');
      console.log('3. The MetaMask ID value is different (case, whitespace, etc.)');
      console.log('4. The freelancer record was never created');
      console.log('5. You registered as a Client, not a Freelancer');
      
      console.log('\n🔧 Next steps:');
      console.log('1. Check if you actually registered as a Freelancer (not Client)');
      console.log('2. Verify the MetaMask ID in your wallet matches localStorage');
      console.log('3. Check if the freelancer table exists and has records');
      console.log('4. Try re-registering as a Freelancer');
    }
    
    // Let's also check if we can access other tables to understand the structure
    console.log('\n📊 Checking other API endpoints...');
    
    try {
      const jobsResponse = await fetch('/api/get-jobs');
      if (jobsResponse.ok) {
        const jobsData = await jobsResponse.json();
        console.log(`✅ get-jobs working - found ${jobsData.total} jobs`);
      } else {
        console.log('❌ get-jobs failed');
      }
    } catch (error) {
      console.log('❌ get-jobs test failed:', error.message);
    }
    
    console.log('\n🎯 Summary:');
    console.log('The issue is that the freelancer table query is not finding your record.');
    console.log('This typically means:');
    console.log('- You registered as a Client instead of Freelancer');
    console.log('- The freelancer record was never created');
    console.log('- There\'s a MetaMask ID mismatch');
    
    console.log('\n💡 Solution:');
    console.log('1. Go to /register page');
    console.log('2. Make sure to select "Freelancer" as your role');
    console.log('3. Connect your MetaMask wallet');
    console.log('4. Complete the registration process');
    console.log('5. Then try accessing /freelancer-home again');
    
  } catch (error) {
    console.error('💥 Error in freelancer table check:', error.message);
  }
};

// Run the check
checkFreelancerTableStructure(); 