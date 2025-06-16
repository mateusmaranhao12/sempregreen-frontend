'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Link from 'next/link'

export default function EditarMercadoPagoPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [accessToken, setAccessToken] = useState('APP_USR-2282655746179230-072016-29d98...')

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral esquerdo */}
            {showMenu && (
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
                            <AdminMenuSection
                                key={index}
                                title={section.title}
                                items={section.items}
                            />
                        ))}
                    </div>
                </aside>
            )}

            {!showMenu && (
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

            {/* Conteúdo principal */}
            <main className="flex-1 px-4 py-4">
                <div className="flex gap-2 mb-5">
                    <Link href="/admin/dashboard">
                        <Button variant="gray">Voltar ao dashboard</Button>
                    </Link>
                </div>
                <h1 className="text-xl font-semibold mb-6">Selecione 4 - MercadoPago para modificar</h1>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead className="text-left bg-gray-100">
                            <tr>
                                <th className="p-2">SITE</th>
                                <th className="p-2">ACCESS TOKEN (TOKEN DE ACESSO)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 align-middle">sinais.sempregreen.com.br</td>
                                <td className="p-2 align-middle">
                                    <Input
                                        value={accessToken}
                                        onChange={e => setAccessToken(e.target.value)}
                                        className="w-full"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <Button variant="darkgreen">Salvar</Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
