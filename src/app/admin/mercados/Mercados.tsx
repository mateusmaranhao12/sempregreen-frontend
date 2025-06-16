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

export default function MercadosPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [showFilters, setShowFilters] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const mercados = useMemo(() => [
        { id: 1, nome: 'OVER/UNDER', modalidade: 'EV', palavrasChave: 'Over, Under' },
        { id: 2, nome: 'EMPATE ANULA APOSTA', modalidade: 'EV', palavrasChave: 'Draw no bet' },
        { id: 3, nome: 'SET HANDICAP', modalidade: 'EV', palavrasChave: 'Set hcp' },
        { id: 4, nome: '1X2', modalidade: 'EV', palavrasChave: '1x2, draw' },
        { id: 5, nome: 'GAME HANDICAP', modalidade: 'EV', palavrasChave: 'Game hcp' },
        { id: 6, nome: 'MONEY LINE', modalidade: 'EV', palavrasChave: 'to win' },
        { id: 7, nome: 'HANDICAP ASIÁTICO', modalidade: 'EV', palavrasChave: 'Asian hcp' },
        { id: 8, nome: 'HANDICAP EUROPEU', modalidade: 'EV', palavrasChave: 'Euro hcp' },
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return mercados.map((m) => ({
            id: m.id,
            slug: 'mercados',
            actions: ['edit'],
            data: [
                <span className="font-semibold text-black" key="nome">{m.nome}</span>,
                <span className="text-gray-700" key="modalidade">{m.modalidade}</span>,
                <span className="text-gray-600 text-sm" key="palavras">{m.palavrasChave}</span>
            ]
        }))
    }, [mercados])

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
                    Selecione {selectedIds.length} - Mercado para modificar
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
                totalSelecionados={`${selectedIds.length} de ${mercados.length} selecionados`}
                actions={[
                    { label: '--------', value: '' },
                    { label: 'Excluir', value: 'excluir' }
                ]}
                hideSearchInput={true}
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
                        headers={['NOME', 'MODALIDADE', 'PALAVRAS CHAVE SEPARADAS POR VÍRGULA']}
                        rows={rows}
                        selection={{
                            isSelected,
                            toggle,
                            toggleAll,
                            isAllSelected,
                        }}
                    />
                </main>

                {/* Filtros */}
                {showFilters && (
                    <aside className="w-full md:w-1/4 flex flex-col">
                        <SidebarFilters
                            onClose={() => setShowFilters(false)}
                            filters={[{ label: 'por Modalidade', options: ['Todos', 'Pré', 'Live', 'EV'] }]}
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
