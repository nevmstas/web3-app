import { ITransaction } from '../../../context/TransactionContext'
import useGifFetch from '../../../hooks/use-giphy-fetch'

const TransactionCard: React.FC<{ transaction?: ITransaction }> = ({}) => {
    const gif = useGifFetch('cat')
    console.log(gif)
    return <div>transaction card</div>
}
export default TransactionCard
