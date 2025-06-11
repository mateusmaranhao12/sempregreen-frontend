interface MatchTagsProps {
    tags: string[]
    highlight?: string
}

export default function MatchTags({ tags, highlight }: MatchTagsProps) {
    return (
        <div className="text-sm text-gray-500 text-center md:text-left space-y-1">
            {tags.map((tag, index) => (
                <div key={index}>{tag}</div>
            ))}
            {highlight && (
                <div className="text-red-600 font-bold">{highlight}</div>
            )}
        </div>
    );
}
