'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { FaChevronLeft } from 'react-icons/fa'

import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import Table from '@/components/ui/Table'

export default function HistoricoCustomizarPage() {
    const params = useParams()
    const id = params?.id as string
    const [showMenu, setShowMenu] = useState(true)

    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const rows = [
        ['13/11/2023 22:24:27', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Logo do login.'],
        ['13/11/2023 22:25:03', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Logo do login.'],
        ['21/11/2023 14:00:09', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Logo do login.'],
        ['21/11/2023 14:00:50', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Logo do cadastro e Logo do menu.'],
        ['21/11/2023 14:01:32', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do login, Cor de fundo do cadastro, Cor de fundo do menu e Cor de fundo do site.'],
        ['21/11/2023 14:01:54', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
        ['21/11/2023 14:02:13', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
        ['21/11/2023 14:02:33', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
        ['21/11/2023 14:02:43', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
        ['21/11/2023 14:03:06', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
        ['21/11/2023 14:03:31', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
        ['21/11/2023 14:03:40', 'almir.silveira@hotmail.com (Almi Pereira Silveira)', 'Alterado Cor de fundo do menu.'],
    ]

    return (
        <div className="mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
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

                <main className="flex-1 px-4 py-4">
                    <Link href={`/admin/customizar/${encodeURIComponent(id)}/editar`}>
                        <Button variant="darkgreen" className="mb-5">
                            <FaChevronLeft />
                        </Button>
                    </Link>

                    <h1 className="text-xl font-semibold text-gray-700 mb-4">
                        Histórico de modificações: <span className="text-black">{id}</span>
                    </h1>

                    <Table
                        headers={headers}
                        rows={rows}
                        footer={`${rows.length} entrad${rows.length === 1 ? 'a' : 'as'}`}
                    />
                </main>
            </div>
        </div>
    )
}
