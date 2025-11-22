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

1. Basic Math → `BasicMath`
2. Deploying to Testnet → `BasicMath`
3. Control Structures → `ControlStructures`
4. Storage → `EmployeeStorage`
5. Arrays → `ArraysExercise`
6. Mappings → `FavoriteRecords`
7. Structs → `GarageManager`
8. Inheritance → `InheritanceSubmission`
9. Imports → `ImportsExercise`
10. Errors → `ErrorTriageExercise`
11. The New Keyword → `AddressBookFactory`
12. Minimal Token → `UnburnableToken`
13. ERC-20 → `WeightedVoting`
14. ERC-721 → `HaikuNFT`

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