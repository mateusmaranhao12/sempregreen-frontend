import MatchBookmakersButton from "../../buttons/MatchBookmakersButton";

interface BookmakerButtonProps {
    label: string
    bgColor: string
    textColor: string
    width?: string
    textSize?: string
}

interface MatchBookmakersProps {
    buttons: BookmakerButtonProps[]
}

export default function MatchBookmakers({ buttons }: MatchBookmakersProps) {
    return (
        <div className="flex flex-wrap gap-2 md:justify-start justify-center max-w-full overflow-hidden">
            {buttons.map((button, index) => (
                <MatchBookmakersButton
                    key={index}
                    label={button.label}
                    bgColor={button.bgColor}
                    textColor={button.textColor}
                    width={button.width}
                    textSize={button.textSize}
                />
            ))}
        </div>
    )
}
