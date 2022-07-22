import { ConnectButton } from "web3uikit";

export default function Header () {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 text-3xl">분산화 추첨</h1>
            <div className="ml-auto py-2 px-2"></div>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}