import MatchCard from './card/MatchCard'
import MatchActions from './card/MatchActions'
import MatchBookmakers from './card/MatchBookmakers'
import MatchOdds from './card/MatchOdds'
import MatchTags from './card/MatchTags'
import { FiCopy } from 'react-icons/fi'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function MatchListPre() {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    const tags = ['Baseball - Pré', 'MLB • > 120 minutos']

    const odds = [
        { label: 'Acima 0.5 - Home', value: '1.98', icon: <FaArrowUp className='text-green-600' /> },
        { label: 'Abaixo 0.5 - Home', value: '2.38', icon: <FaArrowDown className='text-red-600' /> }
    ]

    const bookmakers = [
        { label: 'BETANO', bgColor: 'bg-black', textColor: 'text-yellow-400' },
        { label: 'SUPERBET', bgColor: 'bg-green-700', textColor: 'text-white' }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            <MatchCard
                percentage='7,89%'
                percentageColor='text-black'
                datetime='12/06 18:00'
                player1={
                    <div className='flex items-center gap-1'>
                        <span>New York Yankees (M Fried)</span>
                        <button
                            onClick={() => handleCopy('New York Yankees (M Fried)')}
                            className='text-blue-500 hover:text-black cursor-pointer'
                        >
                            <FiCopy size={16} />
                        </button>
                    </div>
                }
                player2={
                    <div className='flex items-center gap-1'>
                        <span>Kansas City Royals (N Cameron)</span>
                        <button
                            onClick={() => handleCopy('Kansas City Royals (N Cameron)')}
                            className='text-blue-500 hover:text-black cursor-pointer'
                        >
                            <FiCopy size={16} />
                        </button>
                    </div>
                }
                tagList={<MatchTags tags={tags} />}
                odds={<MatchOdds odds={odds} />}
                bookmakers={<MatchBookmakers buttons={bookmakers} />}
                actions={<MatchActions />}
            />
        </div>
    )
}
