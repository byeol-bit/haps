import * as React from "react"

type FetchResult<T> = {
  data: T | null,
  loading: boolean,
  error: Error | null
}

const useFetch = <T>(url: string, options: RequestInit) : FetchResult<T> => {
  const [data, setData] = React.useState<T | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options, signal })
        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result: T = await response.json()
        setData(result)

      } catch (err) {
        if(err instanceof Error && err.name !== "AbortError") {
          setError(err)
        }
        
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return() => {
      controller.abort()
    }
  }, [url, JSON.stringify(options)]) // options가 변경될 때도 리렌더링

  return { data, loading, error }
}

export default useFetch