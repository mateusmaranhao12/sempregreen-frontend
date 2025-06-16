'use client'

import Input from '@/components/inputs/InputText'

interface AdminSearchInputProps {
    value: string
    onChange: (value: string) => void
    onSubmit?: () => void
}

export default function AdminSearchInput({
    value,
    onChange,
    onSubmit
}: AdminSearchInputProps) {
    return (
        <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Pesquisar"
            className="w-full sm:w-64"
            onKeyDown={(e) => e.key === 'Enter' && onSubmit?.()}
        />
    )
}
