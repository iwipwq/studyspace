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
    const ethAmount = "1"
  console.log(`${ethAmount} 만큼 기부할거에요`);
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
        // 트랜잭션이 채굴될때 listen

        //ex) 이 tx가 끝날때까지 기다리렴
        // await을 쓰게 되면 여기서 이 함수가 끝날때까지 코드실행을 멈추라는 뜻
        await listenForTransactionMine(transactionResponse,provider)
        console.log("완료!");
    } catch(error) {
        console.log(error);
    }
  }
}

function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}...`);
    // 블록체인을 위한 리스너를 만들기 위해 프로미스 반환
    // 이제 여기에서 블록이 채굴되면 어떤 일을 할건지 결정
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
            console.log(`Completed with ${transactionReceipt.confirmations} confirmations`);
            resolve()
        })
    })
}

// 출금하기
