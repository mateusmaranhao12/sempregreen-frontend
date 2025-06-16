'use client'

import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

export default function AdicionarAssinaturaPage() {
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu && (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button
                        onClick={() => setShowMenu(false)}
                        className="text-xs px-2 py-1 rounded w-25"
                        variant="gray"
                    >
                        Ocultar menu
                    </Button>

                    <div className="bg-white z-10 pb-2 mt-6">
                        <Input className="w-full" placeholder="Comece a digitar para filtrar..." />
                    </div>

                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            )}

            {!showMenu && (
                <div className="md:w-28">
                    <Button
                        onClick={() => setShowMenu(true)}
                        className="text-xs px-2 py-1 rounded hidden md:block"
                        variant="gray"
                    >
                        Exibir menu
                    </Button>
                </div>
            )}
            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5">
                        <FaChevronLeft />
                    </Button>
                </Link>
                <h1 className="text-xl font-semibold mb-6">Adicionar 3 - Assinatura</h1>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="font-semibold">Usuário:</label>
                        <Select defaultValue="" />
                    </div>
                    <Select defaultValue=""> <option value="">Método de Pagamento</option></Select>
                    <Select defaultValue=""> <option value="">Gateway de pagamento</option></Select>
                    <Select defaultValue=""> <option value="">Período</option></Select>
                    <Input placeholder="Data de Pagamento" />
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Data/Hora de Expiração:</label>
                        <div className="flex gap-2">
                            <Input placeholder="Data" className="w-40" />
                            <Input placeholder="Hora" className="w-32" />
                        </div>
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