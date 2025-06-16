'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import Button from '@/components/buttons/Button'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import AdminTable, { type TableRow } from '@/components/ui/AdminTable'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { useSelection } from '@/app/utils/useSelection'

export default function SitePage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const site = useMemo(() => [
        { id: 1, dominio: '3mtrader.tech', nome: '3MTrader' },
        { id: 2, dominio: 'aguiatrader.com.br', nome: 'Águia Trader' },
        { id: 3, dominio: 'appasd.nasdinja.com.br', nome: 'ninjabots.com.br' },
        { id: 4, dominio: 'app.elarbitrador.com', nome: 'elarbitrador.com' },
        { id: 5, dominio: 'arbamaker.live', nome: 'ArbMaker' },
        { id: 6, dominio: 'cacadordegreen.com', nome: 'Caçador de Green' },
        { id: 7, dominio: 'i7green$6.com', nome: 'i7green$6.com' },
        { id: 8, dominio: 'investbetting.com.br', nome: 'Invest Betting' },
        { id: 9, dominio: 'lltrader.cooom', nome: 'LLTrader' },
        { id: 10, dominio: 'localhostt', nome: 'localhost' },
        { id: 11, dominio: 'lucr2ocerto-bw.com', nome: 'LucroCerto' },
        { id: 12, dominio: 'oddsmatematicas.live', nome: 'Odds Matematicas' },
        { id: 13, dominio: 'pandabe5ts.app.br', nome: 'PandaBets' },
        { id: 14, dominio: 'sinais.dletonabets.com', nome: 'DetonaBets' },
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return site.map(site => ({
            id: site.id,
            slug: 'site',
            actions: ['edit'],
            data: [site.dominio, site.nome]
        }))
    }, [site])

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
                    Selecione {selectedIds.length} - Site para modificar
                </h1>
                <div className="flex gap-2">
                    <Link href="/admin/dashboard">
                        <Button variant="gray">Voltar ao dashboard</Button>
                    </Link>
                    <AdminAddButton />
                </div>
            </div>

            {/* Controles */}
            <AdminSearchControls
                search={search}
                onSearchChange={setSearch}
                selectedOption={selectedAction}
                onOptionChange={setSelectedAction}
                onSubmit={() => console.log('Executar ação:', selectedAction)}
                totalSelecionados={`${selectedIds.length} de ${site.length} selecionados`}
                actions={[
                    { label: '--------', value: '' },
                    { label: 'Excluir', value: 'excluir' },
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

                {/* Tabela */}
                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto">
                    <AdminTable
                        headers={['NOME DO DOMÍNIO', 'NOME PARA EXIBIÇÃO']}
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
