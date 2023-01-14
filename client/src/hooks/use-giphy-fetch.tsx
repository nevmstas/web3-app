import { useCallback, useEffect, useState } from 'react'

const useGifFetch = (keyword: string) => {
    const [gifUrl, setGifUrl] = useState('')

    const fetchGif = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${
                    import.meta.env.VITE_GIPHY_KEY
                }&q=${keyword.split(' ').join('')}&limit=1`
            )
            const { data } = await response.json()
            setGifUrl(data[0]?.images?.downsized_medium?.url)
        } catch (e) {
            setGifUrl('')
        }
    }, [keyword])

    useEffect(() => {
        if (keyword) fetchGif()
    }, [keyword])

    return gifUrl
}
export default useGifFetch
