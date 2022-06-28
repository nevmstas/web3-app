import { useTemplate } from '../../../hooks/use-template'
import Button from '../../atoms/Button'
import { TransferForm, WalletCard } from '../../organisms'

const TransactionPage = () => {
    const { TemplateWrapper } = useTemplate()
    const connectWallet = () => {}
    return (
        <TemplateWrapper>
            <div>
                <Button onClick={connectWallet} label={'Connect Wallet'} />
                <WalletCard />
                <TransferForm />
            </div>
        </TemplateWrapper>
    )
}

export default TransactionPage
