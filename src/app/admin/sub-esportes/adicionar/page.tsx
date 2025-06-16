'use client'

import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import Input from '@/components/inputs/InputText'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'

export default function AdicionarSubEsportePage() {
    const [showMenu, setShowMenu] = useState(true)
    const [nome, setNome] = useState('')
    const [esporteRepresentado, setEsporteRepresentado] = useState('')
    const [fornecedor, setFornecedor] = useState('')

    const handleSalvar = () => {
        const payload = { nome, esporteRepresentado, fornecedor }
        console.log('Salvar Sub Esporte:', payload)
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral esquerdo */}
            {showMenu && (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button
                        onClick={() => setShowMenu(false)}
                        className="text-xs px-2 py-1 rounded self-end"
                        variant="gray"
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
                        variant="gray"
                    >
                        Exibir menu
                    </Button>
                </div>
            )}

            {/* Conteúdo principal */}
            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5">
                        <FaChevronLeft />
                    </Button>
                </Link>

                <h1 className="text-2xl font-bold mb-6">Adicionar 4 - Sub esporte</h1>

                <form className="space-y-6 max-w-2xl">
                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome:</label>
                        <Input
                            placeholder="Digite o nome do sub esporte"
                            className="w-full"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    {/* Esporte que representa */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Esporte que representa o sub esporte:
                        </label>
                        <div className="flex gap-2 items-center">
                            <Select
                                className="w-full"
                                value={esporteRepresentado}
                                onChange={(e) => setEsporteRepresentado(e.target.value)}
                            >
                                <option value="">--------</option>
                                <option value="Basquete - Live">Basquete - Live</option>
                                <option value="Baseball - Pré">Baseball - Pré</option>
                                <option value="Badminton - Live">Badminton - Live</option>
                                <option value="Cricket - Pré">Cricket - Pré</option>
                                <option value="AFL - Live">AFL - Live</option>
                                <option value="Counter-Strike - Live">Counter-Strike - Live</option>
                                <option value="Futebol de Areia - Pré">Futebol de Areia - Pré</option>
                                <option value="Futsal - Live">Futsal - Live</option>
                                <option value="Futebol - Live">Futebol - Live</option>
                            </Select>
                        </div>
                    </div>

                    {/* Fornecedor */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Fornecedor:</label>
                        <Select
                            className="w-full"
                            value={fornecedor}
                            onChange={(e) => setFornecedor(e.target.value)}
                        >
                            <option value="">--------</option>
                            <option value="betburguer.com">betburguer.com</option>
                            <option value="surebet.com">surebet.com</option>
                        </Select>
                    </div>

                    {/* Botões de ação */}
                    <div className="pt-6 flex flex-wrap gap-2">
                        <Button variant="darkgreen" type="button" onClick={handleSalvar}>
                            SALVAR
                        </Button>
                        <Button variant="darkgreen" type="button">
                            Salvar e adicionar outro(a)
                        </Button>
                        <Button variant="darkgreen" type="button">
                            Salvar e continuar editando
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
