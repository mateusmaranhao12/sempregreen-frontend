'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft, FaEdit, FaPlus, FaEye } from 'react-icons/fa'

import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'

export default function AdicionarAcessoPage() {
    const [showMenu, setShowMenu] = useState(true)

    const [fornecedor, setFornecedor] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [habilitado, setHabilitado] = useState(false)
    const [curl, setCurl] = useState('')
    const [proxy, setProxy] = useState('')
    const [filtroId, setFiltroId] = useState('')

    const handleSalvar = () => {
        const payload = {
            fornecedor,
            usuario,
            senha,
            habilitado,
            curl,
            proxy,
            filtroId
        }
        console.log('Salvar Acesso:', payload)
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {/* Menu lateral esquerdo */}
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

                <h1 className="text-2xl font-bold mb-6">Adicionar 6 - Acesso</h1>

                <form className="space-y-6 max-w-2xl">
                    {/* Fornecedor */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Fornecedor:</label>
                        <Select className="w-full" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)}>
                            <option value="">----------</option>
                            <option value="surebet.com">surebet.com</option>
                            <option value="betburguer.com">betburguer.com</option>
                        </Select>
                    </div>

                    {/* Usuário */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Usuário:</label>
                        <Input value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full" />
                    </div>

                    {/* Senha */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Senha:</label>
                        <Input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} className="w-full" />
                    </div>

                    {/* Habilitar */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" checked={habilitado} onChange={(e) => setHabilitado(e.target.checked)} />
                        <label className="text-sm font-medium">Habilitar?</label>
                    </div>
                    <p className="text-xs text-gray-600 -mt-3 mb-4">
                        Use esta opção para habilitar o uso da conta pelo robô que pega as entradas
                    </p>

                    {/* CURL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">CURL:</label>
                        <textarea
                            value={curl}
                            onChange={(e) => setCurl(e.target.value)}
                            rows={5}
                            className="w-full p-2 border border-gray-300 rounded text-sm"
                            placeholder="Chamada CURL copiada do navegador"
                        />
                        <p className="text-xs text-gray-500 mt-1">Chamada CURL copiada do navegador</p>
                    </div>

                    {/* Proxy */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Proxy:</label>
                        <div className="flex items-center gap-2">
                            <Select className="w-full" value={proxy} onChange={(e) => setProxy(e.target.value)}>
                                <option value="">----------</option>
                                <option value="proxy-1">gw.dataimpulse.com:824:cd2b...</option>
                                <option value="proxy-2">resi.rainproxy.io:1080:yu6y...</option>
                            </Select>
                        </div>
                    </div>

                    {/* Filtro ID */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Betburguer ID dos Filtros:</label>
                        <Input value={filtroId} onChange={(e) => setFiltroId(e.target.value)} className="w-full" />
                    </div>

                    {/* Botões de ação */}
                    <div className="pt-6 flex flex-wrap gap-2">
                        <Button variant="darkgreen" type="button" onClick={handleSalvar}>SALVAR</Button>
                        <Button variant="darkgreen" type="button">Salvar e adicionar outro(a)</Button>
                        <Button variant="darkgreen" type="button">Salvar e continuar editando</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
