import Select from '../inputs/InputSelect'

export default function SidebarFilters() {
    return (
        <aside className="bg-white shadow rounded p-4 w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Filtro</h2>
            <div className="flex flex-col gap-4">
                {[
                    { label: 'por membro da equipe' },
                    { label: 'por status de superusuário' },
                    { label: 'por ativo' },
                    { label: 'por grupos' },
                ].map(({ label }, index) => (
                    <div key={index}>
                        <label className="text-sm font-medium">{label}</label>
                        <Select>
                            <option>Todos</option>
                        </Select>
                    </div>
                ))}
            </div>
        </aside>
    )
}
