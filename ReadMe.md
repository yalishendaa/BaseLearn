# Base Camp — Smart Contracts

Automated system for deploying and verifying all Base Camp exercises.

## Quick Start

### First-time setup

Install dependencies and initialize the environment:

```bash
npm run setup
```

Or use the interactive script:

```bash
./setup.sh
```

### Deploy contracts

Deploy all 14 contracts:

```bash
npm run deploy
```

### Verify contracts

Verify all deployed contracts on BaseScan:

```bash
npm run verify
```

### Full automation

Deploy and verify in a single step:

```bash
npm run full
```

## Useful Commands

Show all deployed addresses:

```bash
npm run addresses
```

Clean generated files:

```bash
npm run clean
```

## Project Structure

```
basecamp/
├── contracts/          # Solidity contracts (15 files)
├── scripts/
│   ├── deploy.js       # Deployment script
│   └── verify.js       # Verification script
├── deployments/
│   └── baseSepolia.json # Stored deployed addresses
├── setup.sh            # Interactive setup
├── .env                # Environment variables
└── package.json
```

## Environment Variables

Create the `.env` file:

```bash
cp .env.example .env
```

Fill in the required fields:

```
# Private key (without 0x prefix)
PRIVATE_KEY=YOUR_PRIVATE_KEY

# Base Sepolia RPC
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# BaseScan API key
BASESCAN_API_KEY=API_KEY_TOKEN
```

## Base Learn Submission Order

Use these contract names and addresses when submitting to:

[https://docs.base.org/learn/](https://docs.base.org/learn/)

1. Deploying to Testnet → `BasicMath` https://docs.base.org/learn/deployment-to-testnet/deployment-to-testnet-exercise
2. Control Structures → `ControlStructures` https://docs.base.org/learn/control-structures/control-structures-exercise
3. Storage → `EmployeeStorage` https://docs.base.org/learn/storage/storage-exercise
4. Arrays → `ArraysExercise` https://docs.base.org/learn/arrays/arrays-exercise
5. Mappings → `FavoriteRecords` https://docs.base.org/learn/mappings/mappings-exercise
6. Structs → `GarageManager` https://docs.base.org/learn/structs/structs-exercise
7. Inheritance → `InheritanceSubmission` https://docs.base.org/learn/inheritance/inheritance-exercise
8. Imports → `ImportsExercise` https://docs.base.org/learn/imports/imports-exercise
9. Errors → `ErrorTriageExercise` https://docs.base.org/learn/error-triage/error-triage-exercise
10. The New Keyword → `AddressBookFactory` https://docs.base.org/learn/new-keyword/new-keyword-exercise
11. Minimal Token → `UnburnableToken` https://docs.base.org/learn/token-development/minimal-tokens/minimal-tokens-exercise
12. ERC-20 → `WeightedVoting` https://docs.base.org/learn/token-development/erc-20-token/erc-20-exercise
13. ERC-721 → `HaikuNFT` https://docs.base.org/learn/token-development/erc-721-token/erc-721-exercise

View all deployed addresses:

```bash
npm run addresses
```

## Troubleshooting

**Compilation issues**

```bash
npm run clean
npm run deploy
```

**Verification fails**

```bash
npm run verify
```

**Need a full reset**

```bash
npm run clean
./setup.sh
```