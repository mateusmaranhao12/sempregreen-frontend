'use client'

import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import Input from '@/components/inputs/InputText'
import AdminTable from '@/components/ui/AdminTable'
import SidebarFilters from '@/components/ui/SidebarFilters'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'

export default function UsuariosPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')

    const usuarios = [
        {
            email: 'exemplo@email.com',
            ip: '-',
            site: 'sinais.sempregreen.com.br',
            nome: 'João da Silva',
            data: '10/03/2025 12:58:46',
            whatsapp: '55119876543',
        },
        {
            email: '00felipe.ff@gmail.com',
            ip: '-',
            site: 'sinais.sempregreen.com.br',
            nome: 'Felipe Rodrigues',
            data: '14/01/2024 08:54:40',
            whatsapp: '(88)9.9713-07',
        },
        {
            email: '011fernando.oliveira@gmail.com',
            ip: '2804:431:c7fc:2314:f98a:a757:e454:b352',
            site: 'sinais.sempregreen.com.br',
            nome: 'Fernando',
            data: '10/09/2024 13:15:12',
            whatsapp: '(11)9.4873-89',
        },
    ]

    const headers = [
        'EMAIL',
        'CACHED IP',
        'SITE',
        'PRIMEIRO NOME',
        'DATA DE REGISTRO',
        'WHATSAPP',
    ]

    const rows = usuarios.map((u) => [
        u.email,
        u.ip,
        u.site,
        u.nome,
        u.data,
        u.whatsapp,
    ])

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">Selecione 0 - Usuário para modificar</h1>
                <div className="flex gap-2">
                    <Link href="/admin/dashboard">
                        <Button variant="gray">Voltar ao dashboard</Button>
                    </Link>
                    <Button variant="gray">Adicionar 0 - Usuário</Button>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2">
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar"
                    className="w-full sm:w-64"
                />
                <Select className="w-full sm:w-64">
                    <option>--------</option>
                    <option>Excluir</option>
                    <option>Ativar</option>
                </Select>
                <Button variant="gray">Ir</Button>
                <span className="text-sm text-gray-600">0 de 100 selecionados</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {showMenu && (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        {/* Botão flutuante no topo-direito do menu */}
                        <Button
                            onClick={() => setShowMenu(false)}
                            className="text-xs px-2 py-1 rounded w-25"
                            variant='gray'
                        >
                            Ocultar menu
                        </Button>

                        <div className=" bg-white z-10 pb-2 mt-6">
                            <Input className="w-full" placeholder="Comece a digitar para filtrar..." />
                        </div>

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

                {/* Botão de exibir menu (aparece só quando menu estiver oculto) */}
                {!showMenu && (
                    <div className="md:w-12">
                        <Button
                            onClick={() => setShowMenu(true)}
                            className="text-xs px-2 py-1 rounded"
                            variant='gray'
                        >
                            Exibir menu
                        </Button>
                    </div>
                )}

                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto">
                    <AdminTable headers={headers} rows={rows} />

                    <div className="flex justify-center mt-4 gap-2 text-sm">
                        <button className="px-3 py-1 rounded bg-green-600 text-white font-semibold">1</button>
                        <button className="px-3 py-1 rounded border border-green-600 text-green-700">2</button>
                        <button className="px-3 py-1 rounded border border-green-600 text-green-700">3</button>
                        <span className="px-3 py-1">...</span>
                        <button className="px-3 py-1 rounded border border-green-600 text-green-700">90</button>
                    </div>
                </main>

                <SidebarFilters />
            </div>
        </div>
    )
}