import Button from '../buttons/Button'
import Select from '../inputs/InputSelect'
interface SidebarFiltersProps {
    onClose?: () => void
    filters: {
        label: string
        options?: string[]
        name?: string
        value?: string
        onChange?: (value: string) => void
    }[]
}

export default function SidebarFilters({ onClose, filters }: SidebarFiltersProps) {
    return (
        <aside className="bg-white shadow rounded p-4 w-full h-fit">
            {onClose && (
                <Button
                    onClick={onClose}
                    className="text-xs px-2 py-1 mb-2 self-end"
                    variant="gray"
                >
                    Ocultar filtros
                </Button>
            )}

            <h2 className="text-lg font-semibold mb-2">Filtro</h2>
            <div className="flex flex-col gap-4">
                {filters.map(({ label, options = ['Todos'], value, onChange }, index) => (
                    <div key={index}>
                        <label className="text-sm font-medium">{label}</label>
                        <Select value={value} onChange={(e) => onChange?.(e.target.value)}>
                            {options.map((opt, i) => (
                                <option key={i} value={opt}>{opt}</option>
                            ))}
                        </Select>
                    </div>
                ))}
            </div>
        </aside>
    )
}
