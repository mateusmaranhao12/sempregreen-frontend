import React from 'react';

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { className = '', ...rest } = props;

    return (
        <input
            {...rest}
            className={`pt-2 pb-3 px-3 rounded border text-black bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
        />
    );
}
