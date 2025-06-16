'use client'

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import Button from '@/components/buttons/Button'
import Table from '@/components/ui/Table'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default function HistoricoProxyPage() {
    const [showMenu, setShowMenu] = useState(true)

    const proxyURI = 'resi.rainproxy.io:1080:yu6ym1olxw89n4b-country-br-state-...'

    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const rows = [
        ['08/05/2025 15:35:36', 'admin@example.com', 'Adicionado.']
    ]

    return (
        <div className="mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {/* Menu lateral */}
                {showMenu ? (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded self-end" variant="gray">
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
                        <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant="gray">
                            Exibir menu
                        </Button>
                    </div>
                )}

                {/* Conteúdo principal */}
                <main className="flex-1 px-4 py-4">
                    <Link href="/admin/dashboard">
                        <Button variant="darkgreen" className="mb-5">
                            <FaChevronLeft />
                        </Button>
                    </Link>

                    <h1 className="text-xl font-semibold text-gray-700 mb-4">
                        Histórico de modificações: <span className="text-black">{proxyURI}</span>
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
