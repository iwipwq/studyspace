pragma solidity ^0.8.4;

import "./7_IMock.sol";
import "./5_Bridge.sol";

contract Base is Bridge{
    uint256 public immutable i_argument = 8;
    uint256 public s_randomWord;
    IMock public immutable i_mock;
    uint256 public s_requestId;

    constructor(address mockAddress) Bridge(mockAddress) {
        i_mock = IMock(mockAddress);
    }

    event BaseToMockSuccess (uint256 randomWord, uint256 requestId);

    // function getSelector(string calldata _func) external pure returns (bytes4) {
    //     return bytes4(keccak256(bytes(_func)));
    // }
    // function encoder() public view returns(bytes memory){
    //     bytes memory abc = abi.encode("hello");
    //     return abc;
    // }

    function internalRequest() public payable returns (uint256 requestId) {
        requestId = i_mock.requestWords(i_argument);
        s_requestId = requestId;
    }

    function externalContractFunction(uint256 requestId, uint256[] memory words) internal override{
        s_randomWord = words[0];
        emit BaseToMockSuccess(s_randomWord,requestId);
    }
}

