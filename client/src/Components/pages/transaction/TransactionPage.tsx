import { useContext, useState } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import { useTemplate } from '../../../hooks/use-template'
import Button from '../../atoms/Button'
import { TransactionCard, TransferForm, WalletCard } from '../../organisms'
import CardList from '../../organisms/card-list/CardList'

const TransactionPage = () => {
    const { TemplateWrapper } = useTemplate()
    const { connectWallet, currentAccount, sendTransaction, transactions } =
        useContext(TransactionContext)

    const [isSending, setIsSending] = useState(true)

    const toggleTransactionPage = () => {
        setIsSending((prev) => !prev)
    }

    return (
        <TemplateWrapper>
            <div className="flex flex-col">
                {!currentAccount && (
                    <Button onClick={connectWallet} label={'Connect Wallet'} />
                )}
                {isSending ? (
                    <>
                        <WalletCard />
                        <TransferForm sendTransaction={sendTransaction} />
                    </>
                ) : (
                    <CardList
                        cards={transactions.map((transaction) => (
                            <TransactionCard transaction={transaction} />
                        ))}
                    />
                )}
                <a
                    className="underline text-white uppercase self-center cursor-pointer"
                    onClick={toggleTransactionPage}
                >
                    {isSending ? 'Go to transactions' : 'Send new'}
                </a>
            </div>
        </TemplateWrapper>
    )
}

export default TransactionPage
