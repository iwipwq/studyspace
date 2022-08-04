pragma solidity ^0.8.4;

import "./7_IMock.sol";
import "./5_Bridge.sol";

contract Mock is IMock {

    string public constant s_someString = "some string";
    uint256 public randomWords;
    bytes4 public bridgeFunctionSelector;

    event WordsRequested(uint256 indexed argument, uint256 requestId, address indexed sender);
    
    function externalContractFunction(uint256 _requestId, string memory _someString) external {
        externalContractFunctionWithOverride(_requestId, _someString, new uint256[](0));
    }
    function externalContractFunctionWithOverride(uint256 _requestId, string memory _someString, uint256[] memory _words) public {
        _words[0] = uint256(keccak256(abi.encode(_requestId, 0)));
        randomWords = _words[0];
        Bridge bridge;
        bridgeFunctionSelector = bridge.rawExternalContractFunction.selector;
        bytes memory callReq = abi.encodeWithSelector(bridge.rawExternalContractFunction.selector);
    }

    function requestWords(uint256 _argument) external override returns(uint256) {
        uint256 requestId = 1;
        emit WordsRequested(_argument,requestId,msg.sender);
        return requestId;
    }
}
