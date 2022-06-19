const { assert, expect } = require("chai");
const { deployments, ethers, getNamedAccounts } = require("hardhat");

describe("FundMe", function () {
  let fundMe;
  let deployer;
  let mockV3Aggregator;
  // const sendValue = "1000000000000000000" // 1eth
  const sendValue = ethers.utils.parseEther("1"); // 1eth
  beforeEach(async function () {
    // fundMe 계약 배포
    // hardhat-deploy 플러그인으로
    // const accounts = await ethers.getSigners()
    // const accountZero = accounts[0];
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContract("FundMe", deployer);
    mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
    console.log("모의계약주소",mockV3Aggregator.address);
    console.log("샌드밸류",sendValue);
  });

  describe("constructor", function () {
    it("aggregator 주소를 알맞게 가지고 있는지", async function () {
      const response = await fundMe.priceFeed();
      assert(response, mockV3Aggregator.address);
    });
  });

  describe("fund", function () {
    it("eth량이 기준미달일때 실패해야 함", async function () {
      await expect(fundMe.fund()).to.be.revertedWith(
        "최소 펀딩금액에 미달합니다."
      );
    });
    it("addressToAmountFunded에 주소와 기부자가 업데이트 되었나", async function () {
      await fundMe.fund({ value: sendValue });
      const response = await fundMe.addressToAmountFunded(deployer.address);
      assert.equal(response.toString(), sendValue.toString());
    });
  });
});
