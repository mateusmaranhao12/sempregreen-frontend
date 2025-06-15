import Link from 'next/link'
import { FaPlus, FaPen, FaEye } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

interface AdminMenuItemProps {
    index: number
    label: string
    actions?: ('add' | 'edit' | 'view')[]
}

function slugify(text: string) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, '-')
}

export default function AdminMenuItem({ index, label, actions = [] }: AdminMenuItemProps) {
    const slug = slugify(label)
    const pathname = usePathname()
    const isDashboard = pathname === '/admin/dashboard'

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
                {isDashboard && actions.includes('view') && (
                    <Link href={`/admin/${slug}`} className="flex items-center gap-1 text-blue-600 hover:underline">
                        <FaEye size={12} /> Visualizar
                    </Link>
                )}
                {isDashboard && actions.includes('edit') && (
                    <Link href={`/admin/${slug}`} className="flex items-center gap-1 text-yellow-700 hover:underline">
                        <FaPen size={12} /> Modificar
                    </Link>
                )}
            </div>
        </div>
    )
}
