import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constant.js";

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");

connectButton.onclick = connect;
fundButton.onclick = fund;

console.log(ethers);

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("메타마스크가 설치되어있습니다.");
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      connectButton.innerText = "연결되었습니다!";
    } catch (error) {
      console.log(error);
    }
  } else {
    fundButton.innerText = "메타마스크를 설치해주세요.";
  }
}

// 기부하기
async function fund() {
    const ethAmount = "77"
  console.log(`${ethAmount} 만큼 기부함`);
  if (typeof window.ethereum !== "undefined") {
    // provider / 블록체인에 연결
    // signer / wallet / someone with some gas
    // 상호작용할 계약
    // ^ ABI & Address
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    console.log(contract);
    try {
        const transactionResponse = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
    } catch(error) {
        console.log(error);
    }
  }
}

// 출금하기
