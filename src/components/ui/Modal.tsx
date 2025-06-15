'use client'

import { ReactNode, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
    onClose: () => void
    title: string
    children: ReactNode
    maxWidth?: string
}

export default function Modal({ onClose, title, children, maxWidth = 'max-w-4xl' }: ModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
            onClick={handleBackdropClick}
        >
            <div className={`bg-white w-full ${maxWidth} rounded shadow p-6 relative max-h-[90vh] overflow-y-auto`}>
                <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-black  cursor-pointer"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>

                <h2 className="text-xl font-bold mb-6">{title}</h2>

                {children}
            </div>
        </div>
    )
}
