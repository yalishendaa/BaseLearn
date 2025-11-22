// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract HaikuNFT is ERC721 {
    struct Haiku {
        address author;
        string line1;
        string line2;
        string line3;
    }

    Haiku[] public haikus;
    mapping(address => mapping(uint256 => bool)) public sharedHaikus;
    uint256 public counter = 1;

    error HaikuNotUnique();
    error NotYourHaiku(uint256 haikuId);
    error NoHaikusShared();

    constructor() ERC721("HaikuNFT", "HAIKU") {}

    function mintHaiku(string memory _line1, string memory _line2, string memory _line3) external {
        for (uint256 i = 0; i < haikus.length; i++) {
            if (
                keccak256(bytes(haikus[i].line1)) == keccak256(bytes(_line1)) ||
                keccak256(bytes(haikus[i].line2)) == keccak256(bytes(_line2)) ||
                keccak256(bytes(haikus[i].line3)) == keccak256(bytes(_line3))
            ) {
                revert HaikuNotUnique();
            }
        }
        _safeMint(msg.sender, counter);
        haikus.push(Haiku(msg.sender, _line1, _line2, _line3));
        counter++;
    }

    function shareHaiku(uint256 _id, address _to) external {
        if (haikus[_id - 1].author != msg.sender) revert NotYourHaiku(_id);
        sharedHaikus[_to][_id] = true;
    }

    function getMySharedHaikus() external view returns (Haiku[] memory) {
        uint256 count = 0;
        for (uint256 i = 1; i < counter; i++) {
            if (sharedHaikus[msg.sender][i]) count++;
        }
        if (count == 0) revert NoHaikusShared();

        Haiku[] memory result = new Haiku[](count);
        uint256 idx = 0;
        for (uint256 i = 1; i < counter; i++) {
            if (sharedHaikus[msg.sender][i]) {
                result[idx] = haikus[i - 1];
                idx++;
            }
        }
        return result;
    }
}
