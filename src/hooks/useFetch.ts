import { useState, useEffect } from 'react'

interface ApiResponse<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}

const useFetch = <T>(url: string): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error('Request failed')
                }
                const jsonData: T = await response.json()
                setData(jsonData)
                setIsLoading(false)
            } catch (error:any) {
                setError(error.message)
                setIsLoading(false)
            }
        }

        fetchData()
        console.log(data)
    }, [url])

    return { data, isLoading, error}
}

export default useFetch
