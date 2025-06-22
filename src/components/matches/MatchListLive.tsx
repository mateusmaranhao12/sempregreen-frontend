import { FiCopy } from 'react-icons/fi'
import MatchActions from './card/MatchActions'
import MatchBookmakers from './card/MatchBookmakers'
import MatchCard from './card/MatchCard'
import MatchOdds from './card/MatchOdds'
import MatchTags from './card/MatchTags'

export default function MatchListLive() {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    const tags = ['Handball - Live', 'Denmark Handboldligaen']
    const highlight = 'LIVE - regular time'

    const odds = [
        { label: 'Team2 Win', value: '2.55', bookmaker: 'bet365' },
        { labelTop: 'Asian', label: 'Handicap1(0.0)/Draw No Bet', value: '2.05', bookmaker: 'BETANO' },
    ];

    const bookmakers = [
        { label: 'bet365', bgColor: 'bg-green-900', textColor: 'text-white' },
        { label: 'BETANO', bgColor: 'bg-yellow-400', textColor: 'text-black' }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            <MatchCard
                percentage='13,64%'
                percentageColor='text-blue-600'
                datetime='11/06 15:12'
                player1={
                    <div className='flex items-center gap-1'>
                        <span>GOG Handbold</span>
                        <button
                            onClick={() => handleCopy('GOG Handbold')}
                            className='text-blue-500 hover:text-black cursor-pointer'
                        >
                            <FiCopy size={16} />
                        </button>
                    </div>
                }
                player2={
                    <div className='flex items-center gap-1'>
                        <span>TTH Holstebro</span>
                        <button
                            onClick={() => handleCopy('TTH Holstebro')}
                            className='text-blue-500 hover:text-black cursor-pointer'
                        >
                            <FiCopy size={16} />
                        </button>
                    </div>
                }
                tagList={<MatchTags tags={tags} highlight={highlight} />}
                odds={<MatchOdds odds={odds} />}
                bookmakers={<MatchBookmakers buttons={bookmakers} />}
                actions={<MatchActions />}
            />
        </div>
    )
}
