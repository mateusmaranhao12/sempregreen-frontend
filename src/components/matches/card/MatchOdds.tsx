import { FaChartBar, FaFlag } from 'react-icons/fa'

interface OddItem {
    labelTop?: string
    label: string
    value: string
}

interface MatchOddsProps {
    odds: OddItem[]
}

export default function MatchOdds({ odds }: MatchOddsProps) {
    return (
        <div className='flex justify-center md:justify-start text-sm md:text-base font-bold text-black gap-8'>
            {odds.map((odd, index) => (
                <div key={index} className='text-center'>
                    <div className='flex flex-col items-center justify-center gap-0 text-md text-black mb-1'>
                        <div className='flex items-center gap-1'>
                            <FaChartBar size={12} />
                            {odd.labelTop && <span>{odd.labelTop}</span>}
                        </div>
                        <span>{odd.label}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1 text-lg'>
                        <span>{odd.value}</span>
                        <FaFlag size={12} />
                    </div>
                </div>
            ))}
        </div>
    )
}
