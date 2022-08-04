pragma solidity ^0.8.0;

interface IMock {
    function requestWords(uint256 argument) external returns (uint256 requestId);
}