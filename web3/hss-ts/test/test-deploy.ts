import { ethers } from "hardhat";
import { assert, expect } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types" 

// describe("SimpleStorage", () => {});
describe("SimpleStorage", function () {
  let simpleStorageFactory: SimpleStorage__factory
  let simpleStorage: SimpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = (await ethers.getContractFactory("SimpleStorage")) as SimpleStorage__factory;
    simpleStorage = await simpleStorageFactory.deploy();
  })

  it("favorite number가 0으로 시작되야 합니다.", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
    // expect(currentValue.toStirng().to.equal(expectedValue))
  })

  // it.only() only 붙은 것만 테스트
  it("store를 호출했을 때 업데이트 되어야 합니다.", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.retrieve();
    assert(currentValue.toString(), expectedValue);
  })

  it("AddPerson으로 사람이름과 좋아하는 숫자를 추가했을때 people배열에 좋아하는 숫자와 사람이름이 담긴 People struct가 추가 되어야합니다.", async function () {
    const expectedNameValue = "김철수";
    const expectedNumberValue = "7";
    const expectedValue = `${expectedNumberValue},${expectedNameValue}`;
    const transactionResponse = await simpleStorage.addPerson(expectedNameValue, expectedNumberValue);
    await transactionResponse.wait(1);
    const currentValue = await simpleStorage.people(0);
    assert(currentValue.toString(), expectedValue); 
  })
})
