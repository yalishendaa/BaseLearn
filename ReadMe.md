# 🏕️ Base Camp - Smart Contracts

Automated deployment system for Base Camp exercises.

## 🚀 Quick Start

### First Time Setup
1. Install dependencies and setup
npm run setup

OR use interactive menu
./setup.sh

### Deploy Contracts
Deploy all 14 contracts
npm run deploy

### Verify Contracts
Verify all contracts on BaseScan
npm run verify

### Full Automation (Deploy + Verify)
Deploy and verify in one command
npm run full

## 📋 Other Commands

Show deployed addresses
npm run addresses

Clean everything
npm run clean

## 📁 Project Structure

basecamp/
├── contracts/ # Solidity contracts (15 files)
├── scripts/
│ ├── deploy.js # Deploy all contracts
│ └── verify.js # Verify all contracts
├── deployments/
│ └── baseSepolia.json # Deployed addresses
├── setup.sh # Interactive setup script
├── .env # Private keys (create this!)
└── package.json

## 🔑 Environment Variables

Create `.env` file:

cp .env.example .env

Fill required lines:

# Private Key (without 0x prefix!)
PRIVATE_KEY=YOUR_PRIVATE_KEY
# Base Sepolia RPC URL
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
# https://etherscan.io/apidashboard - login and create api key
BASESCAN_API_KEY=API_KEY_TOKEN

## 📝 Base Learn Submission Order

After deployment, use these addresses on https://docs.base.org/learn/

1. Basic Math → BasicMath
2. Deploying to Testnet → BasicMath
3. Control Structures → ControlStructures
4. Storage → EmployeeStorage
5. Arrays → ArraysExercise
6. Mappings → FavoriteRecords
7. Structs → GarageManager
8. Inheritance → InheritanceSubmission
9. Imports → ImportsExercise
10. Errors → ErrorTriageExercise
11. The New Keyword → AddressBookFactory
12. Minimal Token → UnburnableToken
13. ERC-20 → WeightedVoting
14. ERC-721 → HaikuNFT

Get all addresses: `npm run addresses`

## 🎯 Troubleshooting

**Compilation error?**
npm run clean
npm run deploy

**Verification failed?**
npm run verify

**Need fresh start?**
npm run clean
./setup.sh