'use client'

import { use } from 'react'
import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

type Props = {
    params: Promise<{ id: string }>
}

export default function EditarMercadoPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    const [nome, setNome] = useState('OVER/UNDER')
    const [modalidade, setModalidade] = useState('EV')
    const [palavrasChave, setPalavrasChave] = useState('Over, Under')

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral */}
            {showMenu ? (
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
                            <AdminMenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            ) : (
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

                <h1 className="text-xl font-semibold text-gray-700 mb-6">
                    Modificar 4 - Mercado
                </h1>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-bold text-black">{nome} - {modalidade}</p>
                    <Link href={`/admin/mercados/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-4 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-2xl bg-white rounded p-4 shadow">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome:</label>
                        <Input
                            className="w-full"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite o nome do mercado"
                        />
                        <p className="text-xs text-gray-600 mt-1">
                            Digite o nome do mercado
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Modalidade:</label>
                        <Select
                            className="w-full"
                            value={modalidade}
                            onChange={(e) => setModalidade(e.target.value)}
                        >
                            <option value="Pré">Pré</option>
                            <option value="Live">Live</option>
                            <option value="EV">EV</option>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Palavras chave separadas por vírgula:</label>
                        <Input
                            className="w-full"
                            value={palavrasChave}
                            onChange={(e) => setPalavrasChave(e.target.value)}
                        />
                    </div>

                    <div className="pt-6 flex flex-wrap gap-2">
                        <Button variant="darkgreen">Salvar</Button>
                        <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                        <Button variant="darkgreen">Salvar e continuar editando</Button>
                        <Button variant="red">Apagar</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
