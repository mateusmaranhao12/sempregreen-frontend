'use client'

import Link from 'next/link'

export default function AdminNavbar() {
    return (
        <nav className="bg-green-900 text-white px-4 py-2 flex items-center justify-between border-b-4 border-green-400 text-sm">
            {/* Lado esquerdo */}
            <div className="font-bold text-yellow-400 text-lg uppercase">
                Admin
            </div>

            {/* Lado direito */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-right justify-end overflow-x-auto max-w-full">
                {/* Status online */}
                <span className="text-red-500 text-base">●</span>

                {/* Mensagem de boas-vindas */}
                <span className="text-green-300 uppercase">
                    Admin - bem-vindo(a), <span className="uppercase text-white">Mateus</span>.
                </span>

                {/* Links de ação */}
                <Link href="/dashboard" className="text-white hover:underline uppercase">Ver o site</Link>
                <span className="text-white">/</span>
                <Link href="/admin/alterar-senha" className="text-blue-300 hover:underline uppercase">Alterar senha</Link>
                <span className="text-white">/</span>
                <Link href="/admin/login" className="text-white hover:underline uppercase">Encerrar sessão</Link>
            </div>
        </nav>
    )
}
