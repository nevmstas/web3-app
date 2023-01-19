import { ITransaction } from '../../../context/TransactionContext'
import { shortenAddress } from '../../../utils/shortenAddress'
import { MessageBubble } from '../../organisms'

interface ITransactionCard {
    transaction: ITransaction
}

const TransactionCard: React.FC<ITransactionCard> = ({ transaction }) => {
    const { keyword, amount, message, to, from, timestamp } = transaction

    const titleColor = 'text-pink-200'

    return (
        <div className="blue-glassmorpism p-5 w-82 flex flex-col space-y-2 text-white w-80">
            <p>
                <b className={titleColor}>Amount:</b> {amount} ETH
            </p>
            <p>
                <b className={titleColor}>From:</b> {shortenAddress(from)}
            </p>
            <p>
                <b className={titleColor}>To:</b> {shortenAddress(to)}
            </p>
            <div className="w-74">
                <MessageBubble
                    message={message}
                    time={timestamp}
                    keyword={keyword}
                />
            </div>
        </div>
    )
}
export default TransactionCard
