// Debug script to inspect the deployed factory contract
// Run this in the browser console or as a Node.js script

import { ethers } from 'ethers';

const FACTORY_ADDRESS = '0xC5fc4f2AEd5e837462bc5B07C1f99938A1f9564f';
const SEPOLIA_RPC = 'https://sepolia.infura.io/v3/your-project-id'; // Replace with your RPC

// Common factory contract ABIs to try
const FACTORY_ABIS = [
    // Standard factory pattern
    [
        "event ProjectCreated(address indexed project, address indexed client, address indexed freelancer)",
        "function createProject(address _freelancer, string _objective, uint256 _milestones, bool resolveWithDAO) payable returns (address projectAddress)",
        "function getAllProjects() view returns (address[] memory)"
    ],

    // Alternative pattern with different parameter order
    [
        "event ProjectCreated(address indexed project, address indexed client, address indexed freelancer)",
        "function createProject(string _objective, address _freelancer, uint256 _milestones, bool resolveWithDAO) payable returns (address projectAddress)",
        "function getAllProjects() view returns (address[] memory)"
    ],

    // Pattern with additional parameters
    [
        "event ProjectCreated(address indexed project, address indexed client, address indexed freelancer)",
        "function createProject(address _freelancer, string _objective, uint256 _milestones, bool resolveWithDAO, address _client) payable returns (address projectAddress)",
        "function getAllProjects() view returns (address[] memory)"
    ]
];

async function debugContract() {
    try {
        // Connect to Sepolia
        const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC);

        console.log('🔍 Inspecting contract at:', FACTORY_ADDRESS);

        // Check if contract exists
        const code = await provider.getCode(FACTORY_ADDRESS);
        if (code === '0x') {
            console.error('❌ No contract deployed at this address');
            return;
        }

        console.log('✅ Contract exists at address');

        // Try to call the contract with different ABIs
        for (let i = 0; i < FACTORY_ABIS.length; i++) {
            try {
                console.log(`\n🔍 Trying ABI ${i + 1}:`);
                const contract = new ethers.Contract(FACTORY_ADDRESS, FACTORY_ABIS[i], provider);

                // Try to get all projects (view function, should not fail)
                try {
                    const projects = await contract.getAllProjects();
                    console.log(`✅ ABI ${i + 1} works! getAllProjects returned:`, projects);

                    // Try to estimate gas for createProject
                    const freelancer = '0xb0af0e1682d41a2b620f983265dd07db175086d700';
                    const objective = 'Smart Contract Auditor';
                    const milestones = 1;
                    const resolveWithDAO = false;
                    const value = ethers.parseEther('0.1'); // Small amount for testing

                    try {
                        const gasEstimate = await contract.createProject.estimateGas(
                            freelancer, objective, milestones, resolveWithDAO, { value }
                        );
                        console.log(`✅ Gas estimate successful: ${gasEstimate.toString()}`);
                        console.log(`✅ ABI ${i + 1} is correct!`);
                        return FACTORY_ABIS[i];
                    } catch (gasError) {
                        console.log(`❌ Gas estimate failed:`, gasError.message);
                    }
                } catch (viewError) {
                    console.log(`❌ View function failed:`, viewError.message);
                }
            } catch (error) {
                console.log(`❌ ABI ${i + 1} failed:`, error.message);
            }
        }

        console.log('\n❌ None of the tested ABIs worked');
        console.log('💡 You may need to get the actual ABI from the contract deployer');

    } catch (error) {
        console.error('❌ Error debugging contract:', error);
    }
}

// Export for use in other files
export { debugContract, FACTORY_ABIS };

// Run if this file is executed directly
if (typeof window === 'undefined') {
    debugContract();
}
