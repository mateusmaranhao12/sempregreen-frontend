'use client'

import AdminDashboardLayout from "@/components/layouts/AdminDashboardLayout"
import Link from "next/link"
import { FaPen } from "react-icons/fa"
import AdminMenuSection from "./AdminMenuSection"

export default function AdminDashboard() {

  const slug = 'usuarios'

  const apostasItems: {
    label: string;
    actions?: ('add' | 'edit' | 'view')[];
  }[] = [
      { label: "Usuários", actions: ['add', 'edit'] },
      { label: "Casas de aposta", actions: ['add', 'edit'] },
      { label: "Sub casas de aposta", actions: ['add', 'edit'] },
      { label: "Esportes", actions: ['add', 'edit'] },
      { label: "Mercados", actions: ['add', 'edit'] },
      { label: "Sub esportes", actions: ['add', 'edit'] },
      { label: "Proxies", actions: ['add', 'edit'] },
      { label: "Acessos", actions: ['add', 'edit'] },
      { label: "Odds", actions: ['view'] },
      { label: "Customizar", actions: ['edit'] },
    ]

  const pagamentosItems: {
    label: string;
    actions?: ('add' | 'edit' | 'view')[];
  }[] = [
      { label: "Planos", actions: ['add', 'edit'] },
      { label: "Períodos", actions: ['add', 'edit'] },
      { label: "Assinaturas", actions: ['add', 'edit'] },
      { label: "MercadoPago", actions: ['edit'] },
    ]

  const autenticacaoItems: {
    label: string;
    actions?: ('add' | 'edit' | 'view')[];
  }[] = [
    { label: "Grupos", actions: ['add', 'edit'] },
  ]

  const siteItems: {
    label: string;
    actions?: ('add' | 'edit' | 'view')[];
  }[] = [
    { label: "Site", actions: ['add', 'edit'] },
  ]

  return (
    <AdminDashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Administração do Site</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Área principal com os cards de administração */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <AdminMenuSection title="1 - APOSTAS" items={apostasItems} />
          <AdminMenuSection title="2 - PAGAMENTOS" items={pagamentosItems} />
          <AdminMenuSection title="3 - AUTENTICAÇÃO E AUTORIZAÇÃO" items={autenticacaoItems} />
          <AdminMenuSection title="4 - SITE" items={siteItems} />
        </div>

        {/* Ações recentes */}
        <div className="bg-gray-100 rounded p-4 md:col-span-1 order-first md:order-none">
          <h2 className="font-bold text-sm mb-2">Ações recentes</h2>
          <p className="text-xs text-gray-700"><strong>Minhas Ações</strong></p>
          <div className="flex items-center gap-2 text-sm text-blue-600 hover:underline">
            <FaPen size={14} />
            <Link href={`/admin/${slug}/editar`}>
              exemplo@email.com
            </Link>
          </div>
        </div>
      </div>

    </AdminDashboardLayout>

  )
}