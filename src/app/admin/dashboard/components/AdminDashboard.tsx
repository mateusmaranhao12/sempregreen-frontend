'use client'

import Link from "next/link"
import { FaPen } from "react-icons/fa"
import AdminMenuSection from "./AdminMenuSection"
import { adminMenuSections } from "@/config/adminMenuConfig"

export default function AdminDashboard() {

  const slug = 'usuarios'

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Administração do Site</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Área principal com os cards de administração */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {adminMenuSections.map((section, index) => (
            <AdminMenuSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
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

    </div>
  )
}