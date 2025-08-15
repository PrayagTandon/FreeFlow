// Script to add sample jobs to the database for testing
const addSampleJobs = async () => {
  const BASE_URL = 'http://localhost:3000/api';
  
  // Generate future dates for testing
  const today = new Date();
  const getFutureDate = (daysFromNow) => {
    const date = new Date(today);
    date.setDate(today.getDate() + daysFromNow);
    return date.toISOString().split('T')[0];
  };
  
  const sampleJobs = [
    {
      name: 'Frontend React Developer',
      description: 'We need a skilled React developer to build a modern e-commerce platform. Experience with Next.js, TypeScript, and modern CSS frameworks required. The project involves creating responsive components, implementing state management, and optimizing performance.',
      tags: 'React, Next.js, TypeScript, CSS, E-commerce',
      location: 'Remote',
      jobLevel: 'Mid-level',
      budget: 3500,
      qualificationsPreferred: '2+ years React experience, portfolio required',
      validTill: getFutureDate(5), // Expires in 5 days
      companyName: 'TechStart Inc',
      photoUrl: ['https://example.com/tech1.jpg'],
      clientEmail: 'hr@techstart.com'
    },
    {
      name: 'Blockchain Smart Contract Developer',
      description: 'Looking for a blockchain developer to create and audit DeFi smart contracts. Must have experience with Solidity, Ethereum development, and security best practices. Knowledge of DeFi protocols and yield farming strategies is a plus.',
      tags: 'Blockchain, Solidity, Ethereum, DeFi, Smart Contracts',
      location: 'San Francisco, CA',
      jobLevel: 'Senior',
      budget: 8000,
      qualificationsPreferred: '3+ years blockchain development, prior DeFi experience',
      validTill: getFutureDate(12), // Expires in 12 days
      companyName: 'DeFi Labs',
      photoUrl: ['https://example.com/defi1.jpg'],
      clientEmail: 'jobs@defilabs.com'
    },
    {
      name: 'UI/UX Designer for Mobile App',
      description: 'Creative UI/UX designer needed for a fitness tracking mobile app. Should have experience with mobile-first design, user research, and creating intuitive user flows. Proficiency in Figma, Adobe Creative Suite, and understanding of iOS/Android design guidelines required.',
      tags: 'UI/UX, Mobile Design, Figma, Adobe, Fitness App',
      location: 'New York, NY',
      jobLevel: 'Mid-level',
      budget: 4500,
      qualificationsPreferred: 'Portfolio with mobile app designs, user research experience',
      validTill: getFutureDate(20), // Expires in 20 days
      companyName: 'FitTech Solutions',
      photoUrl: ['https://example.com/fit1.jpg', 'https://example.com/fit2.jpg'],
      clientEmail: 'design@fittech.com'
    },
    {
      name: 'Backend Node.js Developer',
      description: 'Experienced Node.js developer needed to build scalable REST APIs and microservices. Should have experience with Express.js, MongoDB/PostgreSQL, authentication systems, and API design. Knowledge of Docker and cloud deployment is preferred.',
      tags: 'Node.js, Express, MongoDB, PostgreSQL, REST API',
      location: 'Remote',
      jobLevel: 'Senior',
      budget: 6000,
      qualificationsPreferred: '4+ years backend development, microservices experience',
      validTill: getFutureDate(3), // Expires in 3 days (urgent)
      companyName: 'CloudScale Systems',
      photoUrl: ['https://example.com/cloud1.jpg'],
      clientEmail: 'dev@cloudscale.com'
    },
    {
      name: 'Data Scientist for E-commerce',
      description: 'Data scientist to analyze customer behavior and optimize our e-commerce platform. Skills needed: Python, SQL, machine learning, statistical analysis, and data visualization. Experience with recommendation systems and A/B testing is highly valued.',
      tags: 'Data Science, Python, SQL, Machine Learning, E-commerce',
      location: 'Austin, TX',
      jobLevel: 'Senior',
      budget: 7500,
      qualificationsPreferred: 'PhD or MS in Data Science, 3+ years experience',
      validTill: getFutureDate(25), // Expires in 25 days
      companyName: 'DataDriven Retail',
      photoUrl: ['https://example.com/data1.jpg'],
      clientEmail: 'data@datadriven.com'
    }
  ];

  console.log('🚀 Adding sample jobs to the database...');
  console.log('📅 Using future expiration dates for testing urgency indicators');
  
  for (let i = 0; i < sampleJobs.length; i++) {
    const job = sampleJobs[i];
    console.log(`\n📝 Adding job ${i + 1}/${sampleJobs.length}: ${job.name}`);
    console.log(`   Expires: ${job.validTill} (${job.validTill === getFutureDate(3) ? 'URGENT' : job.validTill === getFutureDate(5) ? 'Soon' : 'Later'})`);
    
    try {
      const response = await fetch(`${BASE_URL}/post-proposal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ Job "${job.name}" added successfully!`);
        console.log(`   ID: ${data.proposal.id}`);
        console.log(`   Expires: ${job.validTill}`);
      } else {
        const errorData = await response.json();
        console.log(`❌ Failed to add job "${job.name}"`);
        console.log(`   Error: ${errorData.error}`);
        console.log(`   Details: ${errorData.details}`);
      }
    } catch (error) {
      console.log(`💥 Error adding job "${job.name}": ${error.message}`);
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n🎉 Sample jobs addition completed!');
  console.log('Now you can test the freelancer-home page to see the jobs displayed with urgency indicators.');
  console.log('Jobs are sorted by expiration date - urgent jobs (red) will appear at the top!');
};

// Run the script
addSampleJobs(); 