const renderConnectButton = function () {
    const connect = async function () {
        if(typeof window.ethereum !== undefined) {
            console.log("메타마스크 감지");
            await ethereum.request({method: "eth_requestAccounts"});
        }
    }
    const connectBtn = document.createElement("button");
    const connectBtnContent = document.createTextNode("지갑 연결하기");
    connectBtn.appendChild(connectBtnContent);
    connectBtn.setAttribute("class","connect-button");
    connectBtn.addEventListener("click", connect);
    return connectBtn;
}
document.body.append(renderConnectButton());

async function execute() {
    
}
