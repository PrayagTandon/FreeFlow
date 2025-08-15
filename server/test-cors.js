import fetch from 'node-fetch';

async function testCORS() {
    try {
        console.log('🔍 Testing CORS configuration...');
        
        // Test OPTIONS request (preflight)
        const optionsResponse = await fetch('http://localhost:5000/api/auth/register', {
            method: 'OPTIONS',
            headers: {
                'Origin': 'http://localhost:3000',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
        });
        
        console.log('✅ OPTIONS request successful');
        console.log('CORS Headers:', {
            'Access-Control-Allow-Origin': optionsResponse.headers.get('Access-Control-Allow-Origin'),
            'Access-Control-Allow-Methods': optionsResponse.headers.get('Access-Control-Allow-Methods'),
            'Access-Control-Allow-Headers': optionsResponse.headers.get('Access-Control-Allow-Headers')
        });
        
        // Test actual POST request
        const postResponse = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:3000'
            },
            body: JSON.stringify({
                name: 'Test User',
                email: 'test@example.com',
                password: 'password123'
            })
        });
        
        console.log('✅ POST request successful');
        console.log('Response status:', postResponse.status);
        
        const responseData = await postResponse.json();
        console.log('Response data:', responseData);
        
    } catch (error) {
        console.error('❌ CORS test failed:', error.message);
    }
}

testCORS(); 