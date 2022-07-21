const { ethers, network } = require("hardhat");

async function mockKeepers() {
  const raffle = await ethers.getContract("Raffle");
  
  console.log((await raffle.getRaffleState()).toString());
  if(await raffle.getRaffleState()) {
    await raffle.raffleOpener()
    console.log(await raffle.getRaffleState())
  }
  console.log((await raffle.getNumberOfPlayers()).toString());
  
  const checkData = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(""));
  const { upkeepNeeded } = await raffle.callStatic.checkUpkeep(checkData);
  console.log('upkeepNeeded val',upkeepNeeded);
  if (upkeepNeeded) {
    const tx = await raffle.performUpkeep(checkData);
    const txReceipt = await tx.wait(1);
    const requestId = txReceipt.events[1].args.requestId;
    console.log(`Performed Upkeep with RequestId: ${requestId}`);
    console.log(`chainID ${network.config.chainId}`);
    if (network.config.chainId == 31337) {
      await mockVrf(requestId, raffle);
    }
  } else {
    console.log("No upkeep needed!");
  }
}

async function mockVrf(requestId, raffle) {
  console.log("현재 위치가 로컬네트워크라면 VRF로 위장합니다.");
  const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock");
  await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, raffle.address);
  console.log("응답받음!");
  const recentWinner = await raffle.getRecentWinner();
  console.log(`우승자는 ${recentWinner} 입니다.`);
}

mockKeepers()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
