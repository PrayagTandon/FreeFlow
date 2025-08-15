// Configuration file for FreeFlow client
// Update these values according to your deployment

export const config = {
  // Smart Contract Factory Address on Sepolia
  // Replace with your actual deployed factory contract address
  FACTORY_ADDRESS: '0x283c9c2689526d7e96ae8d2a91d000a2e0d8d57b',

  // Network Configuration
  NETWORK: {
    name: 'Sepolia',
    chainId: 11155111,
    rpcUrl: 'https://sepolia.infura.io', // Optional: for custom RPC
  },

  // Gas Configuration
  GAS: {
    limit: 200000, // Gas limit for smart contract deployment
    price: 20000000000, // 20 gwei in wei
  },

  // UI Configuration
  UI: {
    maxEscrowAmount: '0.5', // Maximum escrow amount in ETH for demo purposes
    defaultMilestones: 1,
  }
};

// Helper function to get factory address
export const getFactoryAddress = () => {
  // First try environment variable, then fall back to config
  return process.env.NEXT_PUBLIC_FACTORY_ADDRESS || config.FACTORY_ADDRESS;
};
