const { ethers } = require("ethers");

const connect = async function () {
    if(typeof window.ethereum !== undefined) {
        console.log("메타마스크 감지");
        await ethereum.request({method: "eth_requestAccounts"});
    }
}

const execute = async function () {
    // address √
    // contract ABI (bluePrint to interact with a contract) √
    // function √
    // node connection √
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    const abi = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "addPerson",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "nameToFavoriteNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "people",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "favoriteNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "retrieve",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "store",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    const provider = new ethers.providers.Web3Provider(window.ethereum); // Web3Provider("http://127.0.0.1/8545/")
    const signer = provider.getSigner(); // this is going to get the connected account
    const contract = new ethers.Contract(contractAddress, abi, signer)
    await contract.store(42);
}

const createConnectButton = function () {
    const connectBtn = document.createElement("button");
    const connectBtnContent = document.createTextNode("지갑 연결하기");
    connectBtn.appendChild(connectBtnContent);
    connectBtn.setAttribute("class","connect-button");
    connectBtn.addEventListener("click", connect);
    return connectBtn;
}

const createExecuteButton = function () {
    const executeBtn = document.createElement("button");
    const executeBtnContent = document.createTextNode("실행하기");
    executeBtn.appendChild(executeBtnContent);
    executeBtn.setAttribute("class","execute-button");
    executeBtn.addEventListener("click", execute);
    return executeBtn;
}


const renderElements = function () {
    document.body.append(createConnectButton(),createExecuteButton());
}

renderElements();