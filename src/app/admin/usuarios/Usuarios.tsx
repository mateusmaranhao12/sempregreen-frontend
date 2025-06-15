'use client'

import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import type { TableRow } from '@/components/ui/AdminTable'
import AdminTable from '@/components/ui/AdminTable'
import SidebarFilters from '@/components/ui/SidebarFilters'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'

export default function UsuariosPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [showFilters, setShowFilters] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const headers = [
        '',
        'EMAIL',
        'CACHED IP',
        'SITE',
        'PRIMEIRO NOME',
        'DATA DE REGISTRO',
        'WHATSAPP',
    ]

    const usuarios = [
        {
            email: 'exemplo@email.com',
            ip: '-',
            site: 'sinais.sempregreen.com.br',
            nome: 'João da Silva',
            data: '10/03/2025 12:58:46',
            whatsapp: '55119876543',
        },
        // ...
    ]

    const rows: TableRow[] = usuarios.map(u => ({
        slug: 'usuarios',
        actions: ['edit'],
        data: [u.email, u.ip, u.site, u.nome, u.data, u.whatsapp],
    }))

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">Selecione 0 - Usuário para modificar</h1>
                <div className="flex gap-2">
                    <Link href="/admin/dashboard">
                        <Button variant="gray">Voltar ao dashboard</Button>
                    </Link>
                    <AdminAddButton />
                </div>
            </div>

            <AdminSearchControls
                search={search}
                onSearchChange={setSearch}
                selectedOption={selectedAction}
                onOptionChange={setSelectedAction}
                onSubmit={() => console.log('Executar ação:', selectedAction)}
                totalSelecionados="0 de 100 selecionados"
            />

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

                {/*Botao de exibir e ocultar o menu do filtro */}
                {showFilters && (
                    <aside className="w-full md:w-1/4 flex flex-col">
                        <SidebarFilters
                            onClose={() => setShowFilters(false)}
                            filters={[
                                { label: 'por membro da equipe', options: ['Todos', 'Sim', 'Não'] },
                                { label: 'por status de superusuário', options: ['Todos', 'Sim', 'Não'] },
                                { label: 'por ativo', options: ['Todos', 'Sim', 'Não'] },
                                { label: 'por grupos', options: ['Todos', 'Sim', 'Não'] },
                            ]}
                        />
                    </aside>
                )}

                {!showFilters && (
                    <div className="flex flex-col w-28">
                        <Button
                            onClick={() => setShowFilters(true)}
                            className="text-xs px-2 py-1 rounded"
                            variant="gray"
                        >
                            Exibir filtros
                        </Button>
                    </div>
                )}

            </div>
        </div>
    )
}