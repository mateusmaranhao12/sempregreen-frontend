import { useEffect, useState } from 'react'
import axios from 'axios'

export interface LiveOdd {
  time: string
  league: string
  match: string
  market: string
  outcome: string
  odds: string
  bookmaker: string
  link: string
  percentage: string
}

export default function useLiveOdds() {
  const [data, setData] = useState<LiveOdd[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      //const response = await axios.get('http://localhost:3001/api/live')
      const response = await axios.get('https://sempregreen-backend.onrender.com/api/live')
      setData(response.data)
    } catch (err) {
      console.error('Erro ao buscar odds ao vivo: ', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 15000)
    return () => clearInterval(interval)
  }, [])

  return { data, loading }
}
