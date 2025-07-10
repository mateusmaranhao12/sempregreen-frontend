import { useEffect, useState } from 'react'
import axios from 'axios'

export interface EVOdd {
    bookmaker: string
    stake: string
    currency: string
    edge: string
    player1: string
    player2: string
    line: string
    odds: string
    time: string
}

export default function useEVOdds() {
    const [data, setData] = useState<EVOdd[]>([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/ev')
            setData(response.data)
        } catch (err) {
            console.error('Erro ao buscar odds EV: ', err)
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
