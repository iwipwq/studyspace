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
  const [numberOfPlayers, setNumberOfPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("");
  const [playerInputIndex, setPlayerInputIndex] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("");

  const dispatch = useNotification();

  const handleInput = function (e) {
    setPlayerInputIndex(e.target.value);
  };

  const {
    runContractFunction: enterRaffle,
    isLoading,
    isFetching,
  } = useWeb3Contract({
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

  const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getNumberOfPlayers",
    params: {},
  });

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRecentWinner",
    params: {},
  });

  const { runContractFunction: getPlayer } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getPlayer",
    params: { index: playerInputIndex },
  });

  const { runContractFunction: checkUpkeep } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "checkUpkeep",
    params: { checkData: ethers.utils.toUtf8Bytes("") },
  });

  const { runContractFunction: performUpkeep } = useWeb3Contract({
    abi: abi,
    contractAddres: raffleAddress,
    functionName: "performUpkeep",
    params: { performData: ethers.utils.toUtf8Bytes("") },
  });

  const { runContractFunction: fulfillRandomWords } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "fulfillRandomWords",
    params: {},
  });

  async function updateUI() {
    const entranceFeeFromCall = (await getEntranceFee()).toString();
    const numberOfPlayersFromCall = (await getNumberOfPlayers()).toString();
    const recentWinnerFromCall = await getRecentWinner();
    setEntranceFee(entranceFeeFromCall);
    setNumberOfPlayers(numberOfPlayersFromCall);
    setRecentWinner(recentWinnerFromCall);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      // try to read raffle entrace fee
      updateUI();
    }
  }, [isWeb3Enabled]);

  const handleSuccess = async function (tx) {
    tx.wait(1);
    handleNewNotification(tx);
    updateUI();
  };

  const handleNewNotification = function () {
    dispatch({
      type: "info",
      message: "???????????? ??????!",
      title: "???????????? ??????",
      icon: "bell",
      position: "topR",
    });
  };

  return (
    <div className="mt-4">
      {raffleAddress ? (
        <div>
          <button
            className="my-2 bg-blue-500 p-3 rounded-lg text-white hover:bg-blue-700"
            onClick={async function () {
              await enterRaffle({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
              });
            }}
            disabled={isLoading || isFetching}
          >
            {isLoading || isFetching ? (
              <div className="animate-spin spinner-border h-6 w-6 border-b-2 rounded-full"></div>
            ) : (
              <div>????????????</div>
            )}
          </button>
         <div className=" my-4">
            <p>
              ???????????? {ethers.utils.formatUnits(entranceFee, "ether")} ETH
              ?????????.
            </p>
            <p>??? {numberOfPlayers} ?????? ????????? ??????????????????.</p>
            <p>?????? ???????????? {recentWinner} ?????????.</p>
         </div>
          <div>
            <input className=" bg-slate-200 rounded-lg p-3" type="number" max={numberOfPlayers} onChange={handleInput} />
            <button
              className=" p-3 ml-1 bg-blue-500 rounded-lg hover:bg-blue-700 text-white"
              type="button"
              onClick={async function () {
                const player = await getPlayer({
                  onError: (error) => console.log(error),
                  params: playerInputIndex,
                });
                console.log(player);
                setCurrentPlayer(player);
              }}
            >
              ????????? ????????????
            </button>
          </div>
          <p>
            {playerInputIndex}??? ????????? ??????: {currentPlayer}{" "}
          </p>
        </div>
      ) : (
        <p>?????? ????????? ???????????? ???????????????.</p>
      )}
      ?????? ??????????????????
    </div>
  );
}
