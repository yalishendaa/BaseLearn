const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("\n" + "=".repeat(60));
  console.log("  BASE CAMP - COMPLETE VERIFICATION");
  console.log("=".repeat(60) + "\n");

  const deploymentFile = path.join(__dirname, "..", "deployments", "baseSepolia.json");
  
  if (!fs.existsSync(deploymentFile)) {
    console.log("❌ No deployments found!");
    console.log("Run: npm run deploy\n");
    return;
  }

  const deployments = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));

  let verified = 0;
  let alreadyVerified = 0;
  let failed = 0;

  const contractsList = [
    "BasicMath",
    "ControlStructures",
    "EmployeeStorage",
    "ArraysExercise",
    "FavoriteRecords",
    "GarageManager",
    "ErrorTriageExercise",
    "Salesperson",
    "EngineeringManager",
    "InheritanceSubmission",
    "ImportsExercise",
    "AddressBookFactory",
    "UnburnableToken",
    "WeightedVoting",
    "HaikuNFT"
  ];

  for (let i = 0; i < contractsList.length; i++) {
    const name = contractsList[i];
    const deployment = deployments[name];

    if (!deployment) {
      console.log(`⏭️  [${i+1}/${contractsList.length}] Skipping ${name} (not deployed)\n`);
      continue;
    }

    console.log(`[${i+1}/${contractsList.length}] Verifying ${name}...`);
    console.log(`Address: ${deployment.address}`);
    console.log(`Contract: ${deployment.contract}`);
    console.log(`Args: ${JSON.stringify(deployment.args)}`);

    try {
      await hre.run("verify:verify", {
        address: deployment.address,
        contract: deployment.contract,
        constructorArguments: deployment.args,
      });
      console.log(`✅ Verified!\n`);
      verified++;
      await new Promise(r => setTimeout(r, 2000));
    } catch (error) {
      if (error.message.includes("Already Verified") || error.message.includes("already verified")) {
        console.log(`ℹ️  Already verified\n`);
        alreadyVerified++;
      } else {
        console.log(`❌ Failed: ${error.message.substring(0, 150)}...\n`);
        failed++;
      }
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("  VERIFICATION COMPLETE!");
  console.log("=".repeat(60) + "\n");
  console.log(`✅ Newly verified: ${verified}`);
  console.log(`ℹ️  Already verified: ${alreadyVerified}`);
  console.log(`❌ Failed: ${failed}\n`);
  
  if (failed > 0) {
    console.log("💡 Tip: Failed contracts can be verified manually:");
    console.log("   npx hardhat verify --network baseSepolia <address> <args>\n");
  }
}

main().catch(console.error);