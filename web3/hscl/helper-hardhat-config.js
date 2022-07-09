const { ethers } = require("hardhat");

const networkConfig = {
    4: {
        name: "rinkeby",
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        entranceFee: ethers.utils.parseEther("0.01"),
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        subscriptionId: "7276",
        callbackGasLimit: "500000", // 500,000
        interval: "30",
    },
    31337: {
        name: "hardhat",
        entranceFee: ethers.utils.parseEther("0.01"),
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", //모의계약이기때문에 뭐가와도 상관없음(비어있어도 돌아감)
        callbackGasLimit: "500000", // 500,000
        interval: "30",
    }
}

const developmentChains = ["hardhat","localhost"];

module.exports = {
    networkConfig,
    developmentChains,
}