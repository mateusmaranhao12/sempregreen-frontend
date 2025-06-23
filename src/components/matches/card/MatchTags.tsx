import { ReactNode } from "react";

interface MatchTagsProps {
    tags: ReactNode[]
    highlight?: string
}

export default function MatchTags({ tags }: MatchTagsProps) {
    return (
        <div className="flex flex-col gap-2 items-start">
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className="text-sm text-gray-700 leading-tight break-words"
                >
                    {tag}
                </div>
            ))}

        </div>
    );
}
