import { useContext, useEffect, useState } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import { useTransaction } from '../../../hooks/use-transactions'
import { SliderButton } from '../../atoms'
import TransactionCard from '../transaction-card'

const CardList: React.FC = () => {
    const { next, prev, isPrevDisable, transactions, isNextDisable } =
        useTransaction()

    return (
        <div className="flex md:flex-row flex-col space-x-10 mb-7 items-center">
            {isPrevDisable && (
                <SliderButton onClick={prev} direction={'prev'} />
            )}
            {transactions &&
                transactions.map((transaction) => (
                    <TransactionCard transaction={transaction} />
                ))}
            {isNextDisable && (
                <SliderButton onClick={next} direction={'next'} />
            )}
        </div>
    )
}

export default CardList
