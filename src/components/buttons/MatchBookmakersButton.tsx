interface BookmakerButtonProps {
    label: string;
    bgColor: string;
    textColor: string;
}

export default function MatchBookmakersButton({ label, bgColor, textColor }: BookmakerButtonProps) {
    return (
        <button
            className={`${bgColor} ${textColor} py-1 px-3 rounded font-semibold text-xl cursor-pointer hover:scale-105 transition`}
        >
            {label}
        </button>
    );
}
