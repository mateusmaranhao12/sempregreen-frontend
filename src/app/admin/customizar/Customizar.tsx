'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import Button from '@/components/buttons/Button'
import AdminTable from '@/components/ui/AdminTable'
import { adminMenuSections } from '@/config/adminMenuConfig'
import AdminMenuSection from '../dashboard/components/AdminMenuSection'

export default function CustomizarPage() {
    const [showMenu, setShowMenu] = useState(true)

    const sites = useMemo(() => [
        'sinais.d1etonabets.com',
        'lltrader.coocom',
        'lucr2ocerto-bw.com',
        'oddsmatematicas.live',
        'app.elarbitrador.com',
        'tirocertoYsurebet.com.br',
        'localhostt',
        'sinais.sempregreen.com.br',
        'i7green$6.com',
        'cacadordegreen.com',
        'arbamaker.live',
        'aguiatrader.com.br',
        'vs081surebet.com.br',
        'appasd.nasdinja.com.br',
        'sure56gold.com.br',
        '3mtrader.tech',
        'pandabe5ts.app.br',
    ], [])

    const rows = sites.map((site) => ({
        id: site,
        slug: 'customizar',
        actions: ['edit'] as ('edit')[],
        data: [site]
    }))

    return (
        <div className="flex flex-col gap-4">
            {/* Topo */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <h1 className="text-2xl font-bold">
                    Selecione 8 - Customizar para modificar
                </h1>
                <Link href="/admin/dashboard">
                    <Button variant="gray">Voltar ao dashboard</Button>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
                {/* Menu lateral */}
                {showMenu && (
                    <aside className="hidden md:flex w-full md:w-1/4 flex-col gap-4 overflow-y-auto max-h-[calc(100vh-100px)] pr-1 relative">
                        <Button
                            onClick={() => setShowMenu(false)}
                            className="text-xs px-2 py-1 rounded w-25"
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
                )}

                {!showMenu && (
                    <div className="md:w-28">
                        <Button
                            onClick={() => setShowMenu(true)}
                            className="text-xs px-2 py-1 rounded hidden md:block"
                            variant="gray"
                        >
                            Exibir menu
                        </Button>
                    </div>
                )}

                {/* Conteúdo principal */}
                <main className="flex-1 px-2 sm:px-4 py-4 overflow-x-auto">
                    <AdminTable
                        headers={['NOME']}
                        rows={rows}
                    />
                </main>
            </div>
        </div>
    )
}
