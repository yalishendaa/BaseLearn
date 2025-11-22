// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BasicMath {
    function adder(uint256 _a, uint256 _b) public pure returns (uint256 sum, bool error) {
        uint256 MAX_INT = type(uint256).max;
        if (_b > MAX_INT - _a) {
            return (0, true);
        }
        return (_a + _b, false);
    }

    function subtractor(uint256 _a, uint256 _b) public pure returns (uint256 difference, bool error) {
        if (_b > _a) {
            return (0, true);
        }
        return (_a - _b, false);
    }
}
