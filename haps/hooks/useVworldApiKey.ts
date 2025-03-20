import * as React from "react"

type FetchResult = {
  apiKey: string | null,
  error: Error | null
}

type Post = {
  type: string,
  data: {
    apiKey: string,
    name: string,
    endDate : string,
    status: string,
  }[]
}

const useVworldApiKey = () : FetchResult => {
  const [apiKey, setApiKey] = React.useState<string | null>(null)
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchData = async () => {
      try {
        const options : RequestInit = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
        const response = await fetch("/api/vworld_api_key/vworld-keys.json", { ...options, signal })
        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result: Post = await response.json()
        const devApiKey = result.data.find((item) => item.status === "개발")?.apiKey || null;
        setApiKey(devApiKey)

      } catch (err) {
        if(err instanceof Error && err.name !== "AbortError") {
          setError(err)
        }
        
      }
    }

    fetchData()

    return() => {
      controller.abort()
    }
  }, []) // options가 변경될 때도 리렌더링

  return { apiKey, error }
}

export default useVworldApiKey