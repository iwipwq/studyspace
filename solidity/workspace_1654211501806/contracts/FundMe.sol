// 사용자로부터 펀딩기금 받아오기
// 기금 인출하기
// 달러로 최소 펀딩 금액 설정하기

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./PriceConverter.sol";

error NotOwner();

contract FundMe {
    using PriceConverter for uint256;

    uint256 public constant MINIMUM_USD = 50 * 1e18;
    // uint256 public number;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    address public immutable i_owner;

    constructor (){
        i_owner = msg.sender;
    }

    function fund() public payable {
        // 달러로 최소 금액을 설정하려 합니다.
        // 1. 어떻게 이 계약으로 ETH를 보낼까요?
        // number = 5;
        require(msg.value.getConversionRate() >= MINIMUM_USD, unicode"최소 펀딩금액에 미달합니다.");
        // revert 될 경우 이후 액션에서 소모된 가스는 반환됩니다.
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    // function getDecimals() public view returns (uint8) {
    //     AggregatorV3Interface priceFeed = AggregatorV3Interface(0xECe365B379E1dD183B20fc5f022230C044d51404);
    //     return priceFeed.decimals();
    //     // 18 decimals
    // }

    // function getPrice() public view returns(uint256) {
    //     // ABI
    //     // Address 
    //     AggregatorV3Interface priceFeed = AggregatorV3Interface(0xECe365B379E1dD183B20fc5f022230C044d51404);
    //     // (uint80 roundId, int price, uint startedAt, uint updateAt, uint80 answeredInRound) = priceFeed.latestRoundData();
    //     (, int256 price, , , ) = priceFeed.latestRoundData();
    //     // ETH in term of USD
    //     // 1800.00000000
    //     return uint256(price * 1e10); // * 1 ** 10;
    // }

    // function getVersion() public view returns (uint256) {
    //     AggregatorV3Interface priceFeed = AggregatorV3Interface(0xECe365B379E1dD183B20fc5f022230C044d51404);
    //     return priceFeed.version();
    // }

    // function getConversionRate(uint256 ethAmount) public view returns(uint256) {
    //     uint256 ethPrice = getPrice();
    //     uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
    //     // 2999.999999999999999999
    //     return ethAmountInUsd;
    // }

    function withdraw() public onlyOwner {
        // require(msg.sender == owner, unicode"펀딩 소유자만 인출할 수 있습니다.");
        // for loop
        /* starting index, ending index, step amount*/
        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        // reset the array
        funders = new address[](0);
        // actually withdraw the funds
        (bool callSuccess,/*bytes dataReturned*/) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, unicode"호출 실패");
    }

    modifier onlyOwner {
        require(msg.sender == i_owner, unicode"펀딩 소유자만 인출할 수 있습니다.");
        // if(msg.sender != i_owner) { revert NotOwner() };
        _;
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }
}
