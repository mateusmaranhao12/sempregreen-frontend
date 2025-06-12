import React from 'react';

interface LabelProps {
    htmlFor?: string
    children: React.ReactNode
}

export default function Label({ htmlFor, children }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className="block text-white text-sm font-semibold mb-1 text-left"
        >
            {children}
        </label>
    );
}
