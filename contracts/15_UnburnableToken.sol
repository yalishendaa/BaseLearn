// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UnburnableToken {
    mapping(address => uint256) public balances;
    uint256 public totalSupply;
    uint256 public totalClaimed;
    mapping(address => bool) private hasClaimed;

    error TokensClaimed();
    error AllTokensClaimed();
    error UnsafeTransfer(address recipient);

    constructor() {
        totalSupply = 100000000;
    }

    function claim() public {
        if (totalClaimed >= totalSupply) {
            revert AllTokensClaimed();
        }
        if (hasClaimed[msg.sender]) {
            revert TokensClaimed();
        }

        balances[msg.sender] += 1000;
        totalClaimed += 1000;
        hasClaimed[msg.sender] = true;
    }

    function safeTransfer(address _to, uint256 _amount) public {
        if (_to == address(0)) {
            revert UnsafeTransfer(_to);
        }
        if (_to.balance == 0) {
            revert UnsafeTransfer(_to);
        }
        
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
}
