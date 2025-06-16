'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import type { TableRow } from '@/components/ui/AdminTable'
import AdminTable from '@/components/ui/AdminTable'
import { adminMenuSections } from '@/config/adminMenuConfig'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'
import { useSelection } from '@/app/utils/useSelection'

export default function GruposPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const grupos = useMemo(() => [
        { id: 1, nome: 'Admin' },
        { id: 2, nome: 'Office' },
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return grupos.map((grupo) => ({
            id: grupo.id,
            slug: 'grupos',
            actions: ['edit'],
            data: [grupo.nome],
        }))
    }, [grupos])

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
                    Selecione {selectedIds.length} - Grupo(s) para modificar
                </h1>
                <div className="flex gap-2">
                    <Link href="/admin/dashboard">
                        <Button variant="gray">Voltar ao dashboard</Button>
                    </Link>
                    <AdminAddButton/>
                </div>
            </div>

            <AdminSearchControls
                search={search}
                onSearchChange={setSearch}
                selectedOption={selectedAction}
                onOptionChange={setSelectedAction}
                onSubmit={() => console.log('Executar ação:', selectedAction)}
                totalSelecionados={`${selectedIds.length} de ${grupos.length} selecionados`}
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
                        headers={["GRUPO"]}
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