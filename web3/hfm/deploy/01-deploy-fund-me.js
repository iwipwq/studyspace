// import
// main function
// calling of main function

// function deployFunc(hre) {
//     console.log("안녕!")
// }

// module.exports.default = deployFunc

const { network, ethers } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
// const helperConfig = require("../helper-hardhat-config");
// const networkConfig = helperConfig.networkConfig;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log, get, execute } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // 만약 체인아이디가 X면 주소는 Y를 사용
  // 만약 체인아이디가 Z면 주소는 A를 사용
  // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    // const ethUsdAggregator = await deployments.get("MockV3Aggregator")
    const ethUsdAggregator = await get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }

  // 이제 무슨 일이 일어나냐면...
  // 체인을 바꾸고 싶을때 어떻게 해야 할까요
  // 1. 로컬 호스트 또는 하드햇 네트워크로 이동할 때 모의실험(mock)을 사용할 겁니다.
  const args = [ethUsdPriceFeedAddress];
  log("프라이스피드주소 " + args);
  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: args, // 여기에 주소 리스트 입력
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
  log("배포된 계약 " + fundMe.adress);
  // 체인이 개발환경이 아니라면 바로 검증
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    //검증
    await verify(fundMe.address, args);
  }

  /** 
   * execute( // execute function call on contract
    name: string,
    options: TxOptions,
    methodName: string,
    ...args: any[]
  )
  */

  // const getFundMe = await ethers.getContractAt("FundMe",fundMe.address);
  // const MockV3cont =await ethers.getContract("MockV3Aggregator",deployer)

  // const exePriceFeed = await execute(
  //   "FundMe",
  //   {
  //     from: deployer,
  //     log: true,
  //     confirmations: network.config.blockConfirmations || 1,
  //   },
  //   "priceFeed"
  // );
  log("---------------------------------------");
  // console.log("펀드미프라이스피드", getFundMe.address, MockV3cont.address, await getFundMe.priceFeed());
  // console.log(`MockV3cont.address === getFundMe.priceFeed() ? ${MockV3cont.address === await getFundMe.priceFeed()}`)
  log("---------------------------------------------------------------");
};
// (async function () {});

module.exports.tags = ["all", "fundme"];
