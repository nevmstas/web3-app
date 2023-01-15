import { ITransaction } from '../../../context/TransactionContext'
import useGifFetch from '../../../hooks/use-giphy-fetch'
import { shortenAddress } from '../../../utils/shortenAddress'
import { MessageBubble } from '../../atoms'

interface ITransactionCard {
    transaction: ITransaction
}

const TransactionCard: React.FC<ITransactionCard> = ({ transaction }) => {
    const { keyword, amount, message, to, from, timestamp } = transaction
    const gif = useGifFetch(keyword)

    const titleColor = 'text-pink-200'

    return (
        <div className="blue-glassmorpism p-5 w-82 flex flex-col space-y-2 text-white">
            <img className="rounded-2xl" src={gif} alt="image" />
            <p>
                <b className={titleColor}>Amount:</b> {amount}
            </p>
            <p>
                <b className={titleColor}>From:</b> {shortenAddress(from)}
            </p>
            <p>
                <b className={titleColor}>To:</b> {shortenAddress(to)}
            </p>
            <div className="w-74">
                <MessageBubble message={message} time={timestamp} />
            </div>
        </div>
    )
}
export default TransactionCard
