const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainName = network.name;
  // const chainId = network.config.chainId
  // if( chainId === 31337) {}

  if (developmentChains.includes(chainName)) {
    log("로컬 네트워크 감지됨! 모의계약 배포중...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER],
    });
    log("모의계약 배포가 완료되었습니다!");
    log("-----------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
