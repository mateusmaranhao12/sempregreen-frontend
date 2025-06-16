'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function AdicionarProxyPage() {
    const [showMenu, setShowMenu] = useState(true)
    const [uri, setUri] = useState('')

    const handleSalvar = () => {
        console.log('Salvar Proxy:', { uri })
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral esquerdo */}
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

                <h1 className="text-2xl font-bold mb-6">Adicionar 5 - Proxy</h1>

                <form className="space-y-6 max-w-2xl">
                    {/* Campo URI */}
                    <div>
                        <label className="block text-sm font-medium mb-1">URI:</label>
                        <Input
                            placeholder="Digite a URI do proxy"
                            className="w-full"
                            value={uri}
                            onChange={(e) => setUri(e.target.value)}
                        />
                    </div>

                    {/* Botões de ação */}
                    <div className="pt-6 flex flex-wrap gap-2">
                        <Button variant="darkgreen" type="button" onClick={handleSalvar}>
                            Salvar
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
