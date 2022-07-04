const {developmentChains } = require("../helper-hardhat-config");

const BASE_FEE = ethers.utils.parseEther("0.25") // 0.25 is the premium. It costs 0.25 LINK per request
const GAS_PRICE_LINK = 1e9;

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // const chainName = network.name;
  const args = [BASE_FEE, GAS_PRICE_LINK];

  if(developmentChains.includes(network.name)) {
    log("로컬 네트워크 감지됨! 모의계약 배포중...")
    // deploy a mock vrfCoordinatorV2...
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: args
    });
    log("모의계약 배포완료!")
    log("-------------------------------------")
  }
};

module.exports.tags = ["all", "mocks"];