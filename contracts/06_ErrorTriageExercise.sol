// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ErrorTriageExercise {
    uint256[] arr;

    function diffWithNeighbor(uint256 _a, uint256 _b, uint256 _c, uint256 _d) 
        public pure returns (uint256[] memory) 
    {
        uint256[] memory results = new uint256[](3);
        results[0] = _a > _b ? _a - _b : _b - _a;
        results[1] = _b > _c ? _b - _c : _c - _b;
        results[2] = _c > _d ? _c - _d : _d - _c;
        return results;
    }

    function applyModifier(uint256 _base, int256 _modifier) public pure returns (uint256) {
        if (_modifier > 0) {
            return _base + uint256(_modifier);
        }
        return _base - uint256(-_modifier);
    }

    function popWithReturn() public returns (uint256) {
        if (arr.length > 0) {
            uint256 result = arr[arr.length - 1];
            arr.pop();
            return result;
        }
        return 0;
    }

    function addToArr(uint256 _num) public { arr.push(_num); }
    function getArr() public view returns (uint256[] memory) { return arr; }
    function resetArr() public { delete arr; }
}
