import { FiClock } from "react-icons/fi";
import MatchPlayers from "./MatchPlayers";
import CardWrapper from "./CardWrapper";

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
        <CardWrapper>
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
                <MatchPlayers player1={player1} player2={player2} />

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
        </CardWrapper>
    );
}
