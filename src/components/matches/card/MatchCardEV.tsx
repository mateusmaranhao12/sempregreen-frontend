import { FaCoins, FaCircle } from 'react-icons/fa';

interface MatchCardEVProps {
    percentage: string;
    percentageColor?: string;
    label?: string;
    datetime: string;
    player1: React.ReactNode;
    player2: React.ReactNode;
    tagList: React.ReactNode;
    odds: React.ReactNode;
    bookmakers: React.ReactNode;
    actions?: React.ReactNode;
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
        <div className="bg-white rounded shadow p-4 flex flex-col gap-2 text-black text-left">

            {/* Topo: porcentagem + bookmaker */}
            <div className="flex items-center justify-between">
                <div>
                    <div className={`text-xl font-bold ${percentageColor}`}>{percentage}</div>
                    <div className="text-sm text-gray-600">{label}</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    {bookmakers}
                </div>
            </div>

            {/* Times */}
            <div className="text-sm font-semibold space-y-1">
                <div className="flex items-center gap-1">{player1}</div>
                <div className="flex items-center gap-1">{player2}</div>
            </div>

            {/* Tag */}
            <div className="flex items-center gap-1 text-xs text-gray-600 font-semibold">
                <FaCircle size={8} className="text-gray-400" />
                {tagList}
            </div>

            {/* Odd personalizada */}
            <div className="flex items-center gap-2 text-sm font-bold text-black">
                <FaCoins className="text-black" />
                {odds}
            </div>

            {/* Data / EV info */}
            <div className="flex items-center gap-1 text-xs text-blue-600 font-semibold">
                <FaCircle size={8} className="text-blue-600" />
                <span dangerouslySetInnerHTML={{ __html: datetime }} />
            </div>

            {/* Ações */}
            {actions}
        </div>
    );
}
