"use client"

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { useSelection } from '@/app/utils/useSelection'
import AddActionButton from '@/components/buttons/AddActionButton'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import EditActionButton from '@/components/buttons/EditActionButton'
import Input from '@/components/inputs/InputText'
import ModalAddEsporte from '@/components/modals/ModalAddEsporte'
import ModalEditEsporte from '@/components/modals/ModalEditEsporte'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import AdminTable, { TableRow } from '@/components/ui/AdminTable'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'

type Esporte = {
  id: number
  nome: string
  modalidade: string
}

interface SubEsporte {
    id: number
    nome: string
    representado: string
    fornecedor: string
}

const subEsportes: SubEsporte[] = [
    { id: 1, nome: 'Basketball', representado: 'Basquete - Live', fornecedor: 'betburguer.com' },
    { id: 2, nome: 'Beisebal', representado: 'Baseball - Pré', fornecedor: 'surebet.com' },
    { id: 3, nome: 'Badminton', representado: 'Badminton - Live', fornecedor: 'betburguer.com' },
    { id: 4, nome: 'Crquete', representado: 'Cricket - Pré', fornecedor: 'surebet.com' },
    { id: 5, nome: 'AFL', representado: 'AFL - Live', fornecedor: 'betburguer.com' },
    { id: 6, nome: 'Counter-Strike', representado: 'Counter-Strike - Live', fornecedor: 'betburguer.com' },
    { id: 7, nome: 'Call of Duty', representado: '--------', fornecedor: 'surebet.com' },
    { id: 8, nome: 'Futebol de praia', representado: 'Futebol de Areia - Pré', fornecedor: 'surebet.com' },
    { id: 9, nome: 'Futsal', representado: 'Futsal - Live', fornecedor: 'betburguer.com' },
    { id: 10, nome: 'Overwatch', representado: '--------', fornecedor: 'surebet.com' },
    { id: 11, nome: 'Soccer', representado: 'Futebol - Live', fornecedor: 'betburguer.com' },
]

export default function SubEsportesPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')
    const [showAddModal, setShowAddModal] = useState(false)
    const [modalEditData, setModalEditData] = useState<Esporte | null>(null)

    const rows: TableRow[] = subEsportes.map((s) => ({
        id: s.id,
        slug: 'sub-esportes',
        actions: ['edit'],
        data: [
            <span className="font-medium" key="nome">{s.nome}</span>,
            <span className="min-w-[180px] block font-medium text-sm text-gray-700">
                {s.representado || '--------'}
            </span>,
            <span key="fornecedor">{s.fornecedor}</span>,
            <div key="actions" className="flex gap-1 items-center">
                <AddActionButton onClick={() => setShowAddModal(true)} />
                <EditActionButton
                    onClick={() => setModalEditData({
                        id: s.id,
                        nome: s.nome,
                        modalidade: s.representado.includes('Pré') ? 'Pré' : 'Live'
                    })}
                />
            </div>,
        ]
    }))

    const { selectedIds, isSelected, toggle, toggleAll, isAllSelected } = useSelection(rows)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">Selecione 4 - Sub esporte para modificar</h1>
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
                totalSelecionados={`${selectedIds.length} de ${rows.length} selecionados`}
                actions={[{ label: '--------', value: '' }]}
                hideSearchInput={true}
            />

            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {showMenu && (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded w-25" variant="gray">
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
                        <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded hidden md:block" variant="gray">
                            Exibir menu
                        </Button>
                    </div>
                )}

                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto">
                    <AdminTable
                        headers={['NOME', 'ESPORTE QUE REPRESENTA O SUB ESPORTE', 'FORNECEDOR', 'AÇÕES']}
                        rows={rows}
                        selection={{ isSelected, toggle, toggleAll, isAllSelected }}
                    />
                </main>
            </div>

            {showAddModal && (
                <ModalAddEsporte
                    onClose={() => setShowAddModal(false)}
                    onSave={(newSub) => {
                        console.log('Novo Sub esporte:', newSub)
                        setShowAddModal(false)
                    }}
                />
            )}

            {modalEditData && (
                <ModalEditEsporte
                    initialData={modalEditData}
                    onClose={() => setModalEditData(null)}
                    onSave={(data) => {
                        console.log('Atualizado:', data)
                        setModalEditData(null)
                    }}
                />
            )}

        </div>
    )
}
