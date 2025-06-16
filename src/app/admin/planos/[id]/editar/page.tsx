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

type Props = {
    params: Promise<{ id: string }>
}

export default function EditarPlanoPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Sidebar */}
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

            {/* Conteúdo principal */}
            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5"><FaChevronLeft /></Button>
                </Link>

                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar 1 - Plano</h1>
                        <p className="text-sm font-bold text-black">PRÉ JOGO</p>
                    </div>
                    <Link href={`/admin/planos/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block font-semibold mb-1">Nome:</label>
                        <Input defaultValue="PRÉ JOGO" className="w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Modalities:</label>
                        <Select multiple defaultValue={['Pré']} className="w-full h-40">
                            <option value="Pré">Pré</option>
                            <option value="Live">Live</option>
                            <option value="EV">EV</option>
                        </Select>

                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <label className="text-sm font-medium">Mostrar?</label>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Ordem:</label>
                        <Input type="number" defaultValue="0" className="w-32" />
                    </div>

                    <div className="pt-4 border-t flex flex-wrap gap-2">
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
