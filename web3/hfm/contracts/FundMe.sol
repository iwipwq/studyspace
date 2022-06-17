// 사용자로부터 펀딩기금 받아오기
// 기금 인출하기
// 달러로 최소 펀딩 금액 설정하기

//SPDX-License-Identifier: MIT
// pragma
pragma solidity ^0.8.8;
// imports
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";
// Error codes
error FundMe__NotOwner();

// Interfaces, Libraries, Contracts

/** @title 크라우드 펀딩을 위한 계약
 *  @author iwipwq
 *  @notice 이 계약은 펀딩 계약을 보여주기위한 예시입니다.
 *  @dev 이 계약은 price feeds가 라이브러리로 구현되어있습니다.
 */
contract FundMe {
    // Type Declarations
    using PriceConverter for uint256;

    // State Variables
    uint256 public constant MINIMUM_USD = 50 * 1e18;
    // uint256 public number;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    address public immutable i_owner;

    AggregatorV3Interface public priceFeed;

    //modifier
    modifier onlyOwner() {
        require(
            msg.sender == i_owner,
            unicode"펀딩 소유자만 인출할 수 있습니다."
        );
        // if(msg.sender != i_owner) { revert FundMe__NotOwner();}
        _;
    }

    // Functions Order:
    //// constructor
    //// receive
    //// fallback
    //// external
    //// public
    //// internal
    //// private
    //// view / pure

    constructor(address priceFeedAddress) {
        i_owner = msg.sender;
        priceFeed = AggregatorV3Interface(priceFeedAddress);
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }

    /**
     *  @notice 이 함수가 계약에 모금을 해줍니다.
     *  @dev 트랜스퍼는 call로 구현되어있습니다.
     */
    function fund() public payable {
        // 달러로 최소 금액을 설정하려 합니다.
        // 1. 어떻게 이 계약으로 ETH를 보낼까요?
        // number = 5;
        require(
            msg.value.getConversionRate(priceFeed) >= MINIMUM_USD,
            unicode"최소 펀딩금액에 미달합니다."
        );
        // revert 될 경우 이후 액션에서 소모된 가스는 반환됩니다.
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public onlyOwner {
        // require(msg.sender == owner, unicode"펀딩 소유자만 인출할 수 있습니다.");
        // for loop
        /* starting index, ending index, step amount*/
        for (
            uint256 funderIndex = 0;
            funderIndex < funders.length;
            funderIndex++
        ) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        // reset the array
        funders = new address[](0);
        // actually withdraw the funds
        (
            bool callSuccess, /*bytes dataReturned*/

        ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, unicode"호출 실패");
    }
}