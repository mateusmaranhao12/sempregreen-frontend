import React from 'react';

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
    );
}
