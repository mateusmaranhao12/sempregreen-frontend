import { FiCopy } from 'react-icons/fi'
import { FaXmark } from 'react-icons/fa6'
import MatchCardEV from './card/MatchCardEV'
import MatchBookmakers from './card/MatchBookmakers'
import MatchBookmakersButton from '../buttons/MatchBookmakersButton'
import useEVOdds from '@/hooks/useEVOdds'

export default function MatchListEV() {

    const { data, loading } = useEVOdds()

    const handleCopy = (text: string) => navigator.clipboard.writeText(text)

    const bookmakers = [
        {
            label: 'bet365',
            bgColor: 'bg-green-900',
            textColor: 'text-white',
            width: 'w-40',
            textSize: 'text-2xl'
        }
    ]

    if (loading) return <div className="p-4 text-white">Carregando apostas EV...</div>

    if (!data.length) {
        return <div className="p-4">Nenhuma odd EV disponível no momento.</div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            {data.slice(0, 100).map((item, index) => {

                const [player1, player2] = item.teams.split(' vs ')

                return (
                    <MatchCardEV
                    key={index}
                        percentage={`${item.edge}%`}
                        percentageColor='text-blue-600'
                        label="% Supervalorização"
                        datetime={`EV - ${item.time}`}
                        player1={
                            <div className="flex items-center gap-1">
                                <span>{player1}</span>
                                <button onClick={() => handleCopy(player1)} className="text-blue-500 hover:text-black cursor-pointer">
                                    <FiCopy size={16} />
                                </button>
                            </div>
                        }
                        player2={
                            <div className="flex items-center gap-1">
                                <span>{player2}</span>
                                <button onClick={() => handleCopy(player2)} className="text-blue-500 hover:text-black cursor-pointer">
                                    <FiCopy size={16} />
                                </button>
                            </div>
                        }
                        tagList={<span>FUTEBOL OVER/UNDER - {item.bookmaker.toUpperCase()}</span>}
                        odds={<span>{item.line} @ {item.odds}</span>}
                        bookmakers={<MatchBookmakers buttons={bookmakers} />}
                        actions={
                            <div className="flex items-center gap-2 mt-2">
                                <MatchBookmakersButton
                                    label={<FaXmark size={16} />}
                                    bgColor="bg-red-600"
                                    textColor="text-white"
                                    textSize="text-sm"
                                />
                                <MatchBookmakersButton
                                    label="+ Gestão"
                                    bgColor="bg-gray-900"
                                    textColor="text-white"
                                    width="w-auto"
                                    textSize="text-sm"
                                />
                            </div>
                        }
                    />
                )

            })}
        </div>
    )
}
