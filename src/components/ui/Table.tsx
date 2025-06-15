'use client'

interface TableProps {
    headers: string[]
    rows: Array<string[]>
    footer?: string
}

export default function Table({ headers, rows, footer }: TableProps) {
    return (
        <div className="w-full overflow-x-auto rounded shadow-sm bg-white">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-4 py-3 text-gray-800 whitespace-nowrap"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {footer && (
                    <tfoot>
                        <tr>
                            <td colSpan={headers.length} className="px-4 py-2 text-sm text-gray-500">
                                {footer}
                            </td>
                        </tr>
                    </tfoot>
                )}
            </table>
        </div>
    )
}
