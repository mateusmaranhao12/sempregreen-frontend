'use client'

import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import Input from '@/components/inputs/InputText'
import { useState } from 'react'
import Modal from '../ui/Modal'

interface SubCasaDeAposta {
    id: number
    nome: string
    casaRepresentada: string
    fornecedor: string
    icone?: File | null
    modality?: string
    casaEspelho?: string
    substituirDe?: string
    substituirPara?: string
    comissao?: string
    url?: string
}

interface ModalEditCasaDeApostaProps {
    onClose: () => void
    onSave: (data: SubCasaDeAposta) => void
    initialData: SubCasaDeAposta
}

export default function ModalEditCasaDeAposta({ onClose, onSave, initialData }: ModalEditCasaDeApostaProps) {
    const [form, setForm] = useState<SubCasaDeAposta>(initialData)

    const handleChange = <K extends keyof SubCasaDeAposta>(key: K, value: SubCasaDeAposta[K]) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmit = () => {
        onSave(form)
        onClose()
    }

    return (
        <Modal title='Editar Sub casa de Aposta' onClose={onClose}>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Nome:</label>
                    <Input value={form.nome} onChange={(e) => handleChange('nome', e.target.value)} className="w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Casa Representada:</label>
                    <Input value={form.casaRepresentada} onChange={(e) => handleChange('casaRepresentada', e.target.value)} className="w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Fornecedor:</label>
                    <Select value={form.fornecedor} onChange={(e) => handleChange('fornecedor', e.target.value)} className="w-full">
                        <option value="betburguer.com">betburguer.com</option>
                        <option value="surebet.com">surebet.com</option>
                        <option value="tradematesports.com">tradematesports.com</option>
                    </Select>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                    <label htmlFor="icone" className="bg-gray-200 hover:bg-gray-300 text-sm text-black font-semibold px-3 py-1 rounded cursor-pointer">
                        Escolher arquivo
                    </label>
                    <span className="text-xs text-gray-600 truncate">{form.icone?.name || 'Nenhum arquivo escolhido'}</span>
                    <input id="icone" type="file" className="hidden" onChange={(e) => handleChange('icone', e.target.files?.[0] || null)} />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Modality:</label>
                    <Select value={form.modality || ''} onChange={(e) => handleChange('modality', e.target.value)} className="w-full">
                        <option value="">----------</option>
                        <option value="Pré">Pré</option>
                        <option value="Live">Live</option>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Casa Espelho:</label>
                    <Select value={form.casaEspelho || ''} onChange={(e) => handleChange('casaEspelho', e.target.value)} className="w-full">
                        <option value="">----------</option>
                        <option value="OnaBet - Pré">OnaBet - Pré</option>
                        <option value="Bet 7k (live) - Live">Bet 7k (live) - Live</option>
                    </Select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Substituir de:</label>
                    <Input value={form.substituirDe || ''} onChange={(e) => handleChange('substituirDe', e.target.value)} className="w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Substituir para:</label>
                    <Input value={form.substituirPara || ''} onChange={(e) => handleChange('substituirPara', e.target.value)} className="w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Comissão:</label>
                    <Input type="number" value={form.comissao || ''} onChange={(e) => handleChange('comissao', e.target.value)} className="w-full" />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">URL:</label>
                    <Input value={form.url || ''} onChange={(e) => handleChange('url', e.target.value)} className="w-full" />
                </div>

                <div className="pt-6 flex justify-start gap-4">
                    <Button variant="darkgreen" type="button" onClick={handleSubmit}>
                        SALVAR
                    </Button>
                    <Button variant="red">Apagar</Button>
                </div>
            </form>
        </Modal>
    )
}
