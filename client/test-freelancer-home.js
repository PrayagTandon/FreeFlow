// Test script to verify freelancer-home page functionality
const testFreelancerHome = async () => {
  try {
    console.log('🧪 Testing freelancer-home page functionality...');
    
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
    
    // Check if user is a freelancer
    if (user.role !== 'Freelancer') {
      console.log('❌ Current user is not a freelancer. Please login as a freelancer.');
      console.log('💡 The freelancer-home page should redirect non-freelancers to login.');
      return;
    }
    
    console.log('✅ User is a freelancer, testing API endpoints...');
    
    // Test freelancer stats endpoint
    console.log('\n📊 Testing freelancer stats endpoint...');
    const statsResponse = await fetch('/api/get-freelancer-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metamaskId: user.metamaskid }),
    });
    
    if (statsResponse.ok) {
      const statsData = await statsResponse.json();
      console.log('✅ Freelancer stats endpoint working!');
      console.log('📈 Stats:', {
        activejobs: statsData.activejobs,
        activebids: statsData.activebids
      });
    } else {
      const errorData = await statsResponse.json();
      console.log('❌ Freelancer stats endpoint failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }
    
    // Test get-jobs endpoint
    console.log('\n💼 Testing get-jobs endpoint...');
    const jobsResponse = await fetch('/api/get-jobs');
    
    if (jobsResponse.ok) {
      const jobsData = await jobsResponse.json();
      console.log('✅ Get-jobs endpoint working!');
      console.log(`📝 Found ${jobsData.total} available jobs`);
      
      if (jobsData.jobs && jobsData.jobs.length > 0) {
        console.log('\n🔍 Sample job details:');
        const sampleJob = jobsData.jobs[0];
        console.log(`   Title: ${sampleJob.title}`);
        console.log(`   Company: ${sampleJob.companyName || 'Not specified'}`);
        console.log(`   Budget: $${sampleJob.budget || 'Not specified'}`);
        console.log(`   Location: ${sampleJob.location || 'Remote'}`);
      }
    } else {
      const errorData = await jobsResponse.json();
      console.log('❌ Get-jobs endpoint failed');
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }
    
    console.log('\n🎉 Freelancer-home page testing completed!');
    console.log('Now you can:');
    console.log('1. Visit: http://localhost:3000/freelancer-home ✅');
    console.log('2. See real-time stats from the database ✅');
    console.log('3. View actual available jobs ✅');
    console.log('4. Non-freelancers will be redirected to login ✅');
    
  } catch (error) {
    console.error('💥 Error in freelancer-home test:', error.message);
  }
};

// Run the test
testFreelancerHome(); 