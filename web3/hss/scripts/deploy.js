const {ethers} = require("hardhat");

//async main
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("계약을 배포중입니다...")
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // private key ㅇㄷ? rpc url ㅇㄷ?
  console.log(`이곳에 배포되었습니다: ${simpleStorage.address}`)
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
