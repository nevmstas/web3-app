import { useContext } from 'react'
import { TransactionContext } from '../../../context/TransactionContext'
import { useTemplate } from '../../../hooks/use-template'
import Button from '../../atoms/Button'
import { TransactionCard, TransferForm, WalletCard } from '../../organisms'

const TransactionPage = () => {
    const { TemplateWrapper } = useTemplate()
    const { connectWallet, currentAccount, sendTransaction } =
        useContext(TransactionContext)

    return (
        <TemplateWrapper>
            <div>
                {!currentAccount && (
                    <Button onClick={connectWallet} label={'Connect Wallet'} />
                )}
                <WalletCard />
                <TransferForm sendTransaction={sendTransaction} />
                <TransactionCard />
            </div>
        </TemplateWrapper>
    )
}

export default TransactionPage
