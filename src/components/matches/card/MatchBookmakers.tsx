import MatchBookmakersButton from "../../buttons/MatchBookmakersButton";

interface BookmakerButtonProps {
    label: string
    bgColor: string
    textColor: string
}

interface MatchBookmakersProps {
    buttons: BookmakerButtonProps[]
}

export default function MatchBookmakers({ buttons }: MatchBookmakersProps) {
    return (
        <div className="flex gap-2 md:justify-start justify-center">
            {buttons.map((button, index) => (
                <MatchBookmakersButton
                    key={index}
                    label={button.label}
                    bgColor={button.bgColor}
                    textColor={button.textColor}
                />
            ))}
        </div>
    )
}
