import { ethers } from 'ethers'
import { createContext, useEffect, useState } from 'react'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = createContext<{
    connectWallet: () => void
    currentAccount: string
    sendTransaction: (values: any) => void
    isLoading: boolean
    transactions: ITransaction[]
}>({
    connectWallet: () => {},
    currentAccount: '',
    sendTransaction: () => {},
    isLoading: false,
    transactions: [],
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

export interface ITransaction {
    to: string
    from: string
    timestamp: string
    amount: string
    message: string
}

export const TransactionProvider: React.FC<ITransactionProviderProps> = ({
    children,
}) => {
    const [currentAccount, setCurrentAccount] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const [transactions, setTransactions] = useState<Array<ITransaction>>([])

    const getAllTransactions = async () => {
        try {
            const transactionContract = getEthereumContract()
            const availableTransactions =
                await transactionContract.getAllTransactions()
            const convertedTransactions = availableTransactions.map(
                (transaction: any) => ({
                    to: transaction.sender,
                    from: transaction.receiver,
                    timestamp: new Date(
                        transaction.timestamp.toNumber() * 1000
                    ).toLocaleString(),
                    message: transaction.message,
                    keyword: transaction.keyword,
                    amount: parseInt(transaction.amount._hex) / 10 ** 18,
                })
            )

            setTransactions(convertedTransactions)
        } catch (error) {
            throw new Error('No ethereum object')
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert('Please install metamask')
            const accounts = await ethereum.request({ method: 'eth_accounts' })
            if (accounts.length) {
                setCurrentAccount(accounts[0])
                getAllTransactions()
            } else {
                console.log('No accounts found')
            }
        } catch (error) {
            throw new Error('No ethereum object')
        }
    }

    const checkIsTransactionsExits = async () => {
        try {
            const transactionContract = getEthereumContract()
            const transactionCount =
                await transactionContract.getTransactionCount()

            window.localStorage.setItem('transactionCount', transactionCount)
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

            const transactionHash = await transactionContract.addToBlockchain(
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
        checkIsTransactionsExits()
    }, [])

    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                sendTransaction,
                transactions,
                isLoading,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}
