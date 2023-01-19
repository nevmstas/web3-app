import { useContext, useState } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import { useTemplate } from '../../../hooks/use-template'
import { Link } from '../../atoms'
import Button from '../../atoms/Button'
import { TransferForm, WalletCard } from '../../organisms'
import CardList from '../../organisms/card-list/CardList'

const TransactionPage = () => {
    const { TemplateWrapper } = useTemplate()
    const { connectWallet, currentAccount, sendTransaction, isLoading } =
        useContext(TransactionContext)

    const [isSending, setIsSending] = useState(true)

    const toggleTransactionPage = () => {
        setIsSending((prev) => !prev)
    }

    return (
        <TemplateWrapper>
            <div className="flex flex-col mt-28">
                {!currentAccount && (
                    <Button onClick={connectWallet} label={'Connect Wallet'} />
                )}
                {isSending ? (
                    <>
                        <WalletCard />
                        <TransferForm
                            sendTransaction={sendTransaction}
                            isLoading={isLoading}
                        />
                    </>
                ) : (
                    <CardList />
                )}
                <Link onClick={toggleTransactionPage}>
                    {isSending ? 'Go to transactions' : 'Send new'}
                </Link>
            </div>
        </TemplateWrapper>
    )
}

export default TransactionPage
