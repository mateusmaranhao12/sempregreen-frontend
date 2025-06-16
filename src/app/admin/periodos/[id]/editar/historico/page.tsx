'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function HistoricoPeriodoPage() {
    const [showMenu, setShowMenu] = useState(true)

    const historico = [
        { data: '25/05/2025 09:29:36', usuario: 'admin@example.com', acao: 'Adicionado.' },
        { data: '25/05/2025 09:30:18', usuario: 'admin@example.com', acao: 'Nenhum campo modificado.' },
        { data: '25/05/2025 09:30:24', usuario: 'admin@example.com', acao: 'Alterado Nome.' }
    ]

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu ? (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded self-end" variant="gray">Ocultar menu</Button>
                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            ) : (
                <div className="md:w-28">
                    <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant="gray">Exibir menu</Button>
                </div>
            )}
            <main className="flex-1 px-4 py-4">
                <h1 className="text-xl font-semibold mb-6">Histórico de modificações: GREEN - SEMANAL</h1>
                <table className="w-full text-sm border-collapse">
                    <thead className="text-left bg-gray-100">
                        <tr>
                            <th className="p-2 border-b">DATA/HORA</th>
                            <th className="p-2 border-b">USUÁRIO</th>
                            <th className="p-2 border-b">AÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historico.map((entry, index) => (
                            <tr key={index}>
                                <td className="p-2 border-b">{entry.data}</td>
                                <td className="p-2 border-b">{entry.usuario}</td>
                                <td className="p-2 border-b">{entry.acao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}
