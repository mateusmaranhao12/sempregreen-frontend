'use client'

import { useState } from 'react'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Label from '@/components/labels/Label'
import { FaXmark } from 'react-icons/fa6'
import Button from '@/components/buttons/Button'

export default function CalculadoraDashboardPage() {
    const [apostas, setApostas] = useState([
        { tipo: 'A Favor', odd: '', stake: '', comissao: '', cashback: '', fixar: false, lucrarAqui: true },
        { tipo: 'A Favor', odd: '', stake: '', comissao: '', cashback: '', fixar: false, lucrarAqui: true }
    ])

    const adicionarAposta = () => {
        setApostas([...apostas, { tipo: 'A Favor', odd: '', stake: '', comissao: '', cashback: '', fixar: false, lucrarAqui: true }])
    }

    const removerAposta = (index: number) => {
        const novas = [...apostas]
        novas.splice(index, 1)
        setApostas(novas)
    }

    return (
        <div className="bg-[#0e2a20] text-white min-h-screen p-4">
            <h1 className="text-center text-lg font-bold mb-4">Calculadora Arbitragem</h1>

            <div className="text-center mb-6">
                <Button variant='green' className='w-xs'
                    onClick={adicionarAposta}
                >
                    Adicionar Aposta
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {apostas.map((aposta, index) => (
                    <div key={index} className="bg-zinc-900 p-4 rounded">
                        <div className="flex items-center justify-between mb-2 text-sm font-semibold">
                            <label className="flex items-center gap-2 uppercase">
                                <input
                                    type="checkbox"
                                    checked={aposta.lucrarAqui}
                                    onChange={() => {
                                        const novas = [...apostas]
                                        novas[index].lucrarAqui = !novas[index].lucrarAqui
                                        setApostas(novas)
                                    }}
                                />
                                Lucrar aqui
                            </label>

                            <label className="flex items-center gap-2 uppercase">
                                <input
                                    type="checkbox"
                                    checked={aposta.fixar}
                                    onChange={() => {
                                        const novas = [...apostas]
                                        novas[index].fixar = !novas[index].fixar
                                        setApostas(novas)
                                    }}
                                />
                                Fixar
                            </label>

                            <button onClick={() => removerAposta(index)} className="text-red-500 font-bold cursor-pointer">
                                <FaXmark size={16} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col">
                                <Label>Tipo</Label>
                                <Select
                                    value={aposta.tipo}
                                    onChange={(e) => {
                                        const novas = [...apostas]
                                        novas[index].tipo = e.target.value
                                        setApostas(novas)
                                    }}
                                >
                                    <option>A Favor</option>
                                    <option>Contra</option>
                                </Select>
                            </div>

                            <div className="flex flex-col">
                                <Label>Odd</Label>
                                <Input
                                    type="number"
                                    value={aposta.odd}
                                    onChange={(e) => {
                                        const novas = [...apostas]
                                        novas[index].odd = e.target.value
                                        setApostas(novas)
                                    }}
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label>Stake</Label>
                                <Input
                                    type="number"
                                    value={aposta.stake}
                                    onChange={(e) => {
                                        const novas = [...apostas]
                                        novas[index].stake = e.target.value
                                        setApostas(novas)
                                    }}
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label>Comissão %</Label>
                                <Input
                                    type="number"
                                    value={aposta.comissao}
                                    onChange={(e) => {
                                        const novas = [...apostas]
                                        novas[index].comissao = e.target.value
                                        setApostas(novas)
                                    }}
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label>Cashback %</Label>
                                <Input
                                    type="number"
                                    value={aposta.cashback}
                                    onChange={(e) => {
                                        const novas = [...apostas]
                                        novas[index].cashback = e.target.value
                                        setApostas(novas)
                                    }}
                                />
                            </div>

                            <div className="bg-slate-800 text-green-400 text-center py-2 font-bold rounded">
                                Lucro: 0,00 {/* cálculo vem depois */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 justify-center items-center text-white">
                <div className="flex flex-col">
                    <Label className="uppercase">Arredondar</Label>
                    <Input placeholder="Arredondar" type="number" />
                </div>
                <div className="flex flex-col">
                    <Label className="uppercase">Aposta total</Label>
                    <Input placeholder="Aposta Total" type="number" />
                </div>
            </div>

            <div className="bg-green-900 text-white text-center mt-6 p-4 font-bold flex justify-between">
                <span className='uppercase'>Resultado: R$ 0,00</span>
                <span className='uppercase'>% Lucro:</span>
            </div>
        </div>
    )
}
