import { FaCoins, FaCircle } from 'react-icons/fa'
import CardWrapper from './CardWrapper'
import MatchPlayers from './MatchPlayers'

interface MatchCardEVProps {
    percentage: string
    percentageColor?: string
    label?: string
    datetime: string
    player1: React.ReactNode
    player2: React.ReactNode
    tagList: React.ReactNode
    odds: React.ReactNode
    bookmakers: React.ReactNode
    actions?: React.ReactNode
}

export default function MatchCardEV({
    percentage,
    percentageColor = 'text-green-600',
    label = '% Supervalorização',
    datetime,
    player1,
    player2,
    tagList,
    odds,
    bookmakers,
    actions,
}: MatchCardEVProps) {
    return (
        <CardWrapper>
            {/* Esquerda */}
            <div className='space-y-2'>
                {/* Topo: porcentagem + bookmaker */}
                <div className='flex flex-col items-center md:items-start'>
                    <div className={`text-4xl font-bold ${percentageColor}`}>{percentage}</div>
                    <div className='text-md text-gray-600'>{label}</div>
                    <div className='flex flex-col'>
                        {bookmakers}
                    </div>
                    {actions}
                </div>
            </div>

            {/* Direita */}
            <div className='flex flex-col gap-2 mt-2 md:mt-0 items-center md:items-start text-center md:text-left'>

                {/* Times */}
                <MatchPlayers player1={player1} player2={player2} />

                <div className='flex items-center gap-1 text-md text-gray-600 font-semibold'>
                    <FaCircle size={8} className='text-gray-400' />
                    {tagList}
                </div>

                <div className='flex items-center gap-2 font-bold text-black'>
                    <FaCoins className='text-black' />
                    {odds}
                </div>

                <div className='flex items-center gap-1 text-md text-blue-600 font-semibold'>
                    <FaCircle size={8} className='text-blue-600' />
                    <span dangerouslySetInnerHTML={{ __html: datetime }} />
                </div>

            </div>
        </CardWrapper>

    )
}
