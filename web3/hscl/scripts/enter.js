const { ethers } = require("hardhat");

async function enterRaffle() {
  const raffle = await ethers.getContract("Raffle");
  const raffleEntranceFee = await raffle.getEntraceFee();
  const tx = await raffle.enterRaffle({ value: raffleEntranceFee });
  await tx.wait(1);
  console.log("tx.hash", tx.hash);
  console.log("하우스 입장!");
}

enterRaffle()
  .then(() => process.exit(0))
  .cach((error) => {
    console.log(error);
    process.exit(1);
  });
