#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "============================================================"
echo "  🏕️  BASE CAMP - AUTOMATED SETUP & DEPLOYMENT"
echo "============================================================"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${RED}❌ .env file not found!${NC}"
    echo ""
    echo "Please create .env file with:"
    echo "PRIVATE_KEY=your_private_key"
    echo "BASESCAN_API_KEY=your_basescan_api_key"
    echo ""
    exit 1
fi

echo -e "${BLUE}📦 Step 1: Installing dependencies...${NC}"
npm install --silent
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Installation failed!${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Dependencies installed${NC}"
echo ""

echo -e "${BLUE}🧹 Step 2: Cleaning artifacts...${NC}"
npx hardhat clean
echo -e "${GREEN}✅ Cleaned${NC}"
echo ""

echo -e "${BLUE}🔨 Step 3: Compiling contracts...${NC}"
npx hardhat compile
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Compilation failed!${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Compiled${NC}"
echo ""

echo -e "${YELLOW}Ready to deploy!${NC}"
echo ""
echo "Choose an option:"
echo "  1) Deploy all contracts to Base Sepolia"
echo "  2) Verify all contracts"
echo "  3) Deploy AND verify (full automation)"
echo "  4) Show deployed addresses"
echo "  5) Exit"
echo ""
read -p "Enter your choice [1-5]: " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}🚀 Deploying contracts...${NC}"
        npx hardhat run scripts/deploy.js --network baseSepolia
        ;;
    2)
        echo ""
        echo -e "${BLUE}🔍 Verifying contracts...${NC}"
        npx hardhat run scripts/verify.js --network baseSepolia
        ;;
    3)
        echo ""
        echo -e "${BLUE}🚀 Deploying contracts...${NC}"
        npx hardhat run scripts/deploy.js --network baseSepolia
        if [ $? -eq 0 ]; then
            echo ""
            echo -e "${BLUE}⏳ Waiting 10 seconds before verification...${NC}"
            sleep 10
            echo ""
            echo -e "${BLUE}🔍 Verifying contracts...${NC}"
            npx hardhat run scripts/verify.js --network baseSepolia
        fi
        ;;
    4)
        if [ -f deployments/baseSepolia.json ]; then
            echo ""
            echo -e "${GREEN}📋 Deployed Addresses:${NC}"
            cat deployments/baseSepolia.json
            echo ""
        else
            echo -e "${RED}❌ No deployments found!${NC}"
        fi
        ;;
    5)
        echo "Goodbye!"
        exit 0
        ;;
    *)
        echo -e "${RED}Invalid choice!${NC}"
        exit 1
        ;;
esac

echo ""
echo "============================================================"
echo -e "${GREEN}  ✅ DONE!${NC}"
echo "============================================================"
echo ""