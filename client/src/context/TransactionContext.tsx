import { ethers } from 'ethers'
import { createContext, useEffect, useState } from 'react'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = createContext<{
    connectWallet: () => void
    currentAccount: string
    sendTransaction: (values: any) => void
}>({
    connectWallet: () => {},
    currentAccount: '',
    sendTransaction: () => {},
})

//@ts-ignore
const { ethereum } = window

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const singer = provider.getSigner()
    const transactionContract = new ethers.Contract(
        contractAddress,
        contractABI,
        singer
    )

    return transactionContract
}

interface ITransactionProviderProps {
    children: React.ReactNode
}

export const TransactionProvider: React.FC<ITransactionProviderProps> = ({
    children,
}) => {
    const [currentAccount, setCurrentAccount] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    // const [formData, setFormData] = useState({
    //     addressTo: '',
    //     amount: '',
    //     keyword: '',
    //     message: '',
    // })

    // const handleChange = (e: any, name: string) => {
    //     setFormData((prev) => ({ ...prev, [name]: e.target.value }))
    // }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install metamask')
            const accounts = await ethereum.request({ method: 'eth_accounts' })
            if (accounts.length) {
                setCurrentAccount(accounts[0])
                //getAllTransactions();
            } else {
                console.log('No accounts found')
            }
        } catch (error) {
            throw new Error('No ethereum object')
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('Please install metamask')

            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            })
            setCurrentAccount(accounts[0])
        } catch (error: any) {
            throw new Error('No ethereum object')
        }
    }

    const getAllTransactions = async () => {
        const transactionContract = getEthereumContract()
        const transactions = await transactionContract.getAllTransactions()
        return transactions
    }

    const sendTransaction = async (values: any) => {
        try {
            if (!ethereum) return alert('Please install metamask')
            const transactionContract = getEthereumContract()
            const parsedAmount = ethers.utils.parseEther(values.amount)
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: currentAccount,
                        to: values.addressTo,
                        gas: '0x5208', //hex to decimal 21000 GWEI
                        value: parsedAmount._hex, //0.00001
                    },
                ],
            })

            const transactionHash = transactionContract.addToBlockchain(
                values.addressTo,
                parsedAmount,
                values.message,
                values.keyword
            )

            setIsLoading(true)
            console.log(`loading... - ${transactionHash.hash}`)
            await transactionHash.wait()
            setIsLoading(false)
            console.log(`success... - ${transactionHash.hash}`)

            // get the data from the form
        } catch (e) {
            throw new Error('No ethereum object')
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                sendTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
