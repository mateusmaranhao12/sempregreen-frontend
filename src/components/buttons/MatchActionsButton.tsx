import React from "react"

interface ActionButtonProps {
    label?: string
    bgColor: string
    textColor: string
    children?: React.ReactNode
}

export default function MatchActionsButton({
    label,
    bgColor,
    textColor,
    children
}: ActionButtonProps) {
    return (
        <button className={`${bgColor} ${textColor} px-2 py-2 rounded text-2xl md:text-4xl flex items-center justify-center 
        cursor-pointer hover:scale-105 transition duration-150 ease-in-out`}>
            {children || label}
        </button>
    )
}