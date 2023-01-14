import { ITransaction } from '../../../context/TransactionContext'
import useGifFetch from '../../../hooks/use-giphy-fetch'
import { shortenAddress } from '../../../utils/shortenAddress'

interface ITransactionCard {
    transaction: ITransaction
}

const TransactionCard: React.FC<ITransactionCard> = ({ transaction }) => {
    const { keyword, amount, message, to, from, timestamp } = transaction
    const gif = useGifFetch(keyword)

    return (
        <div>
            <img src={gif} alt="image" />
            <p>{amount}</p>
            <p>
                {shortenAddress(from)} to {shortenAddress(to)}
            </p>
            <p>Messsage: {message}</p>
            <p>{timestamp}</p>
        </div>
    )
}
export default TransactionCard
