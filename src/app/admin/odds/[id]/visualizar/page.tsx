'use client'

import { JSX, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/buttons/Button'
import AdminMenuSection from '@/app/admin/dashboard/components/AdminMenuSection'
import { adminMenuSections } from '@/config/adminMenuConfig'
import { FaChevronLeft } from 'react-icons/fa'

export default function VisualizarOddPage() {
  const [showMenu, setShowMenu] = useState(true)

  // Simula os dados da odd visualizada
  const odd = {
    id: 'fdb7a473-52c9-4934-8326-5509dc9bdff2',
    vendor: 'surebet.com',
    modality: 'Pré',
    subSport: 'Futebol',
    subHouse: 'Unibet',
    event: 'Macará – Cuniburo FC',
    time: '21/06/2025 21:00:00',
    minutes: 20,
    championship: 'Ecuador / Liga Pro',
    market: '<abbr title="Ambos marcam - gols">Ambos marcam</abbr>',
    profit: 1.57,
    chance: 2.12,
    lay: '-',
    identifier: 'd05BKXdc-H0',
    uri: 'https://pt.surebet.com/nav/surebet/prong/1/d05BKXdc-H0/?f=odd_format=eu&time_zone=America%2FSao_Paulo',
    periodName: '-',
    paused: false,
    period: '-'
  }

  const renderField = (label: string, value: string | number | JSX.Element) => (
    <div className="flex border-b py-2">
      <div className="w-1/4 font-medium text-gray-700 pr-4 text-sm">{label}:</div>
      <div className="flex-1 text-sm text-black" dangerouslySetInnerHTML={{ __html: value.toString() }} />
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row gap-6 md:min-h-screen md:overflow-hidden">
      {/* Menu lateral */}
      {showMenu ? (
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
      ) : (
        <div className="md:w-28">
          <Button onClick={() => setShowMenu(true)} className="text-xs px-2 py-1 rounded" variant="gray">
            Exibir menu
          </Button>
        </div>
      )}

      {/* Conteúdo principal */}
      <main className="flex-1 px-4 py-4">
        <Link href="/admin/odds">
          <Button variant="darkgreen" className="mb-5"><FaChevronLeft /></Button>
        </Link>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-700">
            Visualizar 7 - Odd
          </h1>
        </div>

        <div className="bg-white rounded shadow p-4 space-y-2 text-sm">
          <div className="font-bold text-black text-base mb-2">
            Odd object ({odd.id})
          </div>
          {renderField('Vendor', odd.vendor)}
          {renderField('Modality', odd.modality)}
          {renderField('Sub sport', odd.subSport)}
          {renderField('Sub house', odd.subHouse)}
          {renderField('Event name', odd.event)}
          {renderField('Time', odd.time)}
          {renderField('Minutes', odd.minutes)}
          {renderField('Championship', odd.championship)}
          {renderField('Market', odd.market)}
          {renderField('Profit', odd.profit)}
          {renderField('Chance', odd.chance)}
          {renderField('Lay', odd.lay)}
          {renderField('Identifier', odd.identifier)}
          {renderField('Uri', `<a class='text-blue-600 underline' target='_blank' href='${odd.uri}'>${odd.uri}</a>`)}
          {renderField('Period name', odd.periodName)}
          {renderField('Paused', odd.paused ? '✅' : '❌')} 
          {renderField('Period', odd.period)}
        </div>
      </main>
    </div>
  )
}