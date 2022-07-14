//Function Enter the Lottery
import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

export default function LotteryEntrance() {
  const { chainId: hexChainId, isWeb3Enabled } = useMoralis();
  const chainId = parseInt(hexChainId);
  const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;
  const [entranceFee, setEntranceFee] = useState("0");

  const dispatch = useNotification();

  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    functionName: "enterRaffle",
    params: {},
    msgValue: entranceFee,
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    functionName: "getEntranceFee",
    params: {},
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      // try to read raffle entrace fee
      async function updateUI() {
        const entranceFeeFromContarct = (await getEntranceFee()).toString();
        console.log(entranceFeeFromContarct);
        setEntranceFee(entranceFeeFromContarct);
        console.log("입장료", entranceFee);
      }
      updateUI();
    }
  }, [isWeb3Enabled]);

  const handleSuccess = async function (tx) {
    tx.wait(1);
    handleNewNotification(tx);
  }

  const handleNewNotification = function () {
    dispatch({
        type: "info",
        message: "트랜잭션 완료!",
        title: "트랜잭션 알림",
        icon: "bell",
        position: "topR",
    })
  }

  return (
    <div>
      {raffleAddress ? (
        <div>
          <button
            onClick={async function () {
              await enterRaffle({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
              });
            }}
          >
            복권 참여하기
          </button>
          <p>
            입장료는 {ethers.utils.formatUnits(entranceFee, "ether")} ETH
            입니다.
          </p>
        </div>
      ) : (
        <p>라플 주소가 발견되지 않았습니다.</p>
      )}
      복권 참가컴포넌트
    </div>
  );
}
