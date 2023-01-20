import { ITransaction } from '../../../context/TransactionContext'
import { shortenAddress } from '../../../utils/shortenAddress'
import { MessageBubble } from '../../organisms'

interface ITransactionCard {
    transaction: ITransaction
}

const TableItem = ({ title, value }: { title: string; value: string }) => (
    <p>
        <b className="text-pink-200 uppercase">{title + ':'}</b> {value}
    </p>
)

const TransactionCard: React.FC<ITransactionCard> = ({ transaction }) => {
    const { keyword, amount, message, to, from, timestamp } = transaction

    const tableItems = {
        amount: `${amount} ETH`,
        from: shortenAddress(from),
        to: shortenAddress(to),
    }

    return (
        <div className="blue-glassmorpism p-5 w-82 flex flex-col space-y-2 text-white w-80">
            {Object.keys(tableItems).map((item, index) => (
                <TableItem
                    key={index}
                    title={item}
                    value={tableItems[item as keyof typeof tableItems]}
                />
            ))}
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
