'use client';

import Logo from '@/components/Logo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaCalculator, FaChartLine, FaFlag, FaQuestionCircle, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import country from '../app/assets/br.png'
import DashboardButtons from './DashboardButtons'

export default function DashboardHeader() {
    const router = useRouter();

    const buttons = [
        { icon: <MdMenu size={24} />, label: 'Entradas', bg: 'bg-green-600' },
        { icon: <FaFlag size={20} />, label: 'Filtros', bg: 'bg-blue-400' },
        { icon: <FaCalculator size={20} />, label: 'Calculadora', bg: 'bg-blue-600 text-white' },
        { icon: <FaQuestionCircle size={20} />, label: 'Suporte', bg: 'bg-rose-400' },
        { icon: <FaShieldAlt size={20} />, label: 'Planos', bg: 'bg-yellow-500' },
        { icon: <FaChartLine size={20} />, label: 'Gestão', bg: 'bg-[#00112e] text-white' },
    ];

    return (
        <header className="bg-[#0e2a20] text-white px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
                <Logo />
                <div className="text-sm flex items-center gap-2">
                    <Image src={country} alt="Bandeira BR" width={24} height={16} />
                    <span>Português (Brasileiro)</span>
                </div>
                <button
                    onClick={() => router.push('/login')}
                    className="bg-white cursor-pointer text-black px-2 py-1 rounded text-sm font-medium flex items-center gap-1"
                >
                    Sair <FaSignOutAlt size={14} />
                </button>
            </div>

            <nav className="flex gap-2 flex-wrap justify-center">
                {buttons.map(({ icon, label, bg }) => (
                    <DashboardButtons key={label} icon={icon} label={label} bg={bg} />
                ))}
            </nav>
        </header>
    );
}
