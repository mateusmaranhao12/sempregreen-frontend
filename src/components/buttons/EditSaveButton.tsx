'use client'

import { FaEdit, FaCheck } from 'react-icons/fa'

interface EditSaveButtonProps {
    isEditing: boolean
    onClick: () => void
}

export default function EditSaveButton({ isEditing, onClick }: EditSaveButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        cursor-pointer px-2 py-1 rounded text-white
        ${isEditing
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-yellow-500 hover:bg-yellow-600'}
      `}
        >
            {isEditing ? <FaCheck /> : <FaEdit />}
        </button>
    )
}
