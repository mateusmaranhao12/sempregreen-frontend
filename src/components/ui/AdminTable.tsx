'use client'

import Link from 'next/link'
import { JSX } from 'react'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import Button from '../buttons/Button'

export type TableRow = {
    id: number | string
    slug: string
    actions?: ('add' | 'edit' | 'remove')[]
    data: (string | number | JSX.Element)[]
    editableFields?: JSX.Element[]
    isEditing?: boolean
    onEditToggle?: () => void
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
                                <input
                                    type="checkbox"
                                    checked={selection.isAllSelected}
                                    onChange={selection.toggleAll}
                                />
                            </th>
                        )}
                        {headers.map((header, i) => (
                            <th key={i} className="p-2 text-left">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {selection && (
                                <td className="px-3 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selection.isSelected(row.id)}
                                        onChange={() => selection.toggle(row.id)}
                                    />
                                </td>
                            )}
                            <td className="px-3 py-2 whitespace-nowrap flex gap-1">
                                {row.actions?.includes('add') && (
                                    <Link
                                        href={`/admin/${row.slug}/adicionar`}
                                        title="Adicionar"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Button variant="green">
                                            <FaPlus size={16} />
                                        </Button>
                                    </Link>
                                )}

                                {row.actions?.includes('edit') && (
                                    row.slug !== 'inline' ? (
                                        // Redireciona para a página de edição com slug e id
                                        <Link
                                            href={`/admin/${row.slug}/${row.id}/editar`}
                                            title="Editar"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Button variant="blue">
                                                <FaEdit size={16} />
                                            </Button>
                                        </Link>
                                    ) : (
                                        // Edição inline
                                        <Button
                                            variant="blue"
                                            title="Editar inline"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                row.onEditToggle?.()
                                            }}
                                        >
                                            <FaEdit size={16} />
                                        </Button>
                                    )
                                )}

                                {row.actions?.includes('remove') && (
                                    <Link
                                        href={`/admin/${row.slug}/remover`}
                                        title="Remover"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Button variant="red">
                                            <FaTrash size={16} />
                                        </Button>
                                    </Link>
                                )}
                            </td>

                            {(row.isEditing ? row.editableFields ?? row.data : row.data).map((cell, colIndex) => (
                                <td key={colIndex} className="px-3 py-2 whitespace-nowrap">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
