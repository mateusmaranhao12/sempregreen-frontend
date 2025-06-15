'use client'

import Input from '@/components/inputs/InputText'
import Select from '@/components/inputs/InputSelect'
import Button from '@/components/buttons/Button'

interface AdminSearchControlsProps {
    search: string
    onSearchChange: (value: string) => void
    selectedOption: string
    onOptionChange: (value: string) => void
    onSubmit?: () => void
    totalSelecionados?: string
}

export default function AdminSearchControls({
    search,
    onSearchChange,
    selectedOption,
    onOptionChange,
    onSubmit,
    totalSelecionados = '0 de 100 selecionados',
}: AdminSearchControlsProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-2">
            <Input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Pesquisar"
                className="w-full sm:w-64"
            />

            <Select
                value={selectedOption}
                onChange={(e) => onOptionChange(e.target.value)}
                className="w-full sm:w-64"
            >
                <option value="">--------</option>
                <option value="excluir">Excluir</option>
                <option value="ativar">Ativar</option>
            </Select>

            <Button variant="gray" onClick={onSubmit}>
                Ir
            </Button>

            <span className="text-sm text-gray-600">{totalSelecionados}</span>
        </div>
    )
}
