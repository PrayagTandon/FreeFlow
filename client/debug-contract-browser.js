// Browser-friendly debug script for the factory contract
// Copy and paste this into your browser console while on the client dashboard

async function debugFactoryContract() {
    try {
        const FACTORY_ADDRESS = '0xC5fc4f2AEd5e837462bc5B07C1f99938A1f9564f';

        console.log('🔍 Debugging Factory Contract at:', FACTORY_ADDRESS);

        // Check if MetaMask is available
        if (typeof window.ethereum === 'undefined') {
            console.error('❌ MetaMask not available');
            return;
        }

        // Connect to MetaMask
        const provider = new (await import('ethers')).BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);

        if (accounts.length === 0) {
            console.error('❌ No MetaMask account connected');
            return;
        }

        console.log('✅ Connected to MetaMask account:', accounts[0]);

        // Check if contract exists
        const code = await provider.getCode(FACTORY_ADDRESS);
        if (code === '0x') {
            console.error('❌ No contract deployed at this address');
            return;
        }

        console.log('✅ Contract exists at address');
        console.log('📝 Contract bytecode length:', code.length);

        // Test different ABI patterns
        const testABIs = [
            // Pattern 1: Standard order
            {
                name: 'Standard Order',
                abi: [
                    "event ProjectCreated(address indexed project, address indexed client, address indexed freelancer)",
                    "function createProject(address _freelancer, string _objective, uint256 _milestones, bool resolveWithDAO) payable returns (address projectAddress)",
                    "function getAllProjects() view returns (address[] memory)"
                ],
                params: ['0xb0af0e1682d41a2b620f983265dd07db175086d700', 'Smart Contract Auditor', 1, false]
            },

            // Pattern 2: Different parameter order
            {
                name: 'Different Parameter Order',
                abi: [
                    "event ProjectCreated(address indexed project, address indexed client, address indexed freelancer)",
                    "function createProject(string _objective, address _freelancer, uint256 _milestones, bool resolveWithDAO) payable returns (address projectAddress)",
                    "function getAllProjects() view returns (address[] memory)"
                ],
                params: ['Smart Contract Auditor', '0xb0af0e1682d41a2b620f983265dd07db175086d700', 1, false]
            },

            // Pattern 3: With client parameter
            {
                name: 'With Client Parameter',
                abi: [
                    "event ProjectCreated(address indexed project, address indexed client, address indexed freelancer)",
                    "function createProject(address _freelancer, string _objective, uint256 _milestones, bool resolveWithDAO, address _client) payable returns (address projectAddress)",
                    "function getAllProjects() view returns (address[] memory)"
                ],
                params: ['0xb0af0e1682d41a2b620f983265dd07db175086d700', 'Smart Contract Auditor', 1, false, accounts[0]]
            }
        ];

        for (const testABI of testABIs) {
            try {
                console.log(`\n🔍 Testing ${testABI.name}:`);

                const contract = new (await import('ethers')).Contract(FACTORY_ADDRESS, testABI.abi, provider);

                // Test view function first
                try {
                    const projects = await contract.getAllProjects();
                    console.log(`✅ getAllProjects() works! Result:`, projects);

                    // Test gas estimation
                    try {
                        const value = (await import('ethers')).parseEther('0.1');
                        const gasEstimate = await contract.createProject.estimateGas(...testABI.params, { value });
                        console.log(`✅ Gas estimation successful: ${gasEstimate.toString()}`);
                        console.log(`✅ ${testABI.name} ABI is correct!`);

                        // Return the working ABI
                        return {
                            abi: testABI.abi,
                            name: testABI.name,
                            params: testABI.params
                        };
                    } catch (gasError) {
                        console.log(`❌ Gas estimation failed:`, gasError.message);

                        // Try to get more details about the error
                        if (gasError.message.includes('execution reverted')) {
                            console.log('💡 Transaction would revert - check parameters or contract state');
                        }
                    }
                } catch (viewError) {
                    console.log(`❌ View function failed:`, viewError.message);
                }
            } catch (error) {
                console.log(`❌ ${testABI.name} failed:`, error.message);
            }
        }

        console.log('\n❌ None of the tested ABIs worked');
        console.log('💡 You may need to:');
        console.log('   1. Get the actual ABI from the contract deployer');
        console.log('   2. Check if the contract has access controls');
        console.log('   3. Verify the function signature matches exactly');

    } catch (error) {
        console.error('❌ Error debugging contract:', error);
    }
}

// Run the debug function
debugFactoryContract();

// Also export for use in other scripts
window.debugFactoryContract = debugFactoryContract;
