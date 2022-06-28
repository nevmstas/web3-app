import { BsInfoCircle } from 'react-icons/bs'
import CircleEthIcon from '../../atoms/eth-icon'
import WalletAddress from '../../atoms/card-wallet-address'

const WalletCard = () => {
    return (
        <div className="flex flex-col justify-between eth-card white-glassmorpism p-3 rounded-xl h-40 w-72 rounded-full transition duration-150 ease-out hover:scale-105 cursor-pointer">
            <div className="flex justify-between items-start">
                <CircleEthIcon />
                <BsInfoCircle fontSize={17} color="#fff" />
            </div>
            <WalletAddress />
        </div>
    )
}

export default WalletCard
