pragma solidity ^0.8.4;

abstract contract Bridge {
    address private immutable mockAddress;
    constructor(address _mockAddress) {
        mockAddress = _mockAddress;
    }

    function externalContractFunction(uint256 requestId, uint256[] memory words) internal virtual;

    function rawExternalContractFunction(uint256 requestId, uint256[] memory words) external {
        externalContractFunction(requestId, words);
    }
}