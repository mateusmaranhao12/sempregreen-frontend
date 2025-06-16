'use client'

import React from 'react'

interface InputFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputFile({ label, className = '', ...rest }: InputFileProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
            <input
                type="file"
                {...rest}
                className={`block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
        file:rounded file:border-0 file:text-sm file:font-semibold
        file:bg-green-50 file:text-green-700 hover:file:bg-green-100
        ${className}`}
            />
        </div>
    )
}
