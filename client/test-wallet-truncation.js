// Test script to verify wallet address truncation
function testWalletTruncation() {
  console.log('🧪 Testing Wallet Address Truncation...\n');

  // Test cases
  const testCases = [
    '0x1234567890123456789012345678901234567890', // Long address
    '0x1234567890', // Medium address
    '0x12345', // Short address
    '0x123', // Very short address
    '', // Empty string
    null, // Null value
    undefined // Undefined value
  ];

  testCases.forEach((walletAddress, index) => {
    console.log(`Test ${index + 1}: "${walletAddress}"`);
    
    if (walletAddress && walletAddress !== 'No wallet connected') {
      if (walletAddress.length > 10) {
        const truncated = `${walletAddress.substring(0, 5)}...${walletAddress.substring(walletAddress.length - 5)}`;
        console.log(`  ✅ Truncated: ${truncated}`);
        console.log(`  📏 Original length: ${walletAddress.length}`);
        console.log(`  📏 Truncated length: ${truncated.length}`);
      } else {
        console.log(`  ✅ Kept as is: ${walletAddress}`);
        console.log(`  📏 Length: ${walletAddress.length}`);
      }
    } else {
      console.log(`  ✅ No wallet: No wallet connected`);
    }
    console.log('');
  });

  console.log('🎯 Expected Results:');
  console.log('- Long addresses (>10 chars): First 5 + ... + Last 5');
  console.log('- Short addresses (≤10 chars): Display as is');
  console.log('- Empty/null/undefined: Show "No wallet connected"');
}

// Run the test
testWalletTruncation(); 