'use client'

import React from 'react'

interface InputColorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function InputColor({ label, className = '', ...rest }: InputColorProps) {
    return (
        <div className="flex flex-col gap-1 items-start">
            {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
            <input
                type="color"
                {...rest}
                className={`w-10 h-10 p-0 border rounded cursor-pointer ${className}`}
            />
        </div>
    )
}
