"use client"

import { use } from 'react'
import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'
import Link from 'next/link'

export default function EditarAcessoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [showMenu, setShowMenu] = useState(true)

    const [fornecedor, setFornecedor] = useState('surebet.com')
    const [usuario, setUsuario] = useState('lonnieabensonjonathanshawkins@gmail.com')
    const [senha, setSenha] = useState('Q!w2bet987')
    const [habilitado, setHabilitado] = useState(true)
    const [curl, setCurl] = useState("curl 'https://pt.surebet.com/surebets' \\")
    const [proxy, setProxy] = useState('191.101.143.229:12324:14ac7e101b167:32f03e3a21')
    const [betburguerId, setBetburguerId] = useState('')

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
                    <div>
                        <h1 className="text-xl text-gray-700 font-semibold">Modificar 6 - Acesso</h1>
                        <p className="text-sm font-bold text-black">{fornecedor} - {usuario} - {senha}</p>
                    </div>
                    <Link href={`/admin/acessos/${id}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">HISTÓRICO</Button>
                    </Link>
                </div>

                <form className="space-y-6 max-w-4xl bg-white rounded p-4 shadow">
                    <div>
                        <label className="text-sm font-medium block mb-1">Fornecedor:</label>
                        <Select value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} className="w-full">
                            <option value="surebet.com">surebet.com</option>
                            <option value="betburguer.com">betburguer.com</option>
                        </Select>
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Usuário:</label>
                        <Input value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full" />
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Senha:</label>
                        <Input value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full" />
                    </div>

                    <div className="flex gap-2 items-center">
                        <input type="checkbox" checked={habilitado} onChange={(e) => setHabilitado(e.target.checked)} />
                        <label className="text-sm font-medium">Habilitar?</label>
                    </div>
                    <p className="text-xs text-gray-600">Use esta opção para habilitar o uso da conta pelo robô que pega as entradas</p>

                    <div>
                        <label className="text-sm font-medium block mb-1">CURL:</label>
                        <textarea
                            value={curl}
                            onChange={(e) => setCurl(e.target.value)}
                            className="w-full h-40 border border-gray-300 rounded px-3 py-2"
                        />
                        <p className="text-xs text-gray-600">Chamada CURL copiada do navegador</p>
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Proxy:</label>
                        <Select value={proxy} onChange={(e) => setProxy(e.target.value)} className="w-full">
                            <option value="191.101.143.229:12324:14ac7e101b167:32f03e3a21">191.101.143.229:12324:14ac7e101b167:32f03e3a21</option>
                        </Select>
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Betburguer ID dos Filtros:</label>
                        <Input value={betburguerId} onChange={(e) => setBetburguerId(e.target.value)} className="w-full" />
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