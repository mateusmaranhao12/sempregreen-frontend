'use client'

import { use } from 'react'
import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'
import Select from '@/components/inputs/InputSelect'

type Props = {
    params: Promise<{ id: string }>
}

export default function EditarSubCasaDeApostaPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    const [nome, setNome] = useState('DafabetOW')
    const [casaRepresentada, setCasaRepresentada] = useState('')
    const [fornecedor, setFornecedor] = useState('betburguer.com')

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu ? (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button
                        onClick={() => setShowMenu(false)}
                        className="text-xs px-2 py-1 rounded self-end"
                        variant='gray'
                    >
                        Ocultar menu
                    </Button>
                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection
                                key={index}
                                title={section.title}
                                items={section.items}
                            />
                        ))}
                    </div>
                </aside>
            ) : (
                <div className="md:w-28">
                    <Button
                        onClick={() => setShowMenu(true)}
                        className="text-xs px-2 py-1 rounded"
                        variant='gray'
                    >
                        Exibir menu
                    </Button>
                </div>
            )}

            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant='darkgreen' className='mb-5'>
                        <FaChevronLeft />
                    </Button>
                </Link>

                {/* Cabeçalho */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar {id} - Sub casa de aposta</h1>
                        <p className="text-sm font-bold text-black">{nome}</p>
                    </div>
                    <Link href={`/admin/usuarios/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-4xl">
                    <div className="bg-white rounded p-4 shadow">
                        <div className="mb-4">
                            <label className="text-sm font-medium block mb-1">Nome:</label>
                            <Input value={nome} onChange={(e) => setNome(e.target.value)} className="w-full" />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-medium block mb-1">Casa que representa a sub casa de aposta:</label>
                            <Select value={casaRepresentada} onChange={(e) => setCasaRepresentada(e.target.value)} className="w-full">
                                <option value="">--------</option>
                                <option value="Betfair SB - Pré">Betfair SB - Pré</option>
                                <option value="Superbet (EV) - EV">Superbet (EV) - EV</option>
                            </Select>
                        </div>

                        <div className="mb-4">
                            <label className="text-sm font-medium block mb-1">Fornecedor:</label>
                            <Select value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} className="w-full">
                                <option value="betburguer.com">betburguer.com</option>
                                <option value="surebet.com">surebet.com</option>
                                <option value="tradematesports.com">tradematesports.com</option>
                            </Select>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-2 bg-gray-50 px-4 py-3 rounded mt-6">
                            <Button variant="darkgreen">SALVAR</Button>
                            <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                            <Button variant="darkgreen">Salvar e continuar editando</Button>
                            <Button variant="red">Apagar</Button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}
