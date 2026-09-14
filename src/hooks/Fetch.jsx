import { useEffect, useState } from 'react'

// Reusable hook for GET requests. It runs again whenever the URL changes.
export function useFetch(url) {
  // data starts undefined because the request has not finished yet.
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        // fetch resolves for HTTP errors too, so res.ok must be checked manually.
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(`Failed fetch`)
        }
        const responseData = await res.json()
        setData(responseData)
        setIsLoading(false)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
          console.error('Fetch failed: ', error)
        }
      }
    }
    fetchData()
  }, [url])

  // Components use these three values to render data, loading, or error states.
  return { data, isLoading, error }
}