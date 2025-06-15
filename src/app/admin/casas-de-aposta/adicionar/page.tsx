'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function AdicionarCasaDeApostaPage() {
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral esquerdo */}
            {showMenu && (
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
            )}

            {!showMenu && (
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

            {/* Conteúdo principal */}
            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant='darkgreen' className='mb-5'>
                        <FaChevronLeft />
                    </Button>
                </Link>

                <h1 className="text-2xl font-bold mb-6">Adicionar 1 – Casa de aposta</h1>

                <form className="space-y-6 max-w-2xl">
                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome:</label>
                        <Input placeholder="Digite o nome da casa de aposta" className="w-full" />
                    </div>

                    {/* Ícone */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <label
                            htmlFor="icone"
                            className="bg-gray-200 hover:bg-gray-300 text-sm text-black font-semibold px-3 py-1 rounded cursor-pointer"
                        >
                            Escolher arquivo
                        </label>
                        <span className="text-xs text-gray-600 truncate">Nenhum arquivo escolhido</span>
                        <input
                            id="icone"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0]
                                console.log('Arquivo:', file?.name)
                            }}
                        />
                    </div>

                    {/* Modality */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Modality:</label>
                        <Select className="w-full">
                            <option value="">----------</option>
                            <option value="Pré">Pré</option>
                            <option value="Live">Live</option>
                        </Select>
                    </div>

                    {/* Casa Espelho */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Casa Espelho:</label>
                        <Select className="w-full">
                            <option value="">----------</option>
                            <option value="OnaBet - Pré">OnaBet - Pré</option>
                            <option value="Bet 7k (live) - Live">Bet 7k (live) - Live</option>
                        </Select>
                    </div>

                    {/* Substituir De */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Substituir de:</label>
                        <Input placeholder="https://exemplo-antigo.com" className="w-full" />
                    </div>

                    {/* Substituir Para */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Substituir para:</label>
                        <Input placeholder="https://exemplo-novo.com" className="w-full" />
                    </div>

                    {/* Comissão */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Comissão:</label>
                        <Input type="number" defaultValue={0} className="w-full" />
                    </div>

                    {/* URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">URL:</label>
                        <Input placeholder="https://..." className="w-full" />
                    </div>

                    {/* Botões de ação */}
                    <div className="pt-6 flex flex-wrap gap-2">
                        <Button variant="darkgreen">SALVAR</Button>
                        <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                        <Button variant="darkgreen">Salvar e continuar editando</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
