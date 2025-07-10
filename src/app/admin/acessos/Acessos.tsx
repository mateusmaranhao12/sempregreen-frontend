"use client"

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
import api from '../../lib/api'

export default function AcessosPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [search, setSearch] = useState('')
    const [selectedAction, setSelectedAction] = useState('')
    const [cfValue, setCfValue] = useState('')
    const [feedback, setFeedback] = useState('')

    const acessos = useMemo(() => [
        {
            id: 1,
            email: 'lonnieabensonjonathanshawkins@gmail.com',
            senha: 'Q!w2bet987',
            fornecedor: 'surebet.com',
            proxy: '191.101.143.229:12324:14ac7e101b167:32f03e3a21',
            mensagem: 'Sincronizando...',
            status: 'erro'
        },
        {
            id: 2,
            email: 'hamadanshaikh59@gmail.com',
            senha: 'Q!w2bet987',
            fornecedor: 'betburguer.com',
            proxy: 'gw.dataimpulse.com:824:cd2b50bb3071f67e6d62__cr.br:45e249337775e314',
            mensagem: 'Sincronizando...',
            status: 'erro'
        }
    ], [])

    const rows: TableRow[] = useMemo(() => {
        return acessos.map((a) => ({
            id: a.id,
            slug: 'acessos',
            actions: ['edit'],
            data: [
                a.email,
                a.senha,
                a.fornecedor,
                a.proxy,
                a.mensagem,
                <span className="text-red-600 font-bold" key="status">✖</span>
            ]
        }))
    }, [acessos])

    const {
        selectedIds,
        isSelected,
        toggle,
        toggleAll,
        isAllSelected
    } = useSelection(rows)

    const handleSendCfClearance = async () => {
        if (!cfValue) return

        try {
            const res = await api.post('/cf_cookie', {
                cf_clearance: cfValue
            })

            if (res.status === 200) {
                setFeedback('cf_clearance atualizado com sucesso!')
                setCfValue('')
            } else {
                setFeedback('Erro ao atualizar.')
            }
        } catch (error) {
            console.error(error)
            setFeedback('Erro na requisição.')
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione 6 - Acesso para modificar
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
                totalSelecionados={`${selectedIds.length} de ${acessos.length} selecionados`}
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

                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto flex flex-col gap-4">

                    {/* Input cf_clearance */}
                    <div className="mb-6 bg-white rounded-lg shadow p-4 flex flex-col gap-2 max-w-xl">
                        <h2 className="font-bold text-sm">Atualizar cf_clearance manualmente</h2>
                        <Input
                            placeholder="Cole o novo valor do cf_clearance..."
                            value={cfValue}
                            onChange={(e) => setCfValue(e.target.value)}
                        />
                        <div className="flex gap-2 items-center">
                            <Button onClick={handleSendCfClearance}>Atualizar</Button>
                            <span className="text-xs">{feedback}</span>
                        </div>
                    </div>

                    {/* Tabela */}
                    <AdminTable
                        headers={['USUÁRIO', 'SENHA', 'FORNECEDOR', 'PROXY', 'MENSAGEM DO SISTEMA', 'SIGNALIZAÇÃO']}
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
