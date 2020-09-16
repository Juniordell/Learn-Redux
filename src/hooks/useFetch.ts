import useSWR from 'swr'
import { animesApi } from '../services/apis'

export function useFetch(url: string) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await animesApi.get(url)

    return response
  })

  return { data, error, mutate }
}
