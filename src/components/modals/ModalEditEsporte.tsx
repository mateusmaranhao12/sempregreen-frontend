'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Modal from '../ui/Modal'

interface Esporte {
    id: number
    nome: string
    modalidade: string
}

interface ModalEditEsporteProps {
    onClose: () => void
    onSave: (data: Esporte) => void
    initialData: Esporte
}

export default function ModalEditEsporte({ onClose, onSave, initialData }: ModalEditEsporteProps) {
    const [form, setForm] = useState<Esporte>(initialData)

    const handleChange = <K extends keyof Esporte>(key: K, value: Esporte[K]) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmit = () => {
        onSave(form)
        onClose()
    }

    return (
        <Modal title={`Editar ${form.nome} - ${form.modalidade}`} onClose={onClose}>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Nome:</label>
                    <Input
                        value={form.nome}
                        onChange={(e) => handleChange('nome', e.target.value)}
                        className="w-full"
                    />
                    <p className="text-xs text-gray-600 mt-1">Digite o nome do esporte</p>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Modalidade:</label>
                    <Select
                        value={form.modalidade}
                        onChange={(e) => handleChange('modalidade', e.target.value)}
                        className="w-full"
                    >
                        <option value="Pré">Pré</option>
                        <option value="Live">Live</option>
                        <option value="EV">EV</option>
                    </Select>
                </div>

                <div className="pt-6 flex flex-wrap gap-2 bg-gray-50 px-4 py-3 rounded">
                    <Button variant="darkgreen" type="button" onClick={handleSubmit}>SALVAR</Button>
                    <Button variant="darkgreen">Salvar como novo</Button>
                    <Button variant="darkgreen">Salvar e continuar editando</Button>
                    <Button variant="red">Apagar</Button>
                </div>
            </form>
        </Modal>
    )
}
