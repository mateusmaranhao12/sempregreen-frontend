'use client'

import { useSelection } from '@/app/utils/useSelection'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import type { TableRow } from '@/components/ui/AdminTable'
import AdminTable from '@/components/ui/AdminTable'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'

export default function PeriodosPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const periodos = useMemo(() => [
        { id: 1, nome: 'SEMANAL', dias: 7, plano: 'GREEN', preco: 234.00, site: 'sinais.sempregreen.com.br' },
        { id: 2, nome: 'MENSAL', dias: 30, plano: 'PRÉ JOGO', preco: 127.00, site: 'sinais.sempregreen.com.br' },
        { id: 3, nome: 'ANUAL', dias: 365, plano: 'PRÉ JOGO', preco: 897.00, site: 'sinais.sempregreen.com.br' },
        { id: 4, nome: 'FULL', dias: 365, plano: 'ADMINISTRATIVO', preco: 0.00, site: 'sinais.sempregreen.com.br' },
        { id: 5, nome: 'TRIMESTRAL', dias: 90, plano: 'PRÉ JOGO', preco: 347.00, site: 'sinais.sempregreen.com.br' },
        { id: 6, nome: 'FULL', dias: 30, plano: 'GREEN', preco: 0.00, site: 'sinais.sempregreen.com.br' },
        { id: 7, nome: 'COMBO', dias: 30, plano: 'VALUEBET + PRÉ', preco: 0.00, site: 'sinais.sempregreen.com.br' },
        { id: 8, nome: 'SEMANAL', dias: 7, plano: 'PRÉ + LIVE', preco: 187.00, site: 'sinais.sempregreen.com.br' },
        { id: 9, nome: 'DIÁRIO', dias: 1, plano: 'PRÉ JOGO', preco: 19.00, site: 'sinais.sempregreen.com.br' },
        { id: 10, nome: 'MENSAL', dias: 30, plano: 'VALUEBET', preco: 397.00, site: 'sinais.sempregreen.com.br' }
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return periodos.map((p) => ({
            id: p.id,
            slug: 'periodos',
            actions: ['edit'],
            data: [p.nome, p.dias.toString(), p.plano, p.preco.toFixed(2), p.site],
        }))
    }, [periodos])

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
                    Selecione {selectedIds.length} - Período(s) para modificar
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
                totalSelecionados={`${selectedIds.length} de ${periodos.length} selecionados`}
                actions={[
                    { label: '--------', value: '' },
                    { label: 'Excluir', value: 'excluir' },
                    { label: 'Ativar', value: 'ativar' }
                ]}
                hideSearchInput={true}
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
                        headers={["NOME", "DIAS", "PLANO", "PREÇO", "SITE"]}
                        rows={rows}
                        selection={{
                            isSelected,
                            toggle,
                            toggleAll,
                            isAllSelected,
                        }}
                    />
                </main>
            </div>
        </div>
    )
}
