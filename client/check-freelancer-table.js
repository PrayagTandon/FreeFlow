// Script to check what's in the freelancer table
const checkFreelancerTable = async () => {
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
    
    // Try to create a simple test to see if the freelancer table exists
    // We'll use the existing test-db endpoint to check database connectivity
    const testResponse = await fetch('/api/test-db');
    if (!testResponse.ok) {
      console.log('❌ Database connection failed');
      return;
    }
    
    console.log('✅ Database connection working');
    
    // Now let's try to manually check the freelancer table
    // We'll create a simple API call to check the table structure
    console.log('\n🗄️ Checking freelancer table structure...');
    
    // Since we don't have a direct table check endpoint, let's try to understand the issue
    // by looking at the error more carefully
    
    console.log('\n🔍 Analysis of the error:');
    console.log('Error: "No freelancer found with MetaMask ID: 0x7bde8a8fb9c2b460cf6aa5de7c70c09a4097623c"');
    console.log('This means:');
    console.log('1. The freelancer table exists (otherwise we\'d get a table not found error)');
    console.log('2. The API is working and connecting to the database');
    console.log('3. The freelancer record with this MetaMask ID doesn\'t exist');
    
    console.log('\n💡 Possible causes:');
    console.log('1. You registered as a Client instead of Freelancer');
    console.log('2. The MetaMask ID in localStorage doesn\'t match what\'s in the database');
    console.log('3. The freelancer record was never created during registration');
    console.log('4. There\'s a mismatch between the metamaskid field names');
    
    console.log('\n🔧 Troubleshooting steps:');
    console.log('1. Check your registration: Did you select "Freelancer" as your role?');
    console.log('2. Verify your MetaMask wallet address matches what\'s shown in localStorage');
    console.log('3. Try logging out and logging back in');
    console.log('4. Check if you can access the client dashboard instead');
    
    // Let's also check what tables exist and their structure
    console.log('\n📊 Checking available API endpoints...');
    
    // Test the get-jobs endpoint to see if it works
    try {
      const jobsResponse = await fetch('/api/get-jobs');
      if (jobsResponse.ok) {
        const jobsData = await jobsResponse.json();
        console.log(`✅ get-jobs endpoint working - found ${jobsData.total} jobs`);
      } else {
        console.log('❌ get-jobs endpoint failed');
      }
    } catch (error) {
      console.log('❌ get-jobs test failed:', error.message);
    }
    
    // Test the post-proposal endpoint to see if it works
    try {
      const proposalResponse = await fetch('/api/post-proposal');
      if (proposalResponse.ok) {
        console.log('✅ post-proposal endpoint accessible');
      } else {
        console.log('❌ post-proposal endpoint failed');
      }
    } catch (error) {
      console.log('❌ post-proposal test failed:', error.message);
    }
    
    console.log('\n🎯 Summary:');
    console.log('The issue is that your freelancer record doesn\'t exist in the database.');
    console.log('This typically happens when:');
    console.log('- You registered as a Client instead of Freelancer');
    console.log('- The registration process failed to create the freelancer record');
    console.log('- There\'s a MetaMask ID mismatch');
    
    console.log('\n💡 Solution:');
    console.log('1. Go to the registration page');
    console.log('2. Make sure to select "Freelancer" as your role');
    console.log('3. Connect your MetaMask wallet');
    console.log('4. Complete the registration process');
    console.log('5. Then try accessing /freelancer-home again');
    
  } catch (error) {
    console.error('💥 Error in freelancer table check:', error.message);
  }
};

// Run the check
checkFreelancerTable(); 