'use client'

import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

export default function AdicionarPeriodoPage() {
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
                <h1 className="text-xl font-semibold mb-4">Adicionar 1 - Período</h1>

                <form className="space-y-6 max-w-xl">
                    <div>
                        <label className="block mb-1 font-semibold">Nome:</label>
                        <Input />
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Dias:</label>
                        <Input type="number" defaultValue="0" />
                        <p className="text-xs text-gray-500">Quantidade de dias da duração</p>
                    </div>
                    <div>
                        <label className="block mb-1 font-semibold">Plano:</label>
                        <Select defaultValue="">
                            <option value="">--------</option>
                            <option value="GREEN">GREEN</option>
                            <option value="PRÉ JOGO">PRÉ JOGO</option>
                        </Select>
                    </div>
                    <label className="block mb-1 font-semibold">Monetizze Checkout Link:</label>
                    <Input />
                    <label className="block mb-1 font-semibold">Kirvano Checkout Link</label>
                    <Input />
                    <label className="block mb-1 font-semibold">Preço</label>
                    <Input />
                    <label className="block mb-1 font-semibold">Chave Stripe do Produto</label>
                    <Input />

                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                        <Button variant="darkgreen">SALVAR</Button>
                        <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                        <Button variant="darkgreen">Salvar e continuar editando</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
