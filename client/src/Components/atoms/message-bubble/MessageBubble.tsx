import useGifFetch from '../../../hooks/use-giphy-fetch'
import Loader from '../loader'

interface IMessageBubble {
    message: string
    time: string
    keyword: string
}
const MessageBubble: React.FC<IMessageBubble> = ({
    message,
    time,
    keyword,
}) => {
    const { gifUrl, isLoading } = useGifFetch(keyword)
    return (
        <div className="relative bg-white p-5 rounded-2xl text-black mt-8">
            <div className="absolute w-0 h-0 border-solid border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent border-l-[24px] border-l-white -top-5"></div>
            <p className="absolute text-sm -top-5 right-4 text-white text-opacity-70">
                {time}
            </p>
            {message}
            <div className="flex mt-6 h-36">
                {isLoading ? (
                    <Loader />
                ) : (
                    <img
                        className="rounded-2xl h-full"
                        src={gifUrl}
                        alt="image"
                    />
                )}
            </div>
        </div>
    )
}

export default MessageBubble
