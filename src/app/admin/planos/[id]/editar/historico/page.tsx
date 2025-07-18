'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import Button from '@/components/buttons/Button'
import Table from '@/components/ui/Table'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function HistoricoPlanoPage() {
    const [showMenu, setShowMenu] = useState(true)

    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const rows = [
        ['13/11/2023 10:30:22', 'admin@example.com', 'Adicionado.'],
        ['13/11/2023 10:31:20', 'admin@example.com', 'Alterado Nome.'],
        ['13/11/2023 10:31:41', 'admin@example.com', 'Alterado Nome.'],
        ['13/11/2023 10:31:58', 'admin@example.com', 'Alterado Nome.'],
        ['13/11/2023 14:24:36', 'admin@example.com', 'Alterado Nome.']
    ]

    return (
        <div className="mx-auto">
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

                <main className="flex-1">
                    <Link href="/admin/dashboard">
                        <Button variant="darkgreen" className="mb-5">
                            <FaChevronLeft />
                        </Button>
                    </Link>

                    <h1 className="text-xl font-semibold text-gray-700 mb-4">
                        Histórico de modificações: <span className="text-black">PRÉ JOGO</span>
                    </h1>

                    <Table headers={headers} rows={rows} footer="5 entradas" />
                </main>
            </div>
        </div>
    )
}
