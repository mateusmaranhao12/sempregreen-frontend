'use client'

import Table from '@/components/ui/Table'
import Link from 'next/link'
import Button from '@/components/buttons/Button'
import { FaChevronLeft } from 'react-icons/fa'
import { useState } from 'react'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function HistoricoMercadoPage() {
    const [showMenu, setShowMenu] = useState(true)

    const nomeMercado = 'OVER/UNDER'
    const modalidade = 'EV'

    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const rows = [
        ['18/04/2024 20:37:14', 'admin@example.com', 'Adicionado.'],
        ['16/05/2024 21:31:55', 'admin@example.com', 'Alterado Palavras chave separadas por vírgula.']
    ]

    return (
        <div className="mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {/* Menu lateral */}
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

                {/* Conteúdo principal */}
                <main className="flex-1 px-4 py-4">
                    <Link href="/admin/dashboard">
                        <Button variant="darkgreen" className="mb-5">
                            <FaChevronLeft />
                        </Button>
                    </Link>

                    <h1 className="text-xl font-semibold text-gray-700 mb-4">
                        Histórico de modificações: <span className="text-black">{nomeMercado} - {modalidade}</span>
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
