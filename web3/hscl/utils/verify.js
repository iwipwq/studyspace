const { run } = require("hardhat");

const verify = async (contractAddress, args) => {
  console.log("계약 검증중...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("이미 검증된 계약입니다.");
    } else {
      console.log(error);
    }
  }
};

module.exports = { verify };
