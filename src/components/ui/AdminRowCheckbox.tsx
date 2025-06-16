'use client'

interface AdminRowCheckboxProps {
    isChecked: boolean
    onChange: () => void
}

export default function AdminRowCheckbox({ isChecked, onChange }: AdminRowCheckboxProps) {
    return (
        <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            className="cursor-pointer"
        />
    )
}
