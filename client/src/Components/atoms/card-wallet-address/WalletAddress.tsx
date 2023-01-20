import { useTransactionContext } from '../../../context/TransactionContext'
import { shortenAddress } from '../../../utils/shortenAddress'

const WalletAddress = () => {
    const { currentAccount } = useTransactionContext()
    return (
        <div>
            <p className="text-white font-light text-sm">
                {shortenAddress(currentAccount)}
            </p>
            <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
        </div>
    )
}

export default WalletAddress
