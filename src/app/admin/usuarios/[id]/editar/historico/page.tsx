// app/admin/dashboard/editar/historico/page.tsx
'use client'

import Table from '@/components/ui/Table'
import Link from 'next/link'
import Button from '@/components/buttons/Button'
import { FaChevronLeft } from 'react-icons/fa'

export default function HistoricoPage() {
    const headers = ['DATA/HORA', 'USUÁRIO', 'AÇÃO']
    const rows = [
        ['12/06/2025 10:18:07', 'mateusnmaranhao@gmail.com (Mateus)', 'User mateusnmaranhao@gmail.com logged in as exemplo@email.com.'],
    ]

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <Link href="/admin/dashboard">
                <Button variant="darkgreen" className="mb-5">
                    <FaChevronLeft />
                </Button>
            </Link>

            <h1 className="text-xl font-semibold text-gray-700 mb-4">
                Histórico de modificações: <span className="text-black">exemplo@email.com</span>
            </h1>

            <Table headers={headers} rows={rows} footer="1 entrada" />
        </div>
    )
}
