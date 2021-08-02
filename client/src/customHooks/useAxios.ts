import { useState, useEffect, useCallback, useMemo } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

// Onödig custonHook? Enda som kan göras ordentligt här är en get() när componenten mountas
// Ändra till endast get?

export function useAxios (params: AxiosRequestConfig) {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await axios.request(params)
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // On unmount, cancel the request
    return () => {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      source.cancel("Operation canceled.");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return { response, error, loading }
}

