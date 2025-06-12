import React from 'react';

interface LabelProps {
    htmlFor?: string
    children: React.ReactNode
    className?: string
}

export default function Label({ htmlFor, children, className='' }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`block text-white text-sm font-semibold mb-1 text-left ${className}`}
        >
            {children}
        </label>
    );
}
