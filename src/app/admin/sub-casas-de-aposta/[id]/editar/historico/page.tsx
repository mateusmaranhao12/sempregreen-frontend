'use client'

import { use } from 'react'
import { useState } from 'react'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'
import Input from '@/components/inputs/InputText'

interface HistoricoEntry {
    dataHora: string
    usuario: string
    acao: string
}

const historicoMock: HistoricoEntry[] = [
    { dataHora: '19/06/2024 15:17:06', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' },
    { dataHora: '09/01/2025 12:58:04', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' },
    { dataHora: '10/01/2025 13:08:48', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' },
    { dataHora: '14/01/2025 14:46:49', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' },
    { dataHora: '14/01/2025 14:48:30', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' },
    { dataHora: '18/01/2025 09:28:27', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' },
    { dataHora: '18/01/2025 09:40:17', usuario: 'admin@example.com', acao: 'Alterado Casa que representa a sub casa de aposta.' }
]

export default function HistoricoSubCasaDeAposta() {
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu ? (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded self-end" variant='gray'>Ocultar menu</Button>
                    <Input className="w-full" placeholder="Comece a digitar para filtrar..." />
                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            ) : (
                <div className="md:w-28">
                    <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant='gray'>Exibir menu</Button>
                </div>
            )}

            <main className="flex-1 px-4 py-4 overflow-x-auto">
                <Link href="/admin/dashboard">
                    <Button variant='darkgreen' className='mb-5'>
                        <FaChevronLeft />
                    </Button>
                </Link>

                <h1 className="text-xl font-semibold mb-4">Histórico de modificações: Betfair SB</h1>

                <div className="bg-white rounded shadow p-4 overflow-auto">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border-b font-semibold">DATA/HORA</th>
                                <th className="px-4 py-2 border-b font-semibold">USUÁRIO</th>
                                <th className="px-4 py-2 border-b font-semibold">AÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoMock.map((entry, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2 whitespace-nowrap">{entry.dataHora}</td>
                                    <td className="px-4 py-2 whitespace-nowrap">{entry.usuario}</td>
                                    <td className="px-4 py-2">{entry.acao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-2 text-sm text-gray-600">{historicoMock.length} entradas</div>
                </div>
            </main>
        </div>
    )
}
