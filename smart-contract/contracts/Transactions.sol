// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions{
    uint256 transactionCount;
    
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionPaging(uint offset, uint limit) public view returns (TransferStruct[] memory paginatedTransactions, uint nextOffset, uint total){
        if(limit == 0) {
            limit = 1;
        }
        if (limit > transactionCount - offset) {
            limit = transactionCount - offset;
        }

        TransferStruct[] memory values = new TransferStruct[](limit);
        for(uint i = 0; i < limit; i++) {
            values[i] = transactions[offset + i];
        }

        return (values, offset + limit, transactionCount);
    }

    function getTransactionCount() public view returns(uint256) {
        return transactionCount;
    }
}