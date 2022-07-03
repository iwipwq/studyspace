const {developmentChains } = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { delpoy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // const chainName = network.name;

  if(developmentChains.includes(network.name)) {
    log("로컬 네트워크 감지됨! 모의계약 배포중...")
    // deploy a mock vrfCoordinatorV2...
  }
};
