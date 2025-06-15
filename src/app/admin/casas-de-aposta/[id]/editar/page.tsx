'use client'

import { use } from 'react'
import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
    params: Promise<{ id: string }>
}

export default function EditarCasaDeApostaPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    const [nome, setNome] = useState('1PRA1 Bet')
    const [icone, setIcone] = useState('1PRA1_eab2nwV.PNG')
    const [modalidade, setModalidade] = useState('Pré')
    const [casaEspelho, setCasaEspelho] = useState('OnaBet - Pré')
    const [substituirDe, setSubstituirDe] = useState('https://ona.bet.br/')
    const [substituirPara, setSubstituirPara] = useState('https://1pra1.bet.br/')
    const [comissao, setComissao] = useState('0E-8')
    const [url, setUrl] = useState('https://1pra1.bet.br/')

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

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Modificar {id} - Casa de aposta</h1>
                    <Link href={`/admin/casas-de-aposta/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-3xl">
                    <div className="bg-white rounded p-4 shadow">
                        <div>
                            <label className="text-sm font-medium block mb-1">Nome:</label>
                            <Input value={nome} onChange={(e) => setNome(e.target.value)} className="w-full" />
                            <p className="text-xs text-gray-600 mt-1">Digite o nome da casa de aposta</p>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">Ícone:</label>
                            <div className="text-sm mb-1">Atualmente: <span className="font-medium">{icone}</span></div>
                            <label className="inline-block bg-gray-200 px-3 py-1 rounded cursor-pointer text-sm hover:bg-gray-300">
                                Modificar:
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]
                                        if (file) setIcone(file.name)
                                    }}
                                    className="hidden"
                                />
                            </label>
                            <span className="ml-2 text-xs text-gray-600">Nenhum arquivo escolhido</span>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">Modality:</label>
                            <Select value={modalidade} onChange={(e) => setModalidade(e.target.value)} className="w-full">
                                <option value="Pré">Pré</option>
                                <option value="Live">Live</option>
                            </Select>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">Casa Espelho:</label>
                            <Select value={casaEspelho} onChange={(e) => setCasaEspelho(e.target.value)} className="w-full">
                                <option value="OnaBet - Pré">OnaBet - Pré</option>
                                <option value="Bet 7k (live) - Live">Bet 7k (live) - Live</option>
                            </Select>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">Substituir de:</label>
                            <Input value={substituirDe} onChange={(e) => setSubstituirDe(e.target.value)} className="w-full" />
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">Substituir para:</label>
                            <Input value={substituirPara} onChange={(e) => setSubstituirPara(e.target.value)} className="w-full" />
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">Comissão:</label>
                            <Input value={comissao} onChange={(e) => setComissao(e.target.value)} className="w-full" />
                        </div>

                        <div className="mt-4">
                            <label className="text-sm font-medium block mb-1">URL:</label>
                            <div className="text-sm mb-1">Atualmente: <span className="font-medium">{url}</span></div>
                            <Input value={url} onChange={(e) => setUrl(e.target.value)} className="w-full" />
                        </div>

                        <div className="pt-6 flex flex-wrap gap-2">
                            <Button variant="darkgreen">Salvar</Button>
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
