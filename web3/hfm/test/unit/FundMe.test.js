const { assert } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");

describe("FundMe", function () {
  let fundMe;
  let deployer
  let mockV3Aggregator
  beforeEach(async function () {
    // fundMe 계약 배포
    // hardhat-deploy 플러그인으로
    // const accounts = await ethers.getSigners()
    // const accountZero = accounts[0];
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContract("FundMe", deployer);
    mockV3Aggregator = ethers.getContract("MockV3Aggregator",deployer)
    console.log(mockV3Aggregator.address)
  });

  describe("constructor", function () {
    it("aggregator 주소를 알맞게 가지고 있는지", async function () {
      const response = await fundMe.priceFeed();
      assert(response, mockV3Aggregator.address);
    })
  });
});
