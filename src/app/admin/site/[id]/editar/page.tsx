'use client'

import { use } from 'react'
import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
    params: Promise<{ id: string }>
}

export default function EditarSitePage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    const [dominio, setDominio] = useState('3mtrader.tech')
    const [exibicao, setExibicao] = useState('3MTrader')

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Sidebar */}
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

                {/* Cabeçalho da página */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar site</h1>
                        <p className="text-sm font-bold text-black">{dominio}</p>
                    </div>

                    <Link href={`/admin/site/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">HISTÓRICO</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-4xl">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome do domínio:</label>
                        <Input
                            value={dominio}
                            onChange={(e) => setDominio(e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Nome para exibição:</label>
                        <Input
                            value={exibicao}
                            onChange={(e) => setExibicao(e.target.value)}
                            className="w-full"
                        />
                    </div>

                    <div className="pt-4 border-t flex flex-wrap gap-2">
                        <Button variant="darkgreen">SALVAR</Button>
                        <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                        <Button variant="darkgreen">Salvar e continuar editando</Button>
                        <Button variant="red">Apagar</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
