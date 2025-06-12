'use client'

import Button from '@/components/buttons/Button'
import { useState } from 'react'
import { FaMedal } from 'react-icons/fa'
import { FaPix } from 'react-icons/fa6'
import Image from 'next/image'
import MercadoPago from '../../assets/logo-mercado-pago.png'

interface PlanoBoxProps {
    titulo: string
    opcoes: string[]
    selecionado: string
    onSelecionar: (opcao: string) => void
}

function PlanoBox({ titulo, opcoes, selecionado, onSelecionar }: PlanoBoxProps) {
    return (
        <div className="bg-white rounded p-4 flex flex-col items-center w-full">
            <FaMedal className="text-4xl text-black" />
            <h2 className="text-black text-lg font-bold uppercase">{titulo}</h2>

            <div
                className={`grid w-full border border-blue-500 rounded overflow-hidden 
                grid-cols-1 sm:grid-cols-${opcoes.length}`}
            >
                {opcoes.map((opcao) => (
                    <Button
                        key={opcao}
                        variant={selecionado === opcao ? 'blue' : 'white_border_blue'}
                        className="text-xs !rounded-none !border-l first:!border-l-0 border-blue-500"
                        onClick={() => onSelecionar(opcao)}
                    >
                        {opcao}
                    </Button>
                ))}
            </div>
        </div>

    )
}

export default function PlanosDashboardPage() {
    const [planoSelecionado, setPlanoSelecionado] = useState('PRÉ JOGO')
    const [periodoSelecionado, setPeriodoSelecionado] = useState('SEMANAL')

    const planos = [
        { nome: 'PRÉ JOGO', opcoes: ['ANUAL', 'DIÁRIO', 'MENSAL', 'TRIMESTRAL', 'SEMANAL'] },
        { nome: 'PRÉ + LIVE', opcoes: ['MENSAL', 'ANUAL', 'TRIMESTRAL', 'DIÁRIO', 'SEMANAL'] },
        { nome: 'VALUEBET', opcoes: ['SEMANAL', 'MENSAL', 'ANUAL'] },
        { nome: 'LIVE', opcoes: ['DIÁRIO', 'ANUAL', 'TRIMESTRAL', 'SEMANAL', 'MENSAL'] },
    ]

    const precos: Record<string, Record<string, number>> = {
        'PRÉ JOGO': {
            ANUAL: 297,
            DIÁRIO: 9,
            MENSAL: 47,
            TRIMESTRAL: 117,
            SEMANAL: 19
        },
        'PRÉ + LIVE': {
            MENSAL: 97,
            ANUAL: 597,
            TRIMESTRAL: 247,
            DIÁRIO: 19,
            SEMANAL: 39
        },
        'VALUEBET': {
            SEMANAL: 27,
            MENSAL: 67,
            ANUAL: 377
        },
        'LIVE': {
            DIÁRIO: 12,
            ANUAL: 497,
            TRIMESTRAL: 197,
            SEMANAL: 32,
            MENSAL: 77
        }
    }


    return (
        <div className="bg-[#0e2a20] min-h-screen p-4 flex flex-col items-center text-white">
            <Image
                src={MercadoPago}
                alt="Mercado Pago"
                className="w-32 mb-2"
            />
            <p className="text-sm mb-6">
                Seu pagamento será processado com agilidade e segurança pelo MercadoPago
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
                {planos.map((plano) => (
                    <PlanoBox
                        key={plano.nome}
                        titulo={plano.nome}
                        opcoes={plano.opcoes}
                        selecionado={planoSelecionado === plano.nome ? periodoSelecionado : ''}
                        onSelecionar={(opcao) => {
                            setPlanoSelecionado(plano.nome)
                            setPeriodoSelecionado(opcao)
                        }}
                    />
                ))}
            </div>

            <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold uppercase">
                    {planoSelecionado} - {periodoSelecionado}
                </h3>
                <p className="text-3xl font-bold mt-2">
                    {precos[planoSelecionado]?.[periodoSelecionado]?.toFixed(2).replace('.', ',') ?? '---'}
                </p>

                <Button
                    variant="blue"
                    className="mt-4 w-full md:w-80 flex items-center justify-center gap-2"
                    onClick={() => window.open('https://wa.me/31991189817', '_blank')}
                >
                    <FaPix /> Clique Aqui para Pagar
                </Button>
            </div>
        </div>
    )
}
