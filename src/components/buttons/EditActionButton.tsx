'use client'

import { FaPen } from 'react-icons/fa'
import { ButtonHTMLAttributes } from 'react'

export default function EditActionButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white text-sm px-2 py-1 rounded flex items-center justify-center"
            title="Editar"
        >
            <FaPen />
        </button>
    )
}
