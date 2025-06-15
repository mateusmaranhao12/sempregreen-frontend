'use client'

import Table from '@/components/ui/Table'
import Link from 'next/link'
import Button from '@/components/buttons/Button'
import { FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function HistoricoCasaApostaPage() {
    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const [showMenu, setShowMenu] = useState(true)
    const rows = [
        ['04/02/2025 12:28:15', 'admin@example.com', 'Adicionado.'],
        ['17/02/2025 18:30:00', 'admin@example.com', 'Alterado Substituir de.'],
        ['20/03/2025 12:30:18', 'admin@example.com', 'Alterado URL.'],
        ['24/05/2025 13:51:43', 'admin@example.com', 'Alterado Ícone.'],
        ['24/05/2025 13:53:27', 'admin@example.com', 'Alterado Ícone.'],
        ['24/05/2025 13:53:39', 'admin@example.com', 'Alterado Ícone.'],
    ]

    return (
        <div className="mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {showMenu ? (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        <Button
                            onClick={() => setShowMenu(false)}
                            className="text-xs px-2 py-1 rounded self-end"
                            variant='gray'
                        >
                            Ocultar menu
                        </Button>
                        <div className="flex flex-col gap-4">
                            {adminMenuSections.map((section, index) => (
                                <AdminMenuSection
                                    key={index}
                                    title={section.title}
                                    items={section.items}
                                />
                            ))}
                        </div>
                    </aside>
                ) : (
                    <div className="md:w-28">
                        <Button
                            onClick={() => setShowMenu(true)}
                            className="text-xs px-2 py-1 rounded"
                            variant='gray'
                        >
                            Exibir menu
                        </Button>
                    </div>
                )}

                <main className="flex-1">
                    <Link href="/admin/dashboard">
                        <Button variant="darkgreen" className="mb-5">
                            <FaChevronLeft />
                        </Button>
                    </Link>

                    <h1 className="text-xl font-semibold text-gray-700 mb-4">
                        Histórico de modificações: <span className="text-black">1PRA1 Bet - Pré</span>
                    </h1>

                    <Table headers={headers} rows={rows} footer="6 entradas" />
                </main>
            </div>
        </div>

    )
}