'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '../../dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function AdicionarMercadoPage() {
    const [showMenu, setShowMenu] = useState(true)

    const [nome, setNome] = useState('')
    const [modalidade, setModalidade] = useState('')
    const [palavrasChave, setPalavrasChave] = useState('')

    const handleSalvar = () => {
        const payload = { nome, modalidade, palavrasChave }
        console.log('Salvar:', payload)
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

                <h1 className="text-2xl font-bold mb-6">Adicionar 4 - Mercado</h1>

                <form className="space-y-6 max-w-2xl">
                    {/* Nome */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome:</label>
                        <Input
                            placeholder="Digite o nome do mercado"
                            className="w-full"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    {/* Modalidade */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Modalidade:</label>
                        <Select
                            className="w-full"
                            value={modalidade}
                            onChange={(e) => setModalidade(e.target.value)}
                        >
                            <option value="">--------</option>
                            <option value="Pré">Pré</option>
                            <option value="Live">Live</option>
                            <option value="EV">EV</option>
                        </Select>
                    </div>

                    {/* Palavras chave */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Palavras chave separadas por vírgula:</label>
                        <Input
                            placeholder="Ex: Over, Under"
                            className="w-full"
                            value={palavrasChave}
                            onChange={(e) => setPalavrasChave(e.target.value)}
                        />
                    </div>

                    {/* Botões */}
                    <div className="pt-4 flex flex-wrap gap-2">
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
