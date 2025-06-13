'use client'

import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Button from '@/components/buttons/Button'
import Label from '@/components/labels/Label'
import { FaFilter, FaWallet } from 'react-icons/fa'
import GraficoLucro from './GraficoLucro'

export default function GestaoDashboardPage() {
    return (
        <div className="bg-[#0e2a20] min-h-screen p-4 text-white">
            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="flex flex-col">
                    <Label>De</Label>
                    <Input type="date" defaultValue="2025-06-12" />
                </div>
                <div className="flex flex-col">
                    <Label>Até</Label>
                    <Input type="date" defaultValue="2025-06-13" />
                </div>
                <div className="flex flex-col">
                    <Label>Modalidade</Label>
                    <Select>
                        <option>Pré</option>
                        <option>Live</option>
                    </Select>
                </div>
                <div className="flex items-end mb-1">
                    <Button variant="blue" className="w-full h-10 flex items-center justify-center gap-2">
                        <FaFilter /> Filtrar
                    </Button>
                </div>
            </div>

            {/* Gráfico placeholder */}
            <div className="mb-5">
                <GraficoLucro />
            </div>

            {/* Indicadores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white text-black p-4 rounded text-center font-bold">
                    <p className="text-2xl">0,00%</p>
                    <p className="flex items-center justify-center gap-1 text-xs font-semibold">
                        <FaWallet size={12} /> STAKE PERÍODO
                    </p>
                </div>

                <div className="bg-white text-black p-4 rounded text-center font-bold">
                    <p className="text-2xl">0,00%</p>
                    <p className="flex items-center justify-center gap-1 text-xs font-semibold">
                        <FaWallet size={12} /> LUCRO PERÍODO
                    </p>
                </div>

                <div className="bg-white text-black p-4 rounded text-center font-bold">
                    <p className="text-2xl">0,00%</p>
                    <p className="flex items-center justify-center gap-1 text-xs font-semibold">
                        <FaWallet size={12} /> ROI PERÍODO
                    </p>
                </div>
            </div>
        </div>
    )
}
