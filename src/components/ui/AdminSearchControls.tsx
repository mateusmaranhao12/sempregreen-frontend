'use client'

import AdminSearchInput from './AdminSearchInput'
import Select from '@/components/inputs/InputSelect'
import Button from '@/components/buttons/Button'

interface AdminSearchControlsProps {
  search: string
  onSearchChange: (value: string) => void
  selectedOption: string
  onOptionChange: (value: string) => void
  onSubmit?: () => void
  totalSelecionados?: string
  actions?: { label: string; value: string }[]
  hideTotalSelecionados?: boolean
  hideSearchInput?: boolean
}

export default function AdminSearchControls({
  search,
  onSearchChange,
  selectedOption,
  onOptionChange,
  onSubmit,
  totalSelecionados = '0 de 100 selecionados',
  actions = [
    { label: '--------', value: '' },
    { label: 'Excluir', value: 'excluir' },
    { label: 'Ativar', value: 'ativar' }
  ],
  hideTotalSelecionados = false,
  hideSearchInput = false
}: AdminSearchControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      {!hideSearchInput && (
        <AdminSearchInput
          value={search}
          onChange={onSearchChange}
          onSubmit={onSubmit}
        />
      )}

      <Select
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
        className="w-full sm:w-64"
      >
        {actions.map((action, index) => (
          <option key={index} value={action.value}>
            {action.label}
          </option>
        ))}
      </Select>

      <Button variant="gray" onClick={onSubmit}>
        Ir
      </Button>

      {!hideTotalSelecionados && (
        <span className="text-sm text-gray-600">{totalSelecionados}</span>
      )}
    </div>
  )
}
