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

export default function ProxiesPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const proxies = useMemo(() => [
        {
            id: 1,
            uri: 'resi.rainproxy.io:1080:yu6ym0...-47495801:Y1Up374yLsvqKm9'
        },
        {
            id: 2,
            uri: '191.101.143.229:12324:14ac7e01b1...32f03e3a21'
        },
        {
            id: 3,
            uri: 'gw.dataimpulse.com:10000:cd2b50b...45e249337775e314'
        },
        {
            id: 4,
            uri: 'resi.rainproxy.io:1080:yu6ym0...portoseguro:Y1Up374yLsvqKm9'
        },
        {
            id: 5,
            uri: 'gw.dataimpulse.com:824:cd2b50b...45e249337775e314'
        },
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return proxies.map((p) => ({
            id: p.id,
            slug: 'proxies',
            actions: ['edit'],
            data: [
                <span key={p.id} className="text-sm text-blue-900 font-medium">
                    {p.uri}
                </span>
            ]
        }))
    }, [proxies])

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
                    Selecione {selectedIds.length} - Proxy para modificar
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
                onSubmit={() => console.log('Ação:', selectedAction)}
                totalSelecionados={`${selectedIds.length} de ${proxies.length} selecionados`}
                actions={[{ label: '--------', value: '' }]}
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
                        headers={['URI']}
                        rows={rows}
                        selection={{
                            isSelected,
                            toggle,
                            toggleAll,
                            isAllSelected
                        }}
                    />
                </main>
            </div>
        </div>
    )
}
