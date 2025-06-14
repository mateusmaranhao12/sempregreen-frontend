'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/buttons/Button'

function extractSlug(path: string): string {
    const parts = path.split('/')
    const slug = parts.find((p, i) => parts[i - 1] === 'admin')
    return slug || 'item'
}

function formatLabel(slug: string): string {
    const palavras = slug.split('-')
    if (palavras.length === 1) return slug.charAt(0).toUpperCase() + slug.slice(1)

    return palavras
        .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ')
}

export default function AdminAddButton() {
    const pathname = usePathname()
    const slug = extractSlug(pathname)
    const label = formatLabel(slug)

    return (
        <Link href={`/admin/${slug}/adicionar`}>
            <Button variant="gray">Adicionar {label}</Button>
        </Link>
    )
}