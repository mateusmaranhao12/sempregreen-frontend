import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export default function Input(props: InputProps) {
    return (
        <input
            {...props}
            className="w-full p-3 rounded border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
    );
}
