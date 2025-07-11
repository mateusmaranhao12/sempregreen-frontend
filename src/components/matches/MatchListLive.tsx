import { FiCopy } from 'react-icons/fi'
import MatchActions from './card/MatchActions'
import MatchBookmakers from './card/MatchBookmakers'
import MatchCard from './card/MatchCard'
import MatchOdds from './card/MatchOdds'
import MatchTags from './card/MatchTags'
import useLiveOdds from '@/hooks/useLiveOdds'

export default function MatchListLive() {
    const { data, loading } = useLiveOdds()

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    if (loading) {
        return <div className="p-4">Carregando odds ao vivo...</div>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {data.map((match, index) => {
                const player1 = match.match?.split(' - ')[0] || 'Equipe A'
                const player2 = match.match?.split(' - ')[1] || 'Equipe B'

                const tags = [
                    match.market || 'Mercado',
                    match.league || 'Desconhecida'
                ]

                const odds = [
                    {
                        label: match.outcome,
                        value: match.odds,
                        bookmaker: match.bookmaker,
                    },
                ]

                const bookmakers = [
                    {
                        label: match.bookmaker,
                        bgColor: 'bg-green-600',
                        textColor: 'text-white',
                        link: match.link
                    },
                ]

                return (
                    <MatchCard
                        key={index}
                        percentage={match.percentage || '–'}
                        percentageColor="text-blue-600"
                        datetime={match.time || '--'}
                        player1={
                            <div className="flex items-center gap-1">
                                <span>{player1}</span>
                                <button
                                    onClick={() => handleCopy(player1)}
                                    className="text-blue-500 hover:text-black cursor-pointer"
                                >
                                    <FiCopy size={16} />
                                </button>
                            </div>
                        }
                        player2={
                            <div className="flex items-center gap-1">
                                <span>{player2}</span>
                                <button
                                    onClick={() => handleCopy(player2)}
                                    className="text-blue-500 hover:text-black cursor-pointer"
                                >
                                    <FiCopy size={16} />
                                </button>
                            </div>
                        }
                        tagList={<MatchTags tags={tags} highlight={match.market} />}
                        odds={<MatchOdds odds={odds} />}
                        bookmakers={<MatchBookmakers buttons={bookmakers} />}
                        actions={<MatchActions />}
                    />
                )
            })}
        </div>
    )
}
