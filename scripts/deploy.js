const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("\n" + "=".repeat(60));
  console.log("  BASE CAMP - COMPLETE DEPLOYMENT");
  console.log("=".repeat(60) + "\n");
  
  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  
  console.log(`Network: ${hre.network.name}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Balance: ${hre.ethers.formatEther(balance)} ETH\n`);

  const deployments = {};
  
  // 1. BasicMath
  console.log("[1/15] Deploying BasicMath...");
  const BasicMath = await hre.ethers.getContractFactory("BasicMath");
  const basicMath = await BasicMath.deploy();
  await basicMath.waitForDeployment();
  deployments.BasicMath = { 
    address: await basicMath.getAddress(), 
    args: [],
    contract: "contracts/01_BasicMath.sol:BasicMath"
  };
  console.log(`✅ ${deployments.BasicMath.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 2. ControlStructures
  console.log("[2/15] Deploying ControlStructures...");
  const ControlStructures = await hre.ethers.getContractFactory("ControlStructures");
  const controlStructures = await ControlStructures.deploy();
  await controlStructures.waitForDeployment();
  deployments.ControlStructures = { 
    address: await controlStructures.getAddress(), 
    args: [],
    contract: "contracts/02_ControlStructures.sol:ControlStructures"
  };
  console.log(`✅ ${deployments.ControlStructures.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 3. EmployeeStorage
  console.log("[3/15] Deploying EmployeeStorage...");
  const EmployeeStorage = await hre.ethers.getContractFactory("EmployeeStorage");
  const employeeStorage = await EmployeeStorage.deploy(1000, "Pat", 50000, 112358);
  await employeeStorage.waitForDeployment();
  deployments.EmployeeStorage = { 
    address: await employeeStorage.getAddress(), 
    args: [1000, "Pat", 50000, 112358],
    contract: "contracts/03_EmployeeStorage.sol:EmployeeStorage"
  };
  console.log(`✅ ${deployments.EmployeeStorage.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 4. ArraysExercise
  console.log("[4/15] Deploying ArraysExercise...");
  const ArraysExercise = await hre.ethers.getContractFactory("ArraysExercise");
  const arraysExercise = await ArraysExercise.deploy();
  await arraysExercise.waitForDeployment();
  deployments.ArraysExercise = { 
    address: await arraysExercise.getAddress(), 
    args: [],
    contract: "contracts/04_ArraysExercise.sol:ArraysExercise"
  };
  console.log(`✅ ${deployments.ArraysExercise.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 5. FavoriteRecords
  console.log("[5/15] Deploying FavoriteRecords...");
  const FavoriteRecords = await hre.ethers.getContractFactory("FavoriteRecords");
  const favoriteRecords = await FavoriteRecords.deploy();
  await favoriteRecords.waitForDeployment();
  deployments.FavoriteRecords = { 
    address: await favoriteRecords.getAddress(), 
    args: [],
    contract: "contracts/07_FavoriteRecords.sol:FavoriteRecords"
  };
  console.log(`✅ ${deployments.FavoriteRecords.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 6. GarageManager
  console.log("[6/15] Deploying GarageManager...");
  const GarageManager = await hre.ethers.getContractFactory("GarageManager");
  const garageManager = await GarageManager.deploy();
  await garageManager.waitForDeployment();
  deployments.GarageManager = { 
    address: await garageManager.getAddress(), 
    args: [],
    contract: "contracts/08_GarageManager.sol:GarageManager"
  };
  console.log(`✅ ${deployments.GarageManager.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 7. ErrorTriageExercise
  console.log("[7/15] Deploying ErrorTriageExercise...");
  const ErrorTriageExercise = await hre.ethers.getContractFactory("ErrorTriageExercise");
  const errorTriageExercise = await ErrorTriageExercise.deploy();
  await errorTriageExercise.waitForDeployment();
  deployments.ErrorTriageExercise = { 
    address: await errorTriageExercise.getAddress(), 
    args: [],
    contract: "contracts/06_ErrorTriageExercise.sol:ErrorTriageExercise"
  };
  console.log(`✅ ${deployments.ErrorTriageExercise.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 8. Salesperson
  console.log("[8/15] Deploying Salesperson...");
  const Salesperson = await hre.ethers.getContractFactory("Salesperson");
  const salesperson = await Salesperson.deploy(55555, 11111, 20);
  await salesperson.waitForDeployment();
  const salespersonAddr = await salesperson.getAddress();
  deployments.Salesperson = { 
    address: salespersonAddr, 
    args: [55555, 11111, 20],
    contract: "contracts/11_InheritanceSubmission.sol:Salesperson"
  };
  console.log(`✅ ${deployments.Salesperson.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 9. EngineeringManager
  console.log("[9/15] Deploying EngineeringManager...");
  const EngineeringManager = await hre.ethers.getContractFactory("EngineeringManager");
  const engineeringManager = await EngineeringManager.deploy(54321, 11111, 200000);
  await engineeringManager.waitForDeployment();
  const engineeringManagerAddr = await engineeringManager.getAddress();
  deployments.EngineeringManager = { 
    address: engineeringManagerAddr, 
    args: [54321, 11111, 200000],
    contract: "contracts/11_InheritanceSubmission.sol:EngineeringManager"
  };
  console.log(`✅ ${deployments.EngineeringManager.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 10. InheritanceSubmission
  console.log("[10/15] Deploying InheritanceSubmission...");
  const InheritanceSubmission = await hre.ethers.getContractFactory("InheritanceSubmission");
  const inheritanceSubmission = await InheritanceSubmission.deploy(salespersonAddr, engineeringManagerAddr);
  await inheritanceSubmission.waitForDeployment();
  deployments.InheritanceSubmission = { 
    address: await inheritanceSubmission.getAddress(), 
    args: [salespersonAddr, engineeringManagerAddr],
    contract: "contracts/11_InheritanceSubmission.sol:InheritanceSubmission"
  };
  console.log(`✅ ${deployments.InheritanceSubmission.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 11. ImportsExercise
  console.log("[11/15] Deploying ImportsExercise...");
  const ImportsExercise = await hre.ethers.getContractFactory("ImportsExercise");
  const importsExercise = await ImportsExercise.deploy();
  await importsExercise.waitForDeployment();
  deployments.ImportsExercise = { 
    address: await importsExercise.getAddress(), 
    args: [],
    contract: "contracts/13_ImportsExercise.sol:ImportsExercise"
  };
  console.log(`✅ ${deployments.ImportsExercise.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 12. AddressBookFactory
  console.log("[12/15] Deploying AddressBookFactory...");
  const AddressBookFactory = await hre.ethers.getContractFactory("AddressBookFactory");
  const addressBookFactory = await AddressBookFactory.deploy();
  await addressBookFactory.waitForDeployment();
  deployments.AddressBookFactory = { 
    address: await addressBookFactory.getAddress(), 
    args: [],
    contract: "contracts/14_AddressBookFactory.sol:AddressBookFactory"
  };
  console.log(`✅ ${deployments.AddressBookFactory.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 13. UnburnableToken
  console.log("[13/15] Deploying UnburnableToken...");
  const UnburnableToken = await hre.ethers.getContractFactory("UnburnableToken");
  const unburnableToken = await UnburnableToken.deploy();
  await unburnableToken.waitForDeployment();
  deployments.UnburnableToken = { 
    address: await unburnableToken.getAddress(), 
    args: [],
    contract: "contracts/15_UnburnableToken.sol:UnburnableToken"
  };
  console.log(`✅ ${deployments.UnburnableToken.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 14. WeightedVoting
  console.log("[14/15] Deploying WeightedVoting...");
  const WeightedVoting = await hre.ethers.getContractFactory("WeightedVoting");
  const weightedVoting = await WeightedVoting.deploy("VoteToken", "VOTE");
  await weightedVoting.waitForDeployment();
  deployments.WeightedVoting = { 
    address: await weightedVoting.getAddress(), 
    args: ["VoteToken", "VOTE"],
    contract: "contracts/09_WeightedVoting.sol:WeightedVoting"
  };
  console.log(`✅ ${deployments.WeightedVoting.address}\n`);
  await new Promise(r => setTimeout(r, 3000));

  // 15. HaikuNFT
  console.log("[15/15] Deploying HaikuNFT...");
  const HaikuNFT = await hre.ethers.getContractFactory("HaikuNFT");
  const haikuNFT = await HaikuNFT.deploy();
  await haikuNFT.waitForDeployment();
  deployments.HaikuNFT = { 
    address: await haikuNFT.getAddress(), 
    args: [],
    contract: "contracts/10_HaikuNFT.sol:HaikuNFT"
  };
  console.log(`✅ ${deployments.HaikuNFT.address}\n`);

  // Save deployments with contract paths
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir);
  }
  
  const deploymentFile = path.join(deploymentsDir, "baseSepolia.json");
  fs.writeFileSync(deploymentFile, JSON.stringify(deployments, null, 2));

  console.log("\n" + "=".repeat(60));
  console.log("  ✅ DEPLOYMENT COMPLETE!");
  console.log("=".repeat(60) + "\n");
  
  console.log("📋 BASE LEARN SUBMISSION ADDRESSES:\n");
  console.log(`1. Basic Math:          ${deployments.BasicMath.address}`);
  console.log(`2. Deployment:          ${deployments.BasicMath.address}`);
  console.log(`3. Control Structures:  ${deployments.ControlStructures.address}`);
  console.log(`4. Storage:             ${deployments.EmployeeStorage.address}`);
  console.log(`5. Arrays:              ${deployments.ArraysExercise.address}`);
  console.log(`6. Mappings:            ${deployments.FavoriteRecords.address}`);
  console.log(`7. Structs:             ${deployments.GarageManager.address}`);
  console.log(`8. Inheritance:         ${deployments.InheritanceSubmission.address}`);
  console.log(`9. Imports:             ${deployments.ImportsExercise.address}`);
  console.log(`10. Errors:             ${deployments.ErrorTriageExercise.address}`);
  console.log(`11. The New Keyword:    ${deployments.AddressBookFactory.address}`);
  console.log(`12. Minimal Token:      ${deployments.UnburnableToken.address}`);
  console.log(`13. ERC-20:             ${deployments.WeightedVoting.address}`);
  console.log(`14. ERC-721:            ${deployments.HaikuNFT.address}\n`);
  
  console.log(`💾 Saved to: deployments/baseSepolia.json\n`);
}

main().catch(console.error);