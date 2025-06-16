'use client'

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import Button from '@/components/buttons/Button'
import Table from '@/components/ui/Table'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default function HistoricoAcessoPage() {
    const [showMenu, setShowMenu] = useState(true)

    const nomeAcesso = 'surebet.com - lonnieabensonjonathanshawkins@gmail.com - Q!w2bet987'
    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const rows = [
        ['09/05/2025 09:35:57', 'admin@example.com', 'Adicionado.'],
        ['09/05/2025 10:00:01', 'admin@example.com', 'Alterado CURL.'],
        ['09/05/2025 10:09:03', 'admin@example.com', 'Alterado CURL.'],
        ['09/05/2025 10:30:19', 'admin@example.com', 'Alterado CURL.'],
        ['09/05/2025 14:05:25', 'admin@example.com', 'Alterado CURL.'],
        ['09/05/2025 19:07:33', 'admin@example.com', 'Alterado CURL.'],
        ['09/05/2025 19:24:18', 'admin@example.com', 'Alterado CURL.'],
        ['10/05/2025 04:06:14', 'paulomuniz255@gmail.com (Paulo Hen)', 'Alterado CURL.'],
        ['10/05/2025 10:54:36', 'admin@example.com', 'Alterado CURL.'],
        ['10/05/2025 11:11:06', 'admin@example.com', 'Alterado CURL.'],
        ['10/05/2025 12:37:16', 'admin@example.com', 'Alterado CURL.'],
        ['10/05/2025 14:00:59', 'admin@example.com', 'Alterado CURL.'],
        ['10/05/2025 14:24:29', 'admin@example.com', 'Alterado CURL.'],
        ['10/05/2025 14:31:50', 'admin@example.com', 'Alterado CURL.'],
        ['11/05/2025 06:19:35', 'admin@example.com', 'Alterado CURL.'],
        ['12/05/2025 12:58:35', 'admin@example.com', 'Alterado CURL.'],
        ['12/05/2025 15:45:17', 'admin@example.com', 'Alterado CURL.'],
    ]

    return (
        <div className="mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {showMenu ? (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        <Button
                            onClick={() => setShowMenu(false)}
                            className="text-xs px-2 py-1 rounded self-end"
                            variant="gray"
                        >
                            Ocultar menu
                        </Button>
                        <div className="flex flex-col gap-4">
                            {adminMenuSections.map((section, index) => (
                                <AdminMenuSection key={index} title={section.title} items={section.items} />
                            ))}
                        </div>
                    </aside>
                ) : (
                    <div className="md:w-28">
                        <Button
                            onClick={() => setShowMenu(true)}
                            className="text-xs px-2 py-1 rounded"
                            variant="gray"
                        >
                            Exibir menu
                        </Button>
                    </div>
                )}

                <main className="flex-1 px-4 py-4">
                    <Link href="/admin/dashboard">
                        <Button variant="darkgreen" className="mb-5">
                            <FaChevronLeft />
                        </Button>
                    </Link>

                    <h1 className="text-xl font-semibold text-gray-700 mb-4">
                        Histórico de modificações: <span className="text-black">{nomeAcesso}</span>
                    </h1>

                    <Table
                        headers={headers}
                        rows={rows}
                        footer={`${rows.length} entrad${rows.length === 1 ? 'a' : 'as'}`}
                    />
                </main>
            </div>
        </div>
    )
}
