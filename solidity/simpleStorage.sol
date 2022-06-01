// SPDX-License-Identifier: MIT
pragma solidity 0.8.8;

contract SimpleStorage {
    // 이 변수는 0으로 초기화 됩니다.
    // 여기서 visibility를 따로 설정해 놓지 않으면 기본 internal입니다.
    uint256 public favoriteNumber;
    // uint256 public favoriteNumberOne;
    // uint256 public favoriteNumberTwo;
    // People public person = People({favoriteNumber: 2, name: "Kim"});
    // People public person1 = People({favoriteNumber: 5, name: "CHAD"});
    // People public person2 = People({favoriteNumber: 7, name: "pepe"});

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    // uint256[] public favoriteNumbersList;
    People[] public people;

    //함수도 다른 언어와 마찬가지로 사용됩니다.
    // 이 함수는 uint256 형태의 인수를 가지는데 이름은 _favoriteNumber 입니다.
    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        // favoriteNumber = favoriteNumber + 1; 함수안에서 하는일이 많아질수록 가스요금이 많이 나갑니다
    }

    //view ,pure 단독 호출시 가스를 소모하지 않는 함수들
    function retrieve() public view returns(uint256) {
        return favoriteNumber;
    }

    function add() public pure returns(uint256) {
        return (1 + 1);
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        // people.push(People(_favoriteNumber, _name));
        // People memory newPerson = People({favoriteNumber: _favoriteNumber, name: _name});
        People memory newPerson = People(_favoriteNumber, _name);
        people.push(newPerson);
    }
}