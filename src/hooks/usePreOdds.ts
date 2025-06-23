import { useEffect, useState } from 'react'
import axios from 'axios'

export interface OddItem {
    label: string
    value: string
    bookmaker: string
    countryCode?: string
    direction?: 'up' | 'down' | 'stable'
}

export interface SurebetCard {
    profit: {
        percent: string
        age: string
    }
    time: string
    event: string
    bookmaker: string
    sport: string
    market: string
    odds: OddItem[]
    player1: string
    player2: string
    competition: string
}

export default function useProOdds() {
    const [data, setData] = useState<SurebetCard[]>([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/pre')
            setData(response.data)
        } catch (err) {
            console.error('Erro ao buscar odds pre: ', err)
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