'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function AdicionarSitePage() {
    const [showMenu, setShowMenu] = useState(true)
    const [dominio, setDominio] = useState('')
    const [exibicao, setExibicao] = useState('')

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral */}
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
                        {adminMenuSections.map((section, i) => (
                            <AdminMenuSection key={i} title={section.title} items={section.items} />
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

                <h1 className="text-2xl font-bold mb-4">Adicionar site</h1>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome do domínio:</label>
                        <Input
                            value={dominio}
                            onChange={(e) => setDominio(e.target.value)}
                            placeholder="ex: sinais.sempregreen.com.br"
                            className="w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Nome para exibição:</label>
                        <Input
                            value={exibicao}
                            onChange={(e) => setExibicao(e.target.value)}
                            placeholder="ex: SempreGreen Sinais"
                            className="w-full"
                        />
                    </div>

                    <div className="pt-4 border-t flex flex-wrap gap-2">
                        <Button variant="darkgreen">SALVAR</Button>
                        <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                        <Button variant="darkgreen">Salvar e continuar editando</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
