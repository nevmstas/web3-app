import { useTemplate } from '../../../hooks/use-template'
import Button from '../../atoms/Button'
import { WalletCard } from '../../organisms'

const TransactionPage = () => {
    const { TemplateWrapper } = useTemplate()
    const connectWallet = () => {}
    return (
        <TemplateWrapper>
            <div>
                <Button onClick={connectWallet} label={'Connect Wallet'} />
                <WalletCard />
            </div>
        </TemplateWrapper>
    )
}

export default TransactionPage
