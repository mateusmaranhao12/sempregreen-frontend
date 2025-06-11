import { FiCopy } from 'react-icons/fi'
import MatchCardEV from './card/MatchCardEV'
import { FaXmark } from 'react-icons/fa6'
import MatchBookmakers from './card/MatchBookmakers'

export default function MatchListEV() {
    const handleCopy = (text: string) => navigator.clipboard.writeText(text)

    const bookmakers = [
        { label: 'bet365', bgColor: 'bg-green-900', textColor: 'text-white' }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <MatchCardEV
                percentage="14,82%"
                percentageColor="text-blue-600"
                label="% Supervalorização"
                datetime='EV - in 5 hours - <span class="text-black">1st Half (Ordinary Time)</span>'
                player1={
                    <div className="flex items-center gap-1">
                        <span>Deportivo Pereira</span>
                        <button onClick={() => handleCopy("Deportivo Pereira")} className="text-blue-500 hover:text-black cursor-pointer">
                            <FiCopy size={16} />
                        </button>
                    </div>
                }
                player2={
                    <div className="flex items-center gap-1">
                        <span>La Equidad</span>
                        <button onClick={() => handleCopy("La Equidad")} className="text-blue-500 hover:text-black cursor-pointer">
                            <FiCopy size={16} />
                        </button>
                    </div>
                }
                tagList={<span>FUTEBOL OVER/ UNDER HCP EURO BET365</span>}
                odds={<span>Under 1 @ 2.60</span>}
                bookmakers={<MatchBookmakers buttons={bookmakers} />}
                actions={
                    <div className="flex items-center gap-2 mt-2">
                        <button className="bg-red-600 cursor-pointer text-white px-2 py-1 text-sm rounded"><FaXmark size={16} /></button>
                        <button className="bg-gray-900 cursor-pointer text-white px-2 py-1 text-sm rounded">+ Gestão</button>
                    </div>
                }
            />
        </div>
    )
}
