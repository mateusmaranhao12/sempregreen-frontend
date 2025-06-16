'use client'

import Button from '@/components/buttons/Button'
import Select from '@/components/inputs/InputSelect'
import Input from '@/components/inputs/InputText'
import { useState } from 'react'
import Modal from '../ui/Modal'

interface NovaCasaDeApostaPayload {
  nome: string
  icone: File | null
  modality: string
  casaEspelho: string
  substituirDe: string
  substituirPara: string
  comissao: string
  url: string
}

interface ModalAddCasaDeApostaProps {
  onClose: () => void
  onSave?: (data: NovaCasaDeApostaPayload) => void
}

export default function ModalAddCasaDeAposta({ onClose, onSave }: ModalAddCasaDeApostaProps) {
  const [nome, setNome] = useState('')
  const [icone, setIcone] = useState<File | null>(null)
  const [modality, setModality] = useState('')
  const [casaEspelho, setCasaEspelho] = useState('')
  const [substituirDe, setSubstituirDe] = useState('')
  const [substituirPara, setSubstituirPara] = useState('')
  const [comissao, setComissao] = useState('0')
  const [url, setUrl] = useState('')

  const handleSubmit = () => {
    const payload = {
      nome,
      icone,
      modality,
      casaEspelho,
      substituirDe,
      substituirPara,
      comissao,
      url
    }
    onSave?.(payload)
    onClose()
  }

  return (
      <Modal title='Adicionar casa de Aposta' onClose={onClose}>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Nome:</label>
            <Input placeholder="Digite o nome da casa de aposta" className="w-full" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <label
              htmlFor="icone"
              className="bg-gray-200 hover:bg-gray-300 text-sm text-black font-semibold px-3 py-1 rounded cursor-pointer"
            >
              Escolher arquivo
            </label>
            <span className="text-xs text-gray-600 truncate">{icone?.name || 'Nenhum arquivo escolhido'}</span>
            <input
              id="icone"
              type="file"
              className="hidden"
              onChange={(e) => setIcone(e.target.files?.[0] || null)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Modality:</label>
            <Select className="w-full" value={modality} onChange={(e) => setModality(e.target.value)}>
              <option value="">----------</option>
              <option value="Pré">Pré</option>
              <option value="Live">Live</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Casa Espelho:</label>
            <Select className="w-full" value={casaEspelho} onChange={(e) => setCasaEspelho(e.target.value)}>
              <option value="">----------</option>
              <option value="OnaBet - Pré">OnaBet - Pré</option>
              <option value="Bet 7k (live) - Live">Bet 7k (live) - Live</option>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Substituir de:</label>
            <Input placeholder="https://exemplo-antigo.com" className="w-full" value={substituirDe} onChange={(e) => setSubstituirDe(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Substituir para:</label>
            <Input placeholder="https://exemplo-novo.com" className="w-full" value={substituirPara} onChange={(e) => setSubstituirPara(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Comissão:</label>
            <Input type="number" value={comissao} className="w-full" onChange={(e) => setComissao(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">URL:</label>
            <Input placeholder="https://..." className="w-full" value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>

          <div className="pt-6 flex flex-wrap gap-2">
            <Button variant="darkgreen" type="button" onClick={handleSubmit}>SALVAR</Button>
            <Button variant="darkgreen">Salvar e adicionar outro(a)</Button>
            <Button variant="darkgreen">Salvar e continuar editando</Button>
          </div>
        </form>
      </Modal>
  )
}