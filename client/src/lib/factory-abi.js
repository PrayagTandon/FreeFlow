export const FACTORY_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_freelancer",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_objective",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_milestones",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "resolveWithDAO",
                "type": "bool"
            }
        ],
        "name": "createProject",
        "outputs": [
            {
                "internalType": "address",
                "name": "projectAddress",
                "type": "address"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_freeflowSigner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "project",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "client",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "freelancer",
                "type": "address"
            }
        ],
        "name": "ProjectCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allProjects",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "freeflowSigner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllProjects",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "instanceContract",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];