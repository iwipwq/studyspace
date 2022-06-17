const { run } = require("hardhat");

const verify = async (contractAddress, args) => {
    console.log("계약 검증을 진행하고 있습니다...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if(e.message.toLowerCase().includes("already verify")) {
            console.log("이미 검증된 계약입니다.");
        } else {
            console.log("에러발생!에러발생!",e);
        }
    }
}

module.exports = {
    verify
}