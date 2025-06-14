import { JSX } from "react"

interface AdminTableProps {
    headers: string[]
    rows: (string | number | JSX.Element)[][]
}

export default function AdminTable({ headers, rows }: AdminTableProps) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i} className="px-3 py-2 whitespace-nowrap">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {row.map((cell, colIndex) => (
                                <td key={colIndex} className="px-3 py-2 whitespace-nowrap">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
