// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FavoriteRecords {
    mapping(string => bool) private approvedRecords;
    string[] private approvedRecordsIndex;
    mapping(address => mapping(string => bool)) public userFavorites;
    mapping(address => string[]) private userFavoritesIndex;

    error NotApproved(string albumName);

    constructor() {
        approvedRecordsIndex = [
            "Thriller","Back in Black","The Bodyguard","The Dark Side of the Moon",
            "Their Greatest Hits (1971-1975)","Hotel California","Come On Over","Rumours","Saturday Night Fever"
        ];
        for (uint256 i = 0; i < approvedRecordsIndex.length; i++) {
            approvedRecords[approvedRecordsIndex[i]] = true;
        }
    }

    function getApprovedRecords() public view returns (string[] memory) {
        return approvedRecordsIndex;
    }

    function addRecord(string memory _albumName) public {
        if (!approvedRecords[_albumName]) revert NotApproved({albumName: _albumName});
        if (!userFavorites[msg.sender][_albumName]) {
            userFavorites[msg.sender][_albumName] = true;
            userFavoritesIndex[msg.sender].push(_albumName);
        }
    }

    function getUserFavorites(address _address) public view returns (string[] memory) {
        return userFavoritesIndex[_address];
    }

    function resetUserFavorites() public {
        for (uint256 i = 0; i < userFavoritesIndex[msg.sender].length; i++) {
            delete userFavorites[msg.sender][userFavoritesIndex[msg.sender][i]];
        }
        delete userFavoritesIndex[msg.sender];
    }
}
