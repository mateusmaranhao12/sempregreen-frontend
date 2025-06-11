interface BookmakerButtonProps {
    label: string
    bgColor: string
    textColor: string
}

export default function MatchBookmakersButton({label, bgColor, textColor}: BookmakerButtonProps) {
    return (
        <button className={`${bgColor} ${textColor} py-1 px-2 rounded text-xl cursor-pointer hover:scale-105 transition duration-150 ease-in-out`}>
            {label}
        </button>
    )
}