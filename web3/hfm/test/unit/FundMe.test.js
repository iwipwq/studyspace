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
    console.log("모의계약주소", mockV3Aggregator.address);
    console.log("보낸 금액", sendValue.toString());
    console.log("deployer", deployer);
    // console.log(
    //   "(await ethers.getSingers())[1]",
    //   (await ethers.getSigners())[1]
    // );
  });

  describe("constructor", function () {
    it("aggregator 주소를 알맞게 가지고 있는지", async function () {
      const response = await fundMe.getPriceFeed();
      assert(response, mockV3Aggregator.address);
    });
  });

  describe("fund", function () {
    it("eth량이 기준미달일때 실패해야 함", async function () {
      await expect(fundMe.fund()).to.be.revertedWith(
        "최소 펀딩금액에 미달합니다."
      );
    });
    it("s_addressToAmountFunded에 주소와 기부자가 맵핑되어 업데이트 되어야 합니다.", async function () {
      await fundMe.fund({ value: sendValue });
      const response = await fundMe.getAddressToAmountFunded(deployer);
      assert.equal(response.toString(), sendValue.toString());
    });
    it("s_funders에 기부자 주소가 들어와야 합니다.", async function () {
      await fundMe.fund({ value: sendValue });
      const funder = await fundMe.getFunders(0);
      assert.equal(funder, deployer);
    });
  });

  describe("withdraw", function () {
    beforeEach(async function () {
      await fundMe.fund({ value: sendValue });
    });

    it("하나의 기부자에게서 ETH 인출", async function () {
      // Arrange
      const startingFundMeBalance = await fundMe.provider.getBalance(
        fundMe.address
      );
      const startingDeployerBalance = await fundMe.provider.getBalance(
        deployer
      );
      // Act
      const transactionResponse = await fundMe.withdraw();
      const transactionReceipt = await transactionResponse.wait(1);
      const { effectiveGasPrice, gasUsed } = transactionReceipt;
      const gasCost = gasUsed.mul(effectiveGasPrice);

      const endingFundMeBalance = await fundMe.provider.getBalance(
        fundMe.address
      );
      const endingDeployerBalance = await fundMe.provider.getBalance(deployer);
      // Assert
      assert.equal(endingFundMeBalance, 0);
      assert.equal(
        startingDeployerBalance.add(startingFundMeBalance).toString(),
        endingDeployerBalance.add(gasCost).toString()
      );
    });

    it("다수의 기부자들로부터 인출이 가능해야함", async function () {
      const accounts = await ethers.getSigners();
      for (let i = 1; i < 6; i++) {
        // Arrange
        const fundMeConnectedContract = await fundMe.connect(accounts[i]);
        await fundMeConnectedContract.fund({ value: sendValue });
        const startingFundMeBalance = await fundMe.provider.getBalance(
          fundMe.address
        );
        const startingDeployerBalance = await fundMe.provider.getBalance(
          deployer
        );
        // Act
        const transactionResponse = await fundMe.withdraw();
        const transactionReceipt = await transactionResponse.wait(1);
        const { effectiveGasPrice, gasUsed } = transactionReceipt;
        const gasCost = gasUsed.mul(effectiveGasPrice);
        const endingFundMeBalance = await fundMe.provider.getBalance(
          fundMe.address
        );
        const endingDeployerBalance = await fundMe.provider.getBalance(
          deployer
        );
        // Assert
        assert(
          startingDeployerBalance.add(startingFundMeBalance).toString(),
          endingDeployerBalance.add(gasCost).toString()
        );
        // 후원자목록(s_funders 배열) 초기화 확인
        await expect(fundMe.getFunders(0)).to.be.reverted;
        // 맵핑값이 0으로 초기화 되었는지 확인
        for (let i = 1; i < 6; i++) {
          const amountFunded = await fundMe.getAddressToAmountFunded(
            accounts[i].address
          );
          assert.equal(amountFunded, 0);
        }
      }
    });

    it("계약소유자만이 잔액을 인출할 수 있어야 함", async function () {
      const accounts = await ethers.getSigners();
      const attacker = accounts[1];
      console.log(`account0: ${accounts[0].address}`);
      console.log(`account1: ${accounts[1].address}`);
      console.log(`account2: ${accounts[2].address}`);
      console.log(`fundMe.getOwner(): ${await fundMe.getOwner()}`)
      const attackerConnectedContract = await fundMe.connect(attacker);
      await expect(attackerConnectedContract.withdraw()).to.be.revertedWith("FundMe__NotOwner");
    });

    it("cheaperWithdraw 테스트...", async function () {
      const accounts = await ethers.getSigners();
      for (let i = 1; i < 6; i++) {
        // Arrange
        const fundMeConnectedContract = await fundMe.connect(accounts[i]);
        await fundMeConnectedContract.fund({ value: sendValue });
        const startingFundMeBalance = await fundMe.provider.getBalance(
          fundMe.address
        );
        const startingDeployerBalance = await fundMe.provider.getBalance(
          deployer
        );
        // Act
        const transactionResponse = await fundMe.cheaperWithdraw();
        const transactionReceipt = await transactionResponse.wait(1);
        const { effectiveGasPrice, gasUsed } = transactionReceipt;
        const gasCost = gasUsed.mul(effectiveGasPrice);
        const endingFundMeBalance = await fundMe.provider.getBalance(
          fundMe.address
        );
        const endingDeployerBalance = await fundMe.provider.getBalance(
          deployer
        );
        // Assert
        assert(
          startingDeployerBalance.add(startingFundMeBalance).toString(),
          endingDeployerBalance.add(gasCost).toString()
        );
        // 후원자목록(s_funders 배열) 초기화 확인
        await expect(fundMe.getFunders(0)).to.be.reverted;
        // 맵핑값이 0으로 초기화 되었는지 확인
        for (let i = 1; i < 6; i++) {
          const amountFunded = await fundMe.getAddressToAmountFunded(
            accounts[i].address
          );
          assert.equal(amountFunded, 0);
        }
      }
    });

  });

});
