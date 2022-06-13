const {ethers, run, network} = require("hardhat");

//async main
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("계약을 배포중입니다...")
  const simpleStorage = await simpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // private key ㅇㄷ? rpc url ㅇㄷ?
  console.log(`이곳에 배포되었습니다: ${simpleStorage.address}`)
  //하드햇 로컬 네트워크에 배포했다면 어떻게 될까?
  console.log(network.config);
  if(network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log("블록 트랜잭션 대기중...")
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`현재 좋아하는 숫자: ${currentValue}`);
  const transactionResponse = await simpleStorage.store("7");
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`업데이트 된 좋아하는 숫자 ${updatedValue}`);
  
  const addPerson = await simpleStorage.addPerson("KIM","7");
  await addPerson.wait(1);
  console.log("person 불러오는중");
  const updatedObj = await simpleStorage.people(0);
  const updatedMap = await simpleStorage.nameToFavoriteNumber("KIM");
  console.log(`업데이트 된 people배열: ${updatedObj}`,updatedObj.toString());
  console.log(`업데이트 된 Map: ${updatedMap}`,updatedMap.toString());

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
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("이미 배포된 계약입니다.");
    } else {
      console.log(e);
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
