'use client'

import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import { useState } from 'react'
import AdminMenuSection from '../../dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function AdicionarUsuarioPage() {
    const [showMenu, setShowMenu] = useState(true)

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">

            {/* Menu lateral esquerdo */}
            {showMenu && (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button
                        onClick={() => setShowMenu(false)}
                        className="text-xs px-2 py-1 rounded self-end"
                        variant='gray'
                    >
                        Ocultar menu
                    </Button>

                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection
                                key={index}
                                title={section.title}
                                items={section.items}
                            />
                        ))}
                    </div>
                </aside>
            )}

            {!showMenu && (
                <div className="md:w-28">
                    <Button
                        onClick={() => setShowMenu(true)}
                        className="text-xs px-2 py-1 rounded"
                        variant='gray'
                    >
                        Exibir menu
                    </Button>
                </div>
            )}

            {/* Conteúdo principal */}
            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant='darkgreen' className='mb-5'>
                        <FaChevronLeft />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold mb-2">Adicionar 0 - Usuário</h1>
                <p className="text-sm text-gray-700 mb-6">
                    Primeiro, informe seu nome de usuário e senha. Então, você poderá editar outras opções do usuário.
                </p>

                <form className="space-y-6 max-w-2xl">
                    <div>
                        <label className="block text-sm font-medium mb-1">Usuário:</label>
                        <Input placeholder="Usuário" className="w-full" />
                        <p className="text-xs text-gray-600 mt-1">
                            Obrigatório. 150 caracteres ou menos. Letras, números e @/./+/-/_ apenas.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Senha:</label>
                        <Input type="password" placeholder="Senha" className="w-full" />
                        <ul className="text-xs text-gray-600 mt-1 space-y-0.5">
                            <li>Sua senha não pode ser muito parecida com o resto das suas informações pessoais.</li>
                            <li>Sua senha precisa conter pelo menos 8 caracteres.</li>
                            <li>Sua senha não pode ser uma senha comumente utilizada.</li>
                            <li>Sua senha não pode ser inteiramente numérica.</li>
                        </ul>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Confirmação de senha:</label>
                        <Input type="password" placeholder="Confirme a senha" className="w-full" />
                        <p className="text-xs text-gray-600 mt-1">
                            Informe a mesma senha informada anteriormente, para verificação.
                        </p>
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
