// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract FirstSurprise {
    struct Camper {
        bool isHappy;
    }

    mapping(uint => Camper) public campers;

    function setHappy(uint index) public {
        campers[index].isHappy = true;
    }

    function surpriseOne(uint index) public {
        Camper c = campers[index]; //TypeError: Data location must be "storage", "memory" or "calldata" for variable, but none was given.
        //Camper storage c;
        c.isHappy = false;
    }
}

contract AnotherSurprise {
    struct Camper {
        bool isHappy;
    }

    uint public x = 100;

    mapping(uint => Camper) public campers;

    function setHappy(uint index) public {
        campers[index].isHappy = true;
    }

    function surpriseTwo() public {
        Camper storage c;
        c.isHappy = false; // TypeError: This variable is of storage pointer type and can be accessed without prior assignment, which would lead to undefined behaviour.
    }

    function slightOfHand(uint index) public {
        Camper storage c = campers[index];
        c.isHappy = false;
    }
}
