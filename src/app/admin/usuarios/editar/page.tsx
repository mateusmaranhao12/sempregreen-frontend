'use client'

import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'
import Select from '@/components/inputs/InputSelect'

export default function EditarUsuarioPage() {
    const [showMenu, setShowMenu] = useState(true)

    const [primeiroNome, setPrimeiroNome] = useState('João da Silva')
    const [ultimoNome, setUltimoNome] = useState('')
    const [email, setEmail] = useState('exemplo@email.com')

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">

            {showMenu ? (
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
            ) : (
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

            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant='darkgreen' className='mb-5'>
                        <FaChevronLeft />
                    </Button>
                </Link>

                {/* Cabeçalho superior com e-mail e botões */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar 0 - Usuário</h1>
                        <p className="text-sm font-bold text-black">admin@example.com</p>
                    </div>

                    <div className="flex gap-2">
                        <Link href={'/admin/usuarios/editar/historico'}>
                            <Button variant="gray" className="text-xs px-3 py-1 rounded">Histórico</Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="gray" className="text-xs px-3 py-1 rounded">Log in a user</Button>
                        </Link>
                    </div>
                </div>


                <form className="space-y-6 max-w-4xl">
                    <div className="bg-white rounded p-4 shadow">
                        <label className="text-sm font-medium block mb-1">Usuário:</label>
                        <Input placeholder="Usuário" className="w-full" />
                        <p className="text-xs text-gray-600 mt-1">
                            Obrigatório. 150 caracteres ou menos. Letras, números e @/./+/-/_ apenas.
                        </p>

                        <label className="text-sm font-medium block mt-4 mb-1">Senha:</label>
                        <Input type="password" placeholder="Senha" className="w-full" />
                        <p className="text-xs text-gray-600 mt-1">
                            Nenhuma senha definida. Para mudar a senha, use o formulário apropriado.
                        </p>

                        <hr className="my-4" />

                        <h2 className="text-green-700 font-semibold mb-2">Informações pessoais</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Primeiro nome</label>
                                <Input value={primeiroNome} onChange={(e) => setPrimeiroNome(e.target.value)} className="w-full" />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Último nome</label>
                                <Input value={ultimoNome} onChange={(e) => setUltimoNome(e.target.value)} className="w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="afiliado" />
                                <label htmlFor="afiliado" className="text-sm">Afiliado?</label>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="bg-green-700 text-white font-semibold px-4 py-2 rounded mb-5">Permissões</div>

                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="inline-flex items-center gap-2">
                                    <input type="checkbox" defaultChecked />
                                    Ativo
                                </label>
                                <p className="text-xs text-gray-600 ml-6">
                                    Indica que o usuário será tratado como ativo. Ao invés de excluir contas de usuário, desmarque isso.
                                </p>
                            </div>

                            <div>
                                <label className="inline-flex items-center gap-2">
                                    <input type="checkbox" />
                                    Membro da equipe
                                </label>
                                <p className="text-xs text-gray-600 ml-6">
                                    Indica que usuário consegue acessar este site de administração.
                                </p>
                            </div>

                            <div>
                                <label className="inline-flex items-center gap-2">
                                    <input type="checkbox" />
                                    Status de superusuário
                                </label>
                                <p className="text-xs text-gray-600 ml-6">
                                    Indica que este usuário tem todas as permissões sem atribuí-las explicitamente.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="text-sm font-medium">Grupos disponíveis</label>
                                <Select className="w-full">
                                    <option>Admin</option>
                                    <option>Office</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Grupos escolhidos</label>
                                <Select className="w-full">
                                    <option>(vazio)</option>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="text-sm font-medium">Permissões disponíveis</label>
                                <Select className="w-full h-40" multiple>
                                    <option>auth | grupo | Can add group</option>
                                    <option>auth | grupo | Can change group</option>
                                    <option>auth | grupo | Can delete group</option>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Permissões escolhidas</label>
                                <Select className="w-full h-40" multiple>
                                    <option>(vazio)</option>
                                </Select>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <h2 className="text-green-700 font-semibold mb-2">Datas importantes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Último login</label>
                                <Input type="date" className="w-full" />
                                <Input type="time" className="w-full mt-1" />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Data de registro</label>
                                <Input type="date" defaultValue="2025-03-10" className="w-full" />
                                <Input type="time" defaultValue="12:58:46" className="w-full mt-1" />
                            </div>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-2">
                            <Button variant="darkgreen">Salvar</Button>
                            <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
                            <Button variant="darkgreen">Salvar e continuar editando</Button>
                            <Button variant="red">Apagar</Button>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}
