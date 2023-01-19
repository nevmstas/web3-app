import { useCallback, useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const LIMIT = 3

export const useTransaction = () => {
    const { transactionsPaginator, getTransactionPerPage } =
        useContext(TransactionContext)

    const { transactions, nextOffset, total } = transactionsPaginator

    const isPrevDisable = nextOffset !== LIMIT
    const isNextDisable = nextOffset < total

    useEffect(() => {
        getTransactionPerPage(0, LIMIT)
    }, [])

    const next = useCallback(() => {
        getTransactionPerPage(nextOffset, LIMIT)
    }, [nextOffset, LIMIT])

    const prev = useCallback(() => {
        //TODO: moved it to smart contract func
        let previousOffset = nextOffset - LIMIT * 2
        if (previousOffset < 0) previousOffset = 0

        getTransactionPerPage(previousOffset, LIMIT)
    }, [nextOffset, LIMIT])

    return {
        next,
        prev,
        transactions,
        isPrevDisable,
        isNextDisable,
    }
}
