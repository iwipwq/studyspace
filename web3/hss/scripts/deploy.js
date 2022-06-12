const {ethers, run} = require("hardhat");

//async main
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("계약을 배포중입니다...")
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // private key ㅇㄷ? rpc url ㅇㄷ?
  console.log(`이곳에 배포되었습니다: ${simpleStorage.address}`)
}

async function verify(contractAddress, args) {
  console.log("계약을 검증하고 있습니다...");
  try {
    await run("verify:verify", {
      address:contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    console.log(e);
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
