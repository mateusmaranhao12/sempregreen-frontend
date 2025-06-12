interface BookmakerButtonProps {
    label: React.ReactNode
    bgColor: string
    textColor: string
    width?: string
    textSize?: string
}

export default function MatchBookmakersButton({ label, bgColor, textColor, width = '', textSize = 'text-xl' }: BookmakerButtonProps) {
    return (
        <button
            className={`${bgColor} ${textColor} ${width} ${textSize} py-1 px-3 rounded font-semibold cursor-pointer hover:scale-105 transition`}
        >
            {label}
        </button>
    );
}
