'use client'

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import Input from '@/components/inputs/InputText'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default function AdicionarSubCasaDeApostaPage() {
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

                <h1 className="text-2xl font-bold mb-6">Adicionar 2 – Sub casa de aposta</h1>

                <form className="space-y-6 max-w-2xl">
                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome:</label>
                        <Input placeholder="Digite o nome da sub casa" className="w-full" />
                    </div>

                    {/* Casa que representa a sub casa */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Casa que representa a sub casa de aposta:
                        </label>
                        <div className="flex gap-2 items-center">
                            <Select className="w-full">
                                <option value="">--------</option>
                                <option value="Betfair SB - Pré">Betfair SB - Pré</option>
                                <option value="Superbet (EV) - EV">Superbet (EV) - EV</option>
                            </Select>
                        </div>
                    </div>

                    {/* Fornecedor */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Fornecedor:</label>
                        <Select className="w-full">
                            <option value="">--------</option>
                            <option value="betburguer.com">betburguer.com</option>
                            <option value="surebet.com">surebet.com</option>
                            <option value="tradematesports.com">tradematesports.com</option>
                        </Select>
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
