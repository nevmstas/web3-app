import { useCallback, useEffect, useState } from 'react'

const useGifFetch = (keyword: string) => {
    const [gifUrl, setGifUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const fetchGif = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${
                    import.meta.env.VITE_GIPHY_KEY
                }&q=${keyword.split(' ').join('')}&limit=1`
            )
            const { data } = await response.json()
            setGifUrl(data[0]?.images?.downsized_medium?.url)
        } catch (e) {
            setGifUrl('')
        } finally {
            setIsLoading(false)
        }
    }, [keyword])

    useEffect(() => {
        if (keyword) fetchGif()
    }, [keyword])

    return { gifUrl, isLoading }
}
export default useGifFetch
