// Demo script to show Wei to ETH conversion examples
const weiToEth = (weiAmount) => {
  if (!weiAmount) return 0;
  // 1 ETH = 10^18 Wei
  return parseFloat(weiAmount) / Math.pow(10, 18);
};

const formatEthAmount = (ethAmount) => {
  if (ethAmount === 0) return '0 ETH';
  if (ethAmount < 0.001) return `${(ethAmount * 1000).toFixed(3)} mETH`;
  if (ethAmount < 1) return `${ethAmount.toFixed(6)} ETH`;
  return `${ethAmount.toFixed(4)} ETH`;
};

const demoWeiToEth = () => {
  console.log('🧪 Wei to ETH Conversion Demo');
  console.log('================================\n');
  
  // Common Wei amounts and their ETH equivalents
  const examples = [
    { name: '1 Wei', wei: '1' },
    { name: '1,000 Wei', wei: '1000' },
    { name: '1,000,000 Wei', wei: '1000000' },
    { name: '1,000,000,000 Wei', wei: '1000000000' },
    { name: '1,000,000,000,000 Wei', wei: '1000000000000' },
    { name: '1,000,000,000,000,000 Wei', wei: '1000000000000000' },
    { name: '1 ETH', wei: '1000000000000000000' },
    { name: '0.5 ETH', wei: '500000000000000000' },
    { name: '0.1 ETH', wei: '100000000000000000' },
    { name: '0.001 ETH', wei: '1000000000000000' },
    { name: '0.000001 ETH', wei: '1000000000000' },
    { name: '2.5 ETH', wei: '2500000000000000000' },
    { name: '10 ETH', wei: '10000000000000000000' }
  ];
  
  examples.forEach(example => {
    const ethAmount = weiToEth(example.wei);
    const formattedEth = formatEthAmount(ethAmount);
    
    console.log(`${example.name.padEnd(25)} | ${parseInt(example.wei).toLocaleString().padStart(20)} Wei | ${formattedEth.padStart(15)}`);
  });
  
  console.log('\n💡 Key Conversion Points:');
  console.log('• 1 ETH = 1,000,000,000,000,000,000 Wei (10^18)');
  console.log('• 0.001 ETH = 1,000,000,000,000,000 Wei (10^15)');
  console.log('• 0.000001 ETH = 1,000,000,000,000 Wei (10^12)');
  console.log('• 0.000000001 ETH = 1,000,000,000 Wei (10^9)');
  
  console.log('\n🎯 Practical Examples:');
  console.log('• Small payment: 0.001 ETH = 1,000,000,000,000,000 Wei');
  console.log('• Medium payment: 0.1 ETH = 100,000,000,000,000,000 Wei');
  console.log('• Large payment: 1 ETH = 1,000,000,000,000,000,000 Wei');
  
  console.log('\n🔧 Conversion Formula:');
  console.log('ETH = Wei ÷ 10^18');
  console.log('Wei = ETH × 10^18');
  
  console.log('\n✅ Demo completed! The form now shows both Wei and ETH values.');
};

// Run the demo
demoWeiToEth(); 