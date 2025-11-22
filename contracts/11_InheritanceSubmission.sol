// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

abstract contract Employee {
    uint256 public idNumber;
    uint256 public managerId;

    constructor(uint256 _idNumber, uint256 _managerId) {
        idNumber = _idNumber;
        managerId = _managerId;
    }

    function getAnnualCost() public view virtual returns (uint256);
}

contract Salaried is Employee {
    uint256 public annualSalary;

    constructor(uint256 _idNumber, uint256 _managerId, uint256 _annualSalary) 
        Employee(_idNumber, _managerId) 
    {
        annualSalary = _annualSalary;
    }

    function getAnnualCost() public view override returns (uint256) {
        return annualSalary;
    }
}

contract Hourly is Employee {
    uint256 public hourlyRate;

    constructor(uint256 _idNumber, uint256 _managerId, uint256 _hourlyRate) 
        Employee(_idNumber, _managerId) 
    {
        hourlyRate = _hourlyRate;
    }

    function getAnnualCost() public view override returns (uint256) {
        return hourlyRate * 2080;
    }
}

contract Manager {
    uint256[] public employeeIds;

    function addReport(uint256 _reportId) public {
        employeeIds.push(_reportId);
    }

    function resetReports() public {
        delete employeeIds;
    }
}

contract Salesperson is Hourly {
    constructor(uint256 _idNumber, uint256 _managerId, uint256 _hourlyRate) 
        Hourly(_idNumber, _managerId, _hourlyRate) 
    {}
}

contract EngineeringManager is Salaried, Manager {
    constructor(uint256 _idNumber, uint256 _managerId, uint256 _annualSalary) 
        Salaried(_idNumber, _managerId, _annualSalary) 
    {}
}

contract InheritanceSubmission {
    address public salesPerson;
    address public engineeringManager;

    constructor(address _salesPerson, address _engineeringManager) {
        salesPerson = _salesPerson;
        engineeringManager = _engineeringManager;
    }
}
