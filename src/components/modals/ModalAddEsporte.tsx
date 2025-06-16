'use client'

import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Modal from '../ui/Modal'

interface NovoEsportePayload {
    nome: string
    modalidade: string
}

interface ModalAddEsporteProps {
    onClose: () => void
    onSave?: (data: NovoEsportePayload) => void
}

export default function ModalAddEsporte({ onClose, onSave }: ModalAddEsporteProps) {
    const [nome, setNome] = useState('')
    const [modalidade, setModalidade] = useState('')

    const handleSubmit = () => {
        const payload: NovoEsportePayload = { nome, modalidade }
        onSave?.(payload)
        onClose()
    }

    return (
        <Modal title="Adicionar Esporte" onClose={onClose}>
            <form className="space-y-6">
                {/* Nome */}
                <div>
                    <label className="block text-sm font-medium mb-1">Nome:</label>
                    <Input
                        placeholder="Digite o nome do esporte"
                        className="w-full"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                {/* Modalidade */}
                <div>
                    <label className="block text-sm font-medium mb-1">Modalidade:</label>
                    <Select
                        className="w-full"
                        value={modalidade}
                        onChange={(e) => setModalidade(e.target.value)}
                    >
                        <option value="">--------</option>
                        <option value="Pré">Pré</option>
                        <option value="Live">Live</option>
                        <option value="EV">EV</option>
                    </Select>
                </div>

                {/* Botões */}
                <div className="pt-6 flex flex-wrap gap-2">
                    <Button variant="darkgreen" type="button" onClick={handleSubmit}>
                        SALVAR
                    </Button>
                    <Button variant="darkgreen" type="button">
                        Salvar e adicionar outro(a)
                    </Button>
                    <Button variant="darkgreen" type="button">
                        Salvar e continuar editando
                    </Button>
                </div>
            </form>
        </Modal>
    )
}
