'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import type { TableRow } from '@/components/ui/AdminTable'
import AdminTable from '@/components/ui/AdminTable'
import SidebarFilters from '@/components/ui/SidebarFilters'
import { adminMenuSections } from '@/config/adminMenuConfig'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'
import { useSelection } from '@/app/utils/useSelection'

export default function UsuariosPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [showFilters, setShowFilters] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const usuarios = useMemo(() => [
        {
            id: 1,
            email: 'exemplo@email.com',
            ip: '-',
            site: 'sinais.sempregreen.com.br',
            nome: 'João da Silva',
            data: '10/03/2025 12:58:46',
            whatsapp: '55119876543',
        },
        {
            id: 2,
            email: 'exemplo@email.com',
            ip: '-',
            site: 'sinais.sempregreen.com.br',
            nome: 'João da Silva',
            data: '10/03/2025 12:58:46',
            whatsapp: '55119876543',
        }
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return usuarios.map((u) => ({
            id: u.id,
            slug: 'usuarios',
            actions: ['edit'],
            data: [u.email, u.ip, u.site, u.nome, u.data, u.whatsapp],
        }))
    }, [usuarios])

    const {
        selectedIds,
        isSelected,
        toggle,
        toggleAll,
        isAllSelected
    } = useSelection(rows)

    return (
        <div className="flex flex-col gap-4">
            {/* Topo */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione {selectedIds.length} - Usuário(s) para modificar
                </h1>
                <div className="flex gap-2">
                    <Link href="/admin/dashboard">
                        <Button variant="gray">Voltar ao dashboard</Button>
                    </Link>
                    <AdminAddButton />
                </div>
            </div>

            {/* Controles de busca/ação */}
            <AdminSearchControls
                search={search}
                onSearchChange={setSearch}
                selectedOption={selectedAction}
                onOptionChange={setSelectedAction}
                onSubmit={() => console.log('Executar ação:', selectedAction)}
                totalSelecionados={`${selectedIds.length} de ${usuarios.length} selecionados`}
                actions={[
                    { label: '--------', value: '' },
                    { label: 'Excluir', value: 'excluir' },
                    { label: 'Ativar', value: 'ativar' }
                ]}
            />

            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {/* Menu lateral */}
                {showMenu && (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        <Button
                            onClick={() => setShowMenu(false)}
                            className="text-xs px-2 py-1 rounded w-25"
                            variant="gray"
                        >
                            Ocultar menu
                        </Button>

                        <div className="bg-white z-10 pb-2 mt-6">
                            <Input className="w-full" placeholder="Comece a digitar para filtrar..." />
                        </div>

                        <div className="flex flex-col gap-4">
                            {adminMenuSections.map((section, index) => (
                                <AdminMenuSection key={index} title={section.title} items={section.items} />
                            ))}
                        </div>
                    </aside>
                )}

                {!showMenu && (
                    <div className="md:w-28">
                        <Button
                            onClick={() => setShowMenu(true)}
                            className="text-xs px-2 py-1 rounded hidden md:block"
                            variant="gray"
                        >
                            Exibir menu
                        </Button>
                    </div>
                )}

                {/* Conteúdo principal */}
                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto">
                    <AdminTable
                        headers={['EMAIL', 'CACHED IP', 'SITE', 'PRIMEIRO NOME', 'DATA DE REGISTRO', 'WHATSAPP']}
                        rows={rows}
                        selection={{
                            isSelected,
                            toggle,
                            toggleAll,
                            isAllSelected,
                        }}
                    />

                    <div className="flex justify-center mt-4 gap-2 text-sm">
                        <button className="px-3 py-1 rounded bg-green-600 text-white font-semibold">1</button>
                        <button className="px-3 py-1 rounded border border-green-600 text-green-700">2</button>
                        <button className="px-3 py-1 rounded border border-green-600 text-green-700">3</button>
                        <span className="px-3 py-1">...</span>
                        <button className="px-3 py-1 rounded border border-green-600 text-green-700">90</button>
                    </div>
                </main>

                {/* Filtros */}
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
