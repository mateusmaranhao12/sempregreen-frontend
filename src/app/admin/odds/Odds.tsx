'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import { useSelection } from '@/app/utils/useSelection'
import Button from '@/components/buttons/Button'
import AdminSearchInput from '@/components/ui/AdminSearchInput'
import AdminTable from '@/components/ui/AdminTable'
import { adminMenuSections } from '@/config/adminMenuConfig'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'

export default function OddsPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')

    const odds = useMemo(() => [
        {
            id: 1,
            event: 'Coastal Carolina Chanticleers ⇄ Oregon State Beavers',
            vendor: 'betburguer.com',
            subhouse: 'Bet365',
            subsport: 'Baseball',
            time: '15/06/2025 21:11:19',
        },
        {
            id: 2,
            event: 'Artem Lyapshin - Joaquin Bianchi',
            vendor: 'betburguer.com',
            subhouse: 'Novibet',
            subsport: 'Tennis',
            time: '15/06/2025 21:11:19',
        },
        {
            id: 3,
            event: 'Club Nacional de Football (W) - Juan Ferreira (W)',
            vendor: 'betburguer.com',
            subhouse: 'Bwin',
            subsport: 'Volleyball',
            time: '15/06/2025 21:11:18',
        },
        {
            id: 4,
            event: 'Asociacion Deportivo Cali (W) vs Internacional FC de Palmira (W)',
            vendor: 'tradematesports.com',
            subhouse: 'Unibet',
            subsport: 'BASQUETE SU',
            time: '16/06/2025 21:11:16',
        }
    ], [])

    const rows = odds.map((item) => ({
        id: item.id,
        slug: 'odds',
        actions: ['view'] as ('view')[],
        data: [item.event, item.vendor, item.subhouse, item.subsport, item.time],
    }))

    const {
        selectedIds
    } = useSelection(rows)

    return (
        <div className="flex flex-col gap-4">
            {/* Topo */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione {selectedIds.length} - Odd para visualizar
                </h1>
                <Link href="/admin/dashboard">
                    <Button variant="gray">Voltar ao dashboard</Button>
                </Link>
            </div>

            {/* Pesquisa */}
            <AdminSearchInput
                value={search}
                onChange={setSearch}
                onSubmit={() => console.log('Pesquisar por:', search)}
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
                            <input
                                className="w-full border rounded px-2 py-1 text-sm"
                                placeholder="Comece a digitar para filtrar..."
                            />
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
                        headers={['EVENT NAME', 'VENDOR', 'SUB HOUSE', 'SUB SPORT', 'TIME']}
                        rows={rows}
                    />
                </main>
            </div>
        </div>
    )
}
