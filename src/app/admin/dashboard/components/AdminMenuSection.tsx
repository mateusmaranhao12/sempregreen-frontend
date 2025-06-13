'use client'
import { FaMinus, FaPlus } from 'react-icons/fa'
import AdminMenuItem from './AdminMenuItem'
import { useState } from 'react'

interface AdminMenuSectionProps {
    title: string
    items: {
        label: string
        actions?: ('add' | 'edit' | 'view')[]
    }[]
}

export default function AdminMenuSection({ title, items }: AdminMenuSectionProps) {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="rounded overflow-hidden mb-4">
            <div
                className="
                bg-emerald-500 text-white px-4 py-2 font-bold 
                text-sm flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <div className="text-white">
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </div>
            </div>
            {isOpen && items.map((item, index) => (
                <AdminMenuItem
                    key={index}
                    index={index}
                    label={item.label}
                    actions={item.actions}
                />
            ))}
        </div>
    )
}
