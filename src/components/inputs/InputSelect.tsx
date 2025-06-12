import React from 'react'

export default function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            {...props}
            className="w-full pt-2 pb-3 px-3 rounded border bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
            {props.children}
        </select>
    );
}
