'use client'

import Link from 'next/link'
import { JSX } from 'react'
import { FaPlus, FaEdit, FaTrash, FaEye } from 'react-icons/fa'
import Button from '../buttons/Button'
import AdminRowCheckbox from './AdminRowCheckbox'

export type TableRow = {
    id: number | string
    slug: string
    actions?: (
        | 'add'
        | 'edit'
        | 'remove'
        | 'view'
        | {
            icon: React.ReactNode
            label: string
            href: string
        }
    )[]
    data: (string | number | JSX.Element)[]
    editableFields?: JSX.Element[]
    isEditing?: boolean
}

interface AdminTableProps {
    headers: string[]
    rows: TableRow[]
    selection?: {
        isSelected: (id: number | string) => boolean
        toggle: (id: number | string) => void
        toggleAll: () => void
        isAllSelected: boolean
    }
}

export default function AdminTable({ headers, rows, selection }: AdminTableProps) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {selection && (
                            <th className="p-2">
                                <AdminRowCheckbox
                                    isChecked={selection.isAllSelected}
                                    onChange={selection.toggleAll}
                                />
                            </th>
                        )}
                        {/* Ações fixas */}
                        <th className="p-2 text-left">AÇÕES</th>
                        {headers.map((header, i) => (
                            <th key={i} className="p-2 text-left">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {selection && (
                                <td className="px-3 py-2 text-center">
                                    <AdminRowCheckbox
                                        isChecked={selection.isSelected(row.id)}
                                        onChange={() => selection.toggle(row.id)}
                                    />
                                </td>
                            )}

                            {/* Ações */}
                            <td className="px-3 py-2 whitespace-nowrap flex gap-1">
                                {row.actions?.map((action, index) => {
                                    if (typeof action === 'string') {
                                        const variant = {
                                            add: 'green',
                                            edit: 'blue',
                                            remove: 'red',
                                            view: 'cyan'
                                        }[action] as 'green' | 'blue' | 'red' | 'cyan'


                                        const Icon = {
                                            add: <FaPlus size={16} />,
                                            edit: <FaEdit size={16} />,
                                            remove: <FaTrash size={16} />,
                                            view: <FaEye size={16} />
                                        }[action]

                                        const href =
                                            action === 'add'
                                                ? `/admin/${row.slug}/adicionar`
                                                : action === 'edit'
                                                    ? `/admin/${row.slug}/${row.id}/editar`
                                                    : `/admin/${row.slug}/remover`

                                        return (
                                            <Link href={href} key={index} onClick={(e) => e.stopPropagation()}>
                                                <Button variant={variant}>{Icon}</Button>
                                            </Link>
                                        )
                                    }

                                    // Custom action (com ícone personalizado)
                                    return (
                                        <Link
                                            key={index}
                                            href={action.href}
                                            title={action.label}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Button variant="cyan">{action.icon}</Button>
                                        </Link>
                                    )
                                })}
                            </td>

                            {/* Conteúdo */}
                            {(row.isEditing ? row.editableFields ?? row.data : row.data).map(
                                (cell, colIndex) => (
                                    <td key={colIndex} className="px-3 py-2 whitespace-nowrap">
                                        {cell}
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
