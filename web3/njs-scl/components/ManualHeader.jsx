import { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function ManualHaeder() {
  const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    console.log("isWebEnalbed onload",isWeb3Enabled);
    console.log(window.localStorage.getItem("connected") == true);
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
        if(window.localStorage.getItem("connected")) {
            enableWeb3();
        };
    }
  }, [isWeb3Enabled]);

  useEffect(()=>{
    Moralis.onAccountChanged((account) => {
        console.log(`계정이 ${account} 로 변경되었습니다.`)
        if(account == null) {
            window.localStorage.removeItem("connected");
            deactivateWeb3();
            console.log("비어있는 계정이(null account) 발견되어 Web3 연결을 해제합니다.")
        }
    })
  },[])

  return (
    <div>
      {account ? (
        <p>
          계정 {account.slice(0, 6)}...{account.slice(account.length - 4)} 에
          연결되었습니다!
        </p>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if(typeof window !== "undefined") {
                console.log("setItem 실행됨");
                window.localStorage.setItem("connected","injected");
            }
          }}
          disabled={isWeb3EnableLoading}
        >
          연결하기
        </button>
      )}
    </div>
  );
}
