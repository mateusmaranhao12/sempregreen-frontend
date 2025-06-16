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

export default function EditarAssinaturaPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu ? (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto pr-1 max-h-[calc(100vh-100px)] relative">
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
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar 3 - Assinatura</h1>
                        <p className="text-sm font-bold text-black">carlosadrianoleal@gmail.com PRÉ + LIVE - MENSAL</p>
                    </div>
                    <Link href={`/admin/assinaturas/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block font-semibold mb-1">Usuário:</label>
                        <Select defaultValue="carlosadrianoleal@gmail.com" className="w-full">
                            <option value="carlosadrianoleal@gmail.com">carlosadrianoleal@gmail.com</option>
                        </Select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Método de Pagamento:</label>
                        <Select defaultValue="Cartão de Crédito" className="w-full">
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Pix">Pix</option>
                            <option value="Boleto">Boleto</option>
                        </Select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Gateway de pagamento:</label>
                        <Select defaultValue="Asaas" className="w-full">
                            <option value="Asaas">Asaas</option>
                            <option value="Stripe">Stripe</option>
                        </Select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Período:</label>
                        <Select defaultValue="PRÉ + LIVE - MENSAL" className="w-full">
                            <option value="PRÉ + LIVE - MENSAL">PRÉ + LIVE - MENSAL</option>
                            <option value="PRÉ JOGO - MENSAL">PRÉ JOGO - MENSAL</option>
                        </Select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Data de Pagamento:</label>
                        <Input defaultValue="2023-12-15" className="w-40" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Data/Hora de Expiração:</label>
                        <div className="flex gap-4">
                            <Input defaultValue="2024-01-14" className="w-40" />
                            <Input defaultValue="21:00:00" className="w-32" />
                        </div>
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
