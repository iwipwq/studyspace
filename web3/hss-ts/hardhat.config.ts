import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";
import "./tasks/block-number";
import "hardhat-gas-reporter";
import "solidity-coverage";
// ethers를 가져온걸 더 강조해서 표시하고 싶다면 이렇게 작성 (이렇게 안해도 됨) hardhat-waffle 과 hardhat-etherscan이 이미 ethers를 포함하고 있기 때문
// import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    localhost: {
      url:"http://127.0.0.1:8545/",
      //acounts: 하드햇이 자동으로 노드목록에 있는 프라이빗키를 잡아줍니다!
      chainId: 31337,
    }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "KRW",
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  }
};
