'use client'

import React from 'react'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputText({ label, className = '', ...rest }: InputTextProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
            <input
                {...rest}
                className={`pt-2 pb-3 px-3 rounded border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
            />
        </div>
    )
}
