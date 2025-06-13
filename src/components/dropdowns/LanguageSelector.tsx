'use client'

import br from '@/app/assets/br.png'
import es from '@/app/assets/esp.png'
import en from '@/app/assets/eua.png'
import pt from '@/app/assets/pt.png'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import Select from '../inputs/InputSelect'

const languages = [
    { label: 'Português - BR', value: 'pt-br', flag: br },
    { label: 'Português - PT', value: 'pt-pt', flag: pt },
    { label: 'English', value: 'en', flag: en },
    { label: 'Espanhol', value: 'es', flag: es },
]

export default function LanguageSelector() {
    const [selected, setSelected] = useState(languages[0])

    return (
        <div className="relative w-max">
            <div className=" text-white text-sm bg-[#0e2a20] px-2 py-1 rounded select-none relative z-0 pointer-events-none">
                <Image src={selected.flag} alt={selected.label} width={24} height={16} />
                <span>{selected.label.split(' ')[0]}</span>
                <FaChevronDown size={12} className="text-white" />
            </div>

            <Select
                value={selected.value}
                onChange={(e) => {
                    const lang = languages.find((l) => l.value === e.target.value)
                    if (lang) setSelected(lang)
                }}
                variant="transparent"
                className="absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
            >
                {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                        {lang.label}
                    </option>
                ))}
            </Select>
        </div>

    )
}
