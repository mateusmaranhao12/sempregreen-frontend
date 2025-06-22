import { FaChartBar, FaFlag, FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa'
import { OddItem } from '@/hooks/usePreOdds'

interface MatchOddsProps {
    odds: OddItem[]
}

export default function MatchOdds({ odds }: MatchOddsProps) {
    console.log('ODDS RECEBIDAS:', odds)

    if (!odds || odds.length === 0) {
        return <div className="text-gray-600 text-sm">Sem odds disponíveis</div>
    }

    return (
        <div className='flex flex-wrap justify-center md:justify-start text-sm md:text-base font-bold text-black gap-4 max-w-full overflow-hidden'>
            {odds.map((odd, index) => (
                <div key={index} className='text-center flex-shrink-0 w-[90px] sm:w-[100px] md:w-auto'>
                    <div className='flex flex-col items-center gap-0 text-black mb-1'>
                        <div className='flex items-center gap-1 break-words'>
                            <FaChartBar size={12} />
                            <span className="text-xs">{odd.label}</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-1 text-lg'>
                        <span>{odd.value}</span>

                        {odd.direction === 'up' && <FaArrowUp className='text-green-500' size={12} />}
                        {odd.direction === 'down' && <FaArrowDown className='text-red-500' size={12} />}
                        {odd.direction === 'stable' && <FaEquals className='text-gray-500' size={12} />}

                        {odd.countryCode && (
                            <FaFlag className='text-gray-700' size={14} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )

}
