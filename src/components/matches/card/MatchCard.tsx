import { FiClock } from "react-icons/fi";

interface MatchCardProps {
    percentage: string
    percentageColor?: string
    datetime: string
    player1: React.ReactNode
    player2: React.ReactNode
    tagList: React.ReactNode
    odds: React.ReactNode
    bookmakers: React.ReactNode
    actions?: React.ReactNode
}

export default function MatchCard({
    percentage,
    percentageColor = "text-green-600",
    datetime,
    player1,
    player2,
    tagList,
    odds,
    bookmakers,
    actions
}: MatchCardProps) {

    return (
        <div className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-4 text-black text-center md:text-left">
            
            {/* Ações à esquerda */}
            <div className="flex justify-center md:justify-start items-center">
                {actions}
            </div>

            {/* Área central */}
            <div className="flex-1 space-y-2 text-center md:text-left">
                
                {/* Porcentagem e data */}
                <div className="flex flex-col items-center md:items-start font-bold text-md">
                    <span className={`${percentageColor} text-2xl md:text-4xl`}>{percentage}</span>
                    <span className="flex items-center gap-1 text-sm text-gray-600 justify-center md:justify-start">
                        <FiClock size={16} />
                        {datetime}
                    </span>
                </div>

                {/* Times */}
                <div className="text-sm font-semibold space-y-1">
                    <div className="flex items-center justify-center md:justify-start gap-1">{player1}</div>
                    <div className="flex items-center justify-center md:justify-start gap-1">{player2}</div>
                </div>

                {/* Tags */}
                <div className="space-y-1">
                    {tagList}
                </div>
            </div>

            {/* Odds + Bookmakers */}
            <div className="flex flex-col items-center justify-center gap-2">
                {odds}
                {bookmakers}
            </div>
        </div>
    );
}
