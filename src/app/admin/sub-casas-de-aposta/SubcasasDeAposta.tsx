'use client'

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { useSelection } from '@/app/utils/useSelection'
import AddActionButton from '@/components/buttons/AddActionButton'
import AdminAddButton from '@/components/buttons/AdminAddButton'
import Button from '@/components/buttons/Button'
import EditActionButton from '@/components/buttons/EditActionButton'
import Input from '@/components/inputs/InputText'
import ModalAddCasaDeAposta from '@/components/modals/ModalAddCasaDeAposta'
import ModalEditCasaDeAposta from '@/components/modals/ModalEditCasaDeAposta'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import AdminTable, { TableRow } from '@/components/ui/AdminTable'
import SidebarFilters from '@/components/ui/SidebarFilters'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'

interface SubCasaDeAposta {
    id: number
    nome: string
    casaRepresentada: string
    fornecedor: string
    icone?: File | null
    modality?: string
    casaEspelho?: string
    substituirDe?: string
    substituirPara?: string
    comissao?: string
    url?: string
}

const initialData: SubCasaDeAposta[] = [
    { id: 1, nome: 'DafabetOW', casaRepresentada: '', fornecedor: 'betburguer.com' },
    { id: 2, nome: 'Winamax', casaRepresentada: '', fornecedor: 'betburguer.com' },
    { id: 3, nome: 'Betfair SB', casaRepresentada: 'Betfair SB - Pré', fornecedor: 'surebet.com' },
    { id: 4, nome: 'Pixbet', casaRepresentada: '', fornecedor: 'betburguer.com' },
    { id: 5, nome: '1xbet', casaRepresentada: '', fornecedor: 'betburguer.com' },
    { id: 6, nome: 'MrJack', casaRepresentada: '', fornecedor: 'surebet.com' },
    { id: 7, nome: 'Superbet.ro', casaRepresentada: 'Superbet (EV) - EV', fornecedor: 'tradematesports.com' },
    { id: 8, nome: 'B1Bet (BR)', casaRepresentada: '', fornecedor: 'surebet.com' },
    { id: 9, nome: 'Luckia', casaRepresentada: '', fornecedor: 'betburguer.com' },
    { id: 10, nome: 'Eurobet', casaRepresentada: '', fornecedor: 'betburguer.com' }
]

export default function SubCasasDeApostaPage() {
    const [dados, setDados] = useState(initialData)
    const [showMenu, setShowMenu] = useState(true)
    const [showFilters, setShowFilters] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')
    const { selectedIds, toggle, toggleAll, isSelected, isAllSelected } = useSelection(dados)
    const [showAddModal, setShowAddModal] = useState(false)
    const [modalEditData, setModalEditData] = useState<SubCasaDeAposta | null>(null)

    const rows: TableRow[] = dados.map((item) => ({
        id: item.id,
        slug: 'sub-casas-de-aposta',
        actions: ['edit'],
        isEditing: false,
        onEditToggle: () => setModalEditData(item),
        data: [
            <span key="nome" className="font-semibold">{item.nome}</span>,
            item.casaRepresentada || '--------',
            item.fornecedor,
            <div key="actions" className="flex gap-1 items-center">
                <AddActionButton onClick={() => setShowAddModal(true)} />
                <EditActionButton onClick={() => setModalEditData({
                    ...item,
                    icone: null,
                    modality: '',
                    casaEspelho: '',
                    substituirDe: '',
                    substituirPara: '',
                    comissao: '0',
                    url: ''
                })} />
            </div>
        ],
        editableFields: []
    }))

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione {selectedIds.length} - Sub casa de aposta para modificar
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
                totalSelecionados={`${selectedIds.length} de ${dados.length} selecionados`}
                actions={[
                    { label: '--------', value: '' },
                    { label: 'Excluir', value: 'excluir' },
                    { label: 'Ativar', value: 'ativar' },
                ]}
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
                        headers={['Ações', 'Nome', 'Casa Representada', 'Fornecedor']}
                        rows={rows}
                        selection={{ isSelected, toggle, toggleAll, isAllSelected }}
                    />
                </main>

                {showFilters && (
                    <aside className="w-full md:w-1/4 flex flex-col">
                        <SidebarFilters
                            onClose={() => setShowFilters(false)}
                            filters={[{ label: 'por Fornecedor', options: ['Todos', 'betburguer.com', 'surebet.com', 'tradematesports.com'] }]}
                        />
                    </aside>
                )}

                {!showFilters && (
                    <div className="flex flex-col w-28">
                        <Button onClick={() => setShowFilters(true)} className="text-xs px-2 py-1 rounded" variant="gray">
                            Exibir filtros
                        </Button>
                    </div>
                )}
            </div>

            {showAddModal && (
                <ModalAddCasaDeAposta onClose={() => setShowAddModal(false)} onSave={(data) => console.log('Salvar novo:', data)} />
            )}

            {modalEditData && (
                <ModalEditCasaDeAposta
                    onClose={() => setModalEditData(null)}
                    onSave={(data) => {
                        setDados(prev => prev.map(item => item.id === data.id ? data : item))
                        setModalEditData(null)
                    }}
                    initialData={modalEditData}
                />
            )}
        </div>
    )
}