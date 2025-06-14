import Link from "next/link"
import { JSX } from "react"
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"
import Button from "../buttons/Button"

export type TableRow = {
    slug: string
    actions?: ('add' | 'edit' | 'remove')[]
    data: (string | number | JSX.Element)[]
}

interface AdminTableProps {
    headers: string[]
    rows: TableRow[]
}

export default function AdminTable({ headers, rows }: AdminTableProps) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-3 py-2 whitespace-nowrap">AÇÕES</th>
                        {headers.map((header, i) => (
                            <th key={i} className="px-3 py-2 whitespace-nowrap">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            <td className="px-3 py-2 whitespace-nowrap flex gap-1">
                                {row.actions?.includes('add') && (
                                    <Link href={`/admin/${row.slug}/adicionar`} title="Adicionar">
                                        <Button variant="green">
                                            <FaPlus size={16} />
                                        </Button>
                                    </Link>
                                )}
                                {row.actions?.includes('edit') && (
                                    <Link href={`/admin/${row.slug}/editar`} title="Editar">
                                        <Button variant="blue">
                                            <FaEdit size={16} />
                                        </Button>
                                    </Link>
                                )}
                                {row.actions?.includes('remove') && (
                                    <Link href={`/admin/${row.slug}/remover`} title="Remover">
                                        <Button variant="red">
                                            <FaTrash size={16} />
                                        </Button>
                                    </Link>
                                )}
                            </td>
                            {row.data.map((cell, colIndex) => (
                                <td key={colIndex} className="px-3 py-2 whitespace-nowrap">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
