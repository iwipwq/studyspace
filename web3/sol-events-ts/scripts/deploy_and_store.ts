import hre from "hardhat";

async function main() {
    await hre.run("compile")
    // going to deploy this
    const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy()
    await simpleStorage.deployed()
    const transactionResponse = await simpleStorage.store(1);
    const transactionReceipt = await transactionResponse.wait();
    // console.log(transactionReceipt);
    console.log(simpleStorage.address);
    console.log(transactionReceipt.events![0].args!.oldNumber.toString());
    console.log(transactionReceipt.events![0].args!.newNumber.toString());
    console.log(transactionReceipt.events![0].args!.addedNumber.toString());
    console.log(transactionReceipt.events![0].args!.sender); //request ID로 지정해서 사용할 수 있어서 유용
    console.log(transactionReceipt.events);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})
