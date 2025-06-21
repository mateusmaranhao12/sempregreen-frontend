interface MatchPlayersProps {
    player1: React.ReactNode
    player2: React.ReactNode
}

export default function MatchPlayers({ player1, player2 }: MatchPlayersProps) {
    return (
        <div className="text-sm font-semibold space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-1">{player1}</div>
            <div className="flex items-center justify-center md:justify-start gap-1">{player2}</div>
        </div>
    )
}