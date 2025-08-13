// Simple test script to test the proposal API directly
const BASE_URL = 'http://localhost:3000/api';

async function testProposalAPI() {
  console.log('🧪 Testing Proposal API Directly...\n');

  try {
    // Test with minimal data
    console.log('1️⃣ Testing minimal proposal...');
    const minimalData = {
      name: 'Test Job',
      description: 'Test Description',
      clientId: 1,
      clientEmail: 'test@example.com'
    };

    const response = await fetch(`${BASE_URL}/post-proposal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(minimalData)
    });

    console.log('Response Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Success:', data);
    } else {
      const errorData = await response.json();
      console.log('❌ Error Response:', errorData);
      console.log('Error:', errorData.error);
      console.log('Details:', errorData.details);
    }

  } catch (error) {
    console.error('❌ Request failed:', error.message);
  }
}

// Run the test
testProposalAPI(); 