import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import TransactionCard from '../transaction-card'

const limit = 3

const CardList: React.FC = () => {
    const { transactionsPaginator, getTransactionPerPage } =
        useContext(TransactionContext)

    const { transactions } = transactionsPaginator

    useEffect(() => {
        getTransactionPerPage(1, limit)
    }, [])

    const handleOnClickNext = () => {
        getTransactionPerPage(transactionsPaginator.nextOffset, limit)
    }

    return (
        <div className="flex space-x-10 mb-7">
            <button>{'<'}</button>
            {transactions &&
                transactions.map((transaction) => (
                    <TransactionCard transaction={transaction} />
                ))}
            <button onClick={handleOnClickNext}>{'>'}</button>
        </div>
    )
}

export default CardList
