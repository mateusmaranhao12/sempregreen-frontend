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

export default function EditarGrupoPage({ params }: Props) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

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

                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar grupo</h1>
                        <p className="text-sm font-bold text-black">Admin</p>
                    </div>
                    <Link href={`/admin/grupos/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-5xl">
                    <div>
                        <label className="block font-semibold mb-1">Nome:</label>
                        <Input defaultValue="Admin" className="w-full" />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Permissões:</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-1">permissões disponíveis <span className="text-xs text-gray-400">(com filtro)</span></p>
                                <Input placeholder="Filtro" className="w-full mb-2" />
                                <select multiple className="w-full h-64 border rounded px-2 py-1 text-sm">
                                    <option>admin | entrada de log | Can add log entry</option>
                                    <option>admin | entrada de log | Can change log entry</option>
                                    <option>admin_interface | Tema | Can add Theme</option>
                                    <option>auth | grupo | Can change group</option>
                                </select>
                                <button className="mt-2 text-xs text-center text-green-700 w-full">Escolher todos</button>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-1">permissões escolhida(s) <span className="text-xs text-gray-400">(com filtro)</span></p>
                                <Input placeholder="Filtro" className="w-full mb-2" />
                                <select multiple className="w-full h-64 border rounded px-2 py-1 text-sm bg-green-100">
                                    <option>core | 0 - Usuário | Can view Usuário</option>
                                    <option>payment | 5 - Asaas | Can view 5 - Asaas</option>
                                    <option>payment | 1 - Plano | Can view 1 - Plano</option>
                                </select>
                                <button className="mt-2 text-xs text-center text-red-600 w-full">Remover todos</button>
                            </div>
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
