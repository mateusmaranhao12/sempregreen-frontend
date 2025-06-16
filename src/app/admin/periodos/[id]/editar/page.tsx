'use client'

import { use } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

interface Props {
    params: Promise<{ id: string }>
}

export default function EditarPeriodoPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu ? (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded self-end" variant="gray">Ocultar menu</Button>
                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, i) => (
                            <AdminMenuSection key={i} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            ) : (
                <div className="md:w-28">
                    <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant="gray">Exibir menu</Button>
                </div>
            )}

            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5">
                        <FaChevronLeft />
                    </Button>
                </Link>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar 1 - Período</h1>
                        <p className="text-sm font-bold text-black">GREEN - SEMANAL</p>
                    </div>
                    <Link href={`/admin/periodos/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block font-semibold mb-1">Nome:</label>
                        <Input defaultValue="SEMANAL" className="w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Dias:</label>
                        <Input type="number" defaultValue="7" className="w-32" />
                        <p className="text-xs text-gray-500 mt-1">Quantidade de dias da duração</p>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Plano:</label>
                        <Select defaultValue="GREEN" className="w-full">
                            <option value="GREEN">GREEN</option>
                            <option value="PRÉ JOGO">PRÉ JOGO</option>
                            <option value="PRÉ + LIVE">PRÉ + LIVE</option>
                            <option value="VALUEBET">VALUEBET</option>
                        </Select>
                    </div>

                    <Input placeholder="Monetizze Checkout Link" className="w-full" />
                    <Input placeholder="Kirvano Checkout Link" className="w-full" />

                    <div>
                        <label className="block font-semibold mb-1">Preço:</label>
                        <Input defaultValue="234,00" className="w-40" />
                    </div>

                    <Input placeholder="Chave Stripe do Produto" className="w-full" />

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
