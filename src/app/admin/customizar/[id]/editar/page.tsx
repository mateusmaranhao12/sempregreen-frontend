'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Input from '@/components/inputs/InputText'
import InputFile from '@/components/inputs/InputFile'
import InputColor from '@/components/inputs/InputColor'
import TextArea from '@/components/inputs/TextArea'

export default function EditarCustomizarPage() {
    const [showMenu, setShowMenu] = useState(true)
    const params = useParams()
    const id = params?.id as string // Pegando o ID corretamente via hook

    return (
        <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
            {showMenu && (
                <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                    <Button onClick={() => setShowMenu(false)} className="text-xs px-2 py-1 rounded self-end" variant="gray">
                        Ocultar menu
                    </Button>
                    <div className="flex flex-col gap-4">
                        {adminMenuSections.map((section, index) => (
                            <AdminMenuSection key={index} title={section.title} items={section.items} />
                        ))}
                    </div>
                </aside>
            )}

            {!showMenu && (
                <div className="md:w-28">
                    <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant="gray">
                        Exibir menu
                    </Button>
                </div>
            )}

            <main className="flex-1 px-4 py-4">
                <Link href="/admin/dashboard">
                    <Button variant="darkgreen" className="mb-5"><FaChevronLeft /></Button>
                </Link>

                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl text-gray-700 font-semibold">Modificar 8 - Customizar</h1>
                    <Link href={`/admin/customizar/${encodeURIComponent(id)}/editar/historico`}>
                        <Button variant="gray" className="text-xs px-3 py-1 rounded">HISTÓRICO</Button>
                    </Link>
                </div>

                <h2 className="text-xl font-semibold mb-6">{id}</h2>

                <form className="flex flex-col gap-6 max-w-4xl bg-white rounded p-4 shadow">
                    <InputFile label="Logo do login" />
                    <InputFile label="Logo do cadastro" />
                    <InputFile label="Logo do menu" />
                    <InputFile label="Ícone do site" />
                    <InputFile label="Imagem de fundo do login" />
                    <InputFile label="Imagem de fundo do cadastro" />

                    <Input placeholder="Número do WhatsApp para botão de suporte" />

                    <InputColor label="Cor de fundo do login" />
                    <InputColor label="Cor de fundo do cadastro" />
                    <InputColor label="Cor de fundo do menu" />
                    <InputColor label="Cor de fundo do site" />
                    <InputColor label="Cor de fundo botões de modalidade" />
                    <InputColor label="Cor de fundo das opções" />

                    <TextArea label="Pixels da Página de Obrigado do Pagamento" rows={5} />
                    <TextArea label="Scripts Personalizados" rows={5} />

                    <Input label="Texto botão menu personalizado" />
                    <Input label="Link botão menu personalizado" />

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Permitir PRÉ
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Permitir Live
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" /> Permitir EV
                        </label>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <Button variant="darkgreen">SALVAR</Button>
                        <Button variant="darkgreen">Salvar e continuar editando</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
