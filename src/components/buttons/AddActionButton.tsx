'use client'

import { FaPlus } from 'react-icons/fa'

interface AddActionButtonProps {
    onClick: () => void
    title?: string
}

export default function AddActionButton({ onClick, title = 'Adicionar' }: AddActionButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded cursor-pointer"
            title={title}
        >
            <FaPlus />
        </button>
    )
}
