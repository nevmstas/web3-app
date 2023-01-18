import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import TransactionCard from '../transaction-card'

const limit = 3

const CardList: React.FC = () => {
    const { transactionsPaginator, getTransactionPerPage } =
        useContext(TransactionContext)

    const { transactions, nextOffset, total } = transactionsPaginator

    useEffect(() => {
        getTransactionPerPage(0, limit)
    }, [])

    const handleOnNextClick = () => {
        getTransactionPerPage(nextOffset, limit)
    }

    const handleOnBackClick = () => {
        //TODO: moved it to smart contract func
        let previousOffset = nextOffset - limit * 2
        if (previousOffset < 0) previousOffset = 0

        getTransactionPerPage(previousOffset, limit)
    }

    return (
        <div className="flex md:flex-row flex-col space-x-10 mb-7">
            {nextOffset !== 3 && (
                <button onClick={handleOnBackClick}>{'<'}</button>
            )}
            {transactions &&
                transactions.map((transaction) => (
                    <TransactionCard transaction={transaction} />
                ))}
            {nextOffset < total && (
                <button onClick={handleOnNextClick}>{'>'}</button>
            )}
        </div>
    )
}

export default CardList
