'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function AdicionarGrupoPage() {
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
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

            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5">
                        <FaChevronLeft />
                    </Button>
                </Link>

                <h1 className="text-2xl font-bold mb-4">Adicionar grupo</h1>

                <form className="space-y-6 max-w-4xl">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nome:</label>
                        <Input placeholder="Nome do grupo" className="w-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-sm font-semibold mb-1">permissões disponíveis <span className="text-gray-500 text-xs">ⓘ</span></h2>
                            <Input placeholder="Filtro" className="mb-2 w-full" />
                            <select multiple className="h-60 w-full border rounded p-2 text-sm bg-white">
                                <option>admin | entrada de log | Can add log entry</option>
                                <option>admin | entrada de log | Can change log entry</option>
                                <option>admin | entrada de log | Can delete log entry</option>
                                <option>admin | entrada de log | Can view log entry</option>
                                <option>admin_interface | Tema | Can add Theme</option>
                                <option>admin_interface | Tema | Can change Theme</option>
                                <option>admin_interface | Tema | Can delete Theme</option>
                                <option>admin_interface | Tema | Can view Theme</option>
                                <option>auth | grupo | Can add group</option>
                                <option>auth | grupo | Can change group</option>
                                <option>auth | grupo | Can delete group</option>
                                <option>auth | grupo | Can view group</option>
                            </select>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold mb-1">permissões escolhida(s) <span className="text-gray-500 text-xs">ⓘ</span></h2>
                            <Input placeholder="Filtro" className="mb-2 w-full" />
                            <select multiple className="h-60 w-full border rounded p-2 text-sm bg-white">
                                <option>admin | entrada de log | Can add log entry</option>
                                <option>admin | entrada de log | Can change log entry</option>
                                <option>admin | entrada de log | Can delete log entry</option>
                                <option>admin | entrada de log | Can view log entry</option>
                                <option>admin_interface | Tema | Can add Theme</option>
                                <option>admin_interface | Tema | Can change Theme</option>
                                <option>admin_interface | Tema | Can delete Theme</option>
                                <option>admin_interface | Tema | Can view Theme</option>
                                <option>auth | grupo | Can add group</option>
                                <option>auth | grupo | Can change group</option>
                                <option>auth | grupo | Can delete group</option>
                                <option>auth | grupo | Can view group</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-sm text-center text-gray-700 mt-2">
                        Pressione “Control”, ou “Command” no Mac, para selecionar mais de um.
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
