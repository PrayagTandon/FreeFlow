// Test script to check if the API endpoint is working
const testAPIEndpoint = async () => {
  try {
    console.log('🧪 Testing API endpoint accessibility...');
    
    // Test the freelancer stats endpoint
    console.log('\n📡 Testing /api/get-freelancer-stats...');
    
    const response = await fetch('/api/get-freelancer-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metamaskId: 'test-metamask-id' })
    });
    
    console.log(`Response status: ${response.status}`);
    console.log(`Response ok: ${response.ok}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ API endpoint is working! Response:', data);
    } else {
      const errorData = await response.json();
      console.log('❌ API endpoint returned error:', errorData);
    }
    
    // Test other endpoints for comparison
    console.log('\n📡 Testing other API endpoints for comparison...');
    
    // Test get-jobs endpoint
    try {
      const jobsResponse = await fetch('/api/get-jobs');
      console.log(`get-jobs status: ${jobsResponse.status} (${jobsResponse.ok ? 'OK' : 'FAILED'})`);
    } catch (error) {
      console.log('get-jobs failed:', error.message);
    }
    
    // Test test-db endpoint
    try {
      const dbResponse = await fetch('/api/test-db');
      console.log(`test-db status: ${dbResponse.status} (${dbResponse.ok ? 'OK' : 'FAILED'})`);
    } catch (error) {
      console.log('test-db failed:', error.message);
    }
    
    console.log('\n💡 If the freelancer stats endpoint returns 404:');
    console.log('1. Restart your development server (Ctrl+C, then npm run dev)');
    console.log('2. Check the terminal for any error messages');
    console.log('3. Verify the file exists at: src/app/api/get-freelancer-stats/route.js');
    
  } catch (error) {
    console.error('💥 Error testing API endpoint:', error.message);
  }
};

// Run the test
testAPIEndpoint(); 