import useProOdds from '@/hooks/usePreOdds'
import { FiCopy } from 'react-icons/fi'
import MatchActions from './card/MatchActions'
import MatchBookmakers from './card/MatchBookmakers'
import MatchCard from './card/MatchCard'
import MatchOdds from './card/MatchOdds'
import MatchTags from './card/MatchTags'

export default function MatchListPre() {
    const { data, loading } = useProOdds()

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    if (loading) return <div className="p-4 text-white">Carregando apostas pré...</div>

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            {data.map((item, index) => {

                const timeMatch = item.time?.match(/^(\d{2}\/\d{2})\s?(\d{2}:\d{2})$/)
                const date = timeMatch?.[1] ?? '--/--'
                const time = timeMatch?.[2] ?? '--:--'

                const tags = [
                    <span key="datetime" className="flex gap-2">
                        <span>{date}</span>
                        <span>{time}</span>
                    </span>,
                    <span key="sport"><strong>Esporte:</strong> {item.sport}</span>
                ]

                const bookmakers = Array.from(
                    new Set(item.odds.map(odd => odd.bookmaker))
                ).map((bookmaker) => ({
                    label: bookmaker.toUpperCase(),
                    bgColor: 'bg-black',
                    textColor: 'text-yellow-400'
                }))

                return (
                    <MatchCard
                        key={index}
                        percentage={item.profit.percent}
                        percentageColor='text-black'
                        datetime={item.profit.age}
                        player1={
                            <div className='flex items-center gap-1'>
                                <span>{item.player1}</span>
                                <button
                                    onClick={() => handleCopy(item.player1)}
                                    className='text-blue-500 hover:text-black cursor-pointer'
                                >
                                    <FiCopy size={16} />
                                </button>
                            </div>
                        }
                        player2={
                            <div className='flex items-center gap-1'>
                                <span>{item.player2}</span>
                                <button
                                    onClick={() => handleCopy(item.player2)}
                                    className='text-blue-500 hover:text-black cursor-pointer'
                                >
                                    <FiCopy size={16} />
                                </button>
                            </div>
                        }
                        tagList={
                            <div className="space-y-1">
                                <MatchTags tags={tags} />
                                <div className="text-xs text-gray-500">{item.competition}</div>
                            </div>
                        }
                        odds={<MatchOdds odds={item.odds} />}
                        bookmakers={<MatchBookmakers buttons={bookmakers} />}
                        actions={<MatchActions />}
                    />
                )
            })}
        </div>
    )
}