"use client"

import { use } from 'react'
import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function EditarProxyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)
    const [uri, setUri] = useState(id)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu && (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded self-end" variant='gray'>Ocultar menu</Button>
                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            )}

            {!showMenu && (
                <div className="md:w-28">
                    <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant='gray'>Exibir menu</Button>
                </div>
            )}

            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant='darkgreen' className='mb-5'><FaChevronLeft /></Button>
                </Link>

                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl text-gray-700 font-semibold">Modificar 5 - Proxy</h1>
                    <Link href={`/admin/proxies/${encodeURIComponent(id)}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">HISTÓRICO</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-4xl bg-white rounded p-4 shadow">
                    <div className="mb-4">
                        <label className="text-sm font-medium block mb-1">URI:</label>
                        <Input value={uri} onChange={(e) => setUri(e.target.value)} className="w-full" />
                    </div>

                    <div className="pt-6 flex flex-wrap gap-2">
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
