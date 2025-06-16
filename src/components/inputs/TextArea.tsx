'use client'

import React from 'react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
}

export default function TextArea({ label, className = '', ...rest }: TextAreaProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
            <textarea
                {...rest}
                className={`pt-2 pb-3 px-3 rounded border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
            />
        </div>
    )
}
