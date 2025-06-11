interface MatchPercentProps {
    value: string
    colorClass?: string
}

export default function MatchPercent({ value, colorClass = "text-green-600" }: MatchPercentProps) {
    return (
        <span className={`${colorClass} text-2xl md:text-4xl`}>
            {value}
        </span>
    );
}
