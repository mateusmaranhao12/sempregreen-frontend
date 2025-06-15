'use client'

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import Button from '@/components/buttons/Button'
import EditSaveButton from '@/components/buttons/EditSaveButton'
import Select from '@/components/inputs/InputSelect'
import Input from '@/components/inputs/InputText'
import AdminSearchControls from '@/components/ui/AdminSearchControls'
import SidebarFilters from '@/components/ui/SidebarFilters'
import AdminTable, { TableRow } from '@/components/ui/AdminTable'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { useSelection } from '@/app/utils/useSelection'
import Link from 'next/link'
import { useState } from 'react'
import AdminAddButton from '@/components/buttons/AdminAddButton'

interface CasaDeAposta {
    id: number
    nome: string
    icone: string
    modalidade: string
    casaEspelho: string
    substituirDe: string
    substituirPara: string
}

const initialData: CasaDeAposta[] = [
    {
        id: 1,
        nome: '1PRA1 Bet',
        icone: '1PRA1_eab2nwV.PNG',
        modalidade: 'Pré',
        casaEspelho: 'OnaBet - Pré',
        substituirDe: 'https://ona.bet.br/',
        substituirPara: 'https://1pra1.bet.br/',
    },
    {
        id: 2,
        nome: '4Play (live)',
        icone: '4PLAY_jf8q630.png',
        modalidade: 'Live',
        casaEspelho: 'Bet 7k (live) - Live',
        substituirDe: 'https://7k.bet.br/en/',
        substituirPara: 'https://4play.bet.br/',
    },
]

export default function CasasDeApostaPage() {
    const [dados, setDados] = useState(initialData)
    const [editandoId, setEditandoId] = useState<number | null>(null)
    const [showMenu, setShowMenu] = useState(true)
    const [showFilters, setShowFilters] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')

    const {
        selectedIds,
        toggle,
        toggleAll,
        isSelected,
        isAllSelected
    } = useSelection(dados)

    const toggleEdit = (id: number) => {
        setEditandoId(prev => (prev === id ? null : id))
    }

    const atualizarCampo = (id: number, campo: keyof CasaDeAposta, valor: string) => {
        setDados(prev => prev.map(casa => casa.id === id ? { ...casa, [campo]: valor } : casa))
    }

    const rows: TableRow[] = dados.map((casa) => ({
        id: casa.id,
        slug: 'casas-de-aposta',
        actions: ['edit'],
        isEditing: editandoId === casa.id,
        onEditToggle: () => toggleEdit(casa.id),
        data: [
            <span key="nome" className="font-semibold">{casa.nome}</span>,
            <div key="icone" className="text-sm">
                <div>Atualmente: <span className="font-medium">{casa.icone}</span></div>
            </div>,
            casa.modalidade,
            casa.casaEspelho,
            casa.substituirDe,
            casa.substituirPara,
            <EditSaveButton key="botao" isEditing={editandoId === casa.id} onClick={() => toggleEdit(casa.id)} />
        ],
        editableFields: [
           <span key="nome" className="font-semibold">{casa.nome}</span>,
            <div key="icone" className="text-sm">
                <label className="inline-block bg-gray-200 px-3 py-1 rounded cursor-pointer text-sm hover:bg-gray-300">
                    Escolher arquivo
                    <input
                        type="file"
                        onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) atualizarCampo(casa.id, 'icone', file.name)
                        }}
                        className="hidden"
                    />
                </label>
                <span className="ml-2 text-xs text-gray-600">{casa.icone}</span>
            </div>,
            <Select key="casa_espelho"
                value={casa.casaEspelho || ''} className="min-w-[120px]"
                onChange={(e) => atualizarCampo(casa.id, 'casaEspelho', e.target.value)}
            >
                <option value="">Selecione...</option>
                <option value="OnaBet - Pré">OnaBet - Pré</option>
                <option value="Bet 7k (live) - Live">Bet 7k (live) - Live</option>
            </Select>
            ,
            <Select key="espelho" value={casa.casaEspelho} onChange={(e) => atualizarCampo(casa.id, 'casaEspelho', e.target.value)}>
                <option>OnaBet - Pré</option>
                <option>Bet 7k (live) - Live</option>
                <option>--------</option>
            </Select>,
            <Input key="subDe" value={casa.substituirDe} onChange={(e) => atualizarCampo(casa.id, 'substituirDe', e.target.value)} />,
            <Input key="subPara" value={casa.substituirPara} onChange={(e) => atualizarCampo(casa.id, 'substituirPara', e.target.value)} />,
            <EditSaveButton key="botaoEdit" isEditing={editandoId === casa.id} onClick={() => toggleEdit(casa.id)} />
        ]
    }))

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione {selectedIds.length} - Casa de aposta para modificar
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
                        headers={['Ações', 'Nome', 'Ícone', 'Modality', 'Casa Espelho', 'Substituir De', 'Substituir Para']}
                        rows={rows}
                        selection={{ isSelected, toggle, toggleAll, isAllSelected }}
                    />
                </main>

                {showFilters && (
                    <aside className="w-full md:w-1/4 flex flex-col">
                        <SidebarFilters
                            onClose={() => setShowFilters(false)}
                            filters={[
                                { label: 'por modality', options: ['Todos', 'Pré', 'Live'] },
                            ]}
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
        </div>
    )
}
