// AdminMenuItem.tsx
import Link from 'next/link'
import { FaPlus, FaPen, FaEye } from 'react-icons/fa'

interface AdminMenuItemProps {
    index: number
    label: string
    actions?: ('add' | 'edit' | 'view')[]
}

export default function AdminMenuItem({ index, label, actions = [] }: AdminMenuItemProps) {
    const slug = label.toLowerCase().replace(/\s+/g, '-')

    return (
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 text-sm hover:bg-gray-50">
            <Link href={`/admin/${slug}`} className="font-medium hover:underline text-black">
                {index} - {label}
            </Link>

            <div className="flex items-center gap-4">
                {actions.includes('add') && (
                    <Link href={`/admin/${slug}/adicionar`} className="flex items-center gap-1 text-green-700 hover:underline">
                        <FaPlus size={12} /> Adicionar
                    </Link>
                )}
                {actions.includes('view') && (
                    <Link href={`/admin/${slug}/visualizar`} className="flex items-center gap-1 text-blue-600 hover:underline">
                        <FaEye size={12} /> Visualizar
                    </Link>
                )}
                {actions.includes('edit') && (
                    <Link href={`/admin/${slug}/editar`} className="flex items-center gap-1 text-yellow-700 hover:underline">
                        <FaPen size={12} /> Modificar
                    </Link>
                )}
            </div>
        </div>
    )
}
