import React from 'react';

interface DashboardButtonProps {
    icon: React.ReactNode
    label: string
    bg?: string
    onClick?: () => void
}

export default function DashboardButton({ icon, label, bg = '', onClick }: DashboardButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${bg} flex flex-col items-center justify-center 
                cursor-pointer rounded px-4 py-2 w-[90px] h-[70px] text-sm 
                font-semibold transition-transform duration-200 hover:scale-105`
            }
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}
