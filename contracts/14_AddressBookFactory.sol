// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AddressBook is Ownable {
    struct Contact {
        uint256 id;
        string firstName;
        string lastName;
        uint256[] phoneNumbers;
    }

    Contact[] private contacts;
    mapping(uint256 => uint256) private idToIndex;
    uint256 private nextId = 1;

    error ContactNotFound(uint256 id);

    constructor(address _owner) Ownable(_owner) {}

    function addContact(
        string calldata _firstName,
        string calldata _lastName,
        uint256[] calldata _phoneNumbers
    ) external onlyOwner {
        contacts.push(Contact(nextId, _firstName, _lastName, _phoneNumbers));
        idToIndex[nextId] = contacts.length - 1;
        nextId++;
    }

    function deleteContact(uint256 _id) external onlyOwner {
        uint256 index = idToIndex[_id];
        if (index >= contacts.length || contacts[index].id != _id) {
            revert ContactNotFound(_id);
        }
        contacts[index] = contacts[contacts.length - 1];
        idToIndex[contacts[index].id] = index;
        contacts.pop();
        delete idToIndex[_id];
    }

    function getContact(uint256 _id) external view returns (Contact memory) {
        uint256 index = idToIndex[_id];
        if (index >= contacts.length || contacts[index].id != _id) {
            revert ContactNotFound(_id);
        }
        return contacts[index];
    }

    function getAllContacts() external view returns (Contact[] memory) {
        return contacts;
    }
}

contract AddressBookFactory {
    function deploy() public returns (address) {
        AddressBook newAddressBook = new AddressBook(msg.sender);
        return address(newAddressBook);
    }
}
