import { useEffect, useState } from 'react'

export function useSelection<T extends { id: string | number }>(items: T[]) {
    const [selectedIds, setSelectedIds] = useState<(string | number)[]>([])

    const toggle = (id: string | number) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    const toggleAll = () => {
        setSelectedIds(prev =>
            prev.length === items.length ? [] : items.map(item => item.id)
        )
    }

    const isSelected = (id: string | number) => selectedIds.includes(id)
    const isAllSelected = selectedIds.length === items.length

    // SEGURANÇA: Evita loop infinito ao filtrar por IDs válidos
    useEffect(() => {
        const ids = items.map(item => item.id)
        setSelectedIds(prev => prev.filter(id => ids.includes(id)))
    }, [items.length])


    return {
        selectedIds,
        toggle,
        toggleAll,
        isSelected,
        isAllSelected
    }
}
