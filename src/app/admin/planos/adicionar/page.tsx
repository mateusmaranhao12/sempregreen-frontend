'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function AdicionarPlanoPage() {
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

            {/* Formulário */}
            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5"><FaChevronLeft /></Button>
                </Link>
                <h1 className="text-2xl font-bold mb-6">Adicionar 1 - Plano</h1>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block font-semibold mb-1">Nome:</label>
                        <Input placeholder="Nome do plano" className="w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Modalities:</label>
                        <Select multiple className="w-full h-40">
                            <option>Pré</option>
                            <option>Live</option>
                            <option>EV</option>
                        </Select>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked />
                        <label className="text-sm font-medium">Mostrar?</label>
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Ordem:</label>
                        <Input type="number" placeholder="0" className="w-32" />
                        <p className="text-xs mt-1 text-gray-600">Ordem em que o plano será exibido na página.</p>
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
