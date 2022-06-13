import { task } from "hardhat/config";

export default task("block-number","현재 블록넘버 확인하기").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`현재 블록 넘버: ${blockNumber}`);
    }
)

// module.exports = {}