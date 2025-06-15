'use client'

import { useSelection } from '@/app/utils/useSelection'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import type { TableRow } from '@/components/ui/AdminTable'
import AdminTable from '@/components/ui/AdminTable'
import SidebarFilters from '@/components/ui/SidebarFilters'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'

export default function EsportesPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [showFilters, setShowFilters] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const esportes = useMemo(() => [
        { id: 1, nome: 'Bandy', modalidade: 'Pré' },
        { id: 2, nome: 'Snooker', modalidade: 'Pré' },
        { id: 3, nome: 'Futebol Americano', modalidade: 'Live' },
        { id: 4, nome: 'Baseball', modalidade: 'Pré' },
        { id: 5, nome: 'Tênis', modalidade: 'Pré' },
        { id: 6, nome: 'Sinuca', modalidade: 'Pré' },
        { id: 7, nome: 'Hóquei de grama', modalidade: 'Pré' },
        { id: 8, nome: 'DOTA 2', modalidade: 'Live' },
        { id: 9, nome: 'Cricket', modalidade: 'Pré' },
        { id: 10, nome: 'Vôlei de Praia', modalidade: 'Pré' }
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return esportes.map((e) => ({
            id: e.id,
            slug: 'esportes',
            actions: ['edit'],
            data: [
                <span className="font-medium" key="nome">{e.nome}</span>,
                <span className="text-gray-800" key="modalidade">{e.modalidade}</span>
            ],
        }))
    }, [esportes])

    const {
        selectedIds,
        isSelected,
        toggle,
        toggleAll,
        isAllSelected
    } = useSelection(rows)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione {selectedIds.length} - Esporte para modificar
                </h1>
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
                totalSelecionados={`${selectedIds.length} de ${esportes.length} selecionados`}
                actions={[
                    { label: '--------', value: '' },
                    { label: 'Excluir', value: 'excluir' },
                ]}
            />

            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
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

                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto">
                    <AdminTable
                        headers={['AÇÕES', 'NOME', 'MODALIDADE']}
                        rows={rows}
                        selection={{
                            isSelected,
                            toggle,
                            toggleAll,
                            isAllSelected
                        }}
                    />
                </main>

                {showFilters && (
                    <aside className="w-full md:w-1/4 flex flex-col">
                        <SidebarFilters
                            onClose={() => setShowFilters(false)}
                            filters={[{ label: 'por Modalidade', options: ['Todos', 'Pré', 'Live'] }]}
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
