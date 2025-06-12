'use client'
import DashboardButtons from '../buttons/DashboardButtons'
import { useRouter } from 'next/navigation'
import { MdMenu } from 'react-icons/md'
import {
    FaFlag,
    FaCalculator,
    FaQuestionCircle,
    FaShieldAlt,
    FaChartLine
} from 'react-icons/fa'


export default function NavMenu() {

    const router = useRouter()

    const buttons = [
        {
            icon: <MdMenu size={24} />,
            label: 'Entradas',
            bg: 'bg-green-600',
            onClick: () => router.push('/dashboard')
        },
        {
            icon: <FaFlag size={20} />,
            label: 'Filtros',
            bg: 'bg-blue-400',
            onClick: () => router.push('/dashboard/filtros-dashboard')
        },
        {
            icon: <FaCalculator size={20} />,
            label: 'Calculadora',
            bg: 'bg-blue-600 text-white'
        },
        {
            icon: <FaQuestionCircle size={20} />,
            label: 'Suporte',
            bg: 'bg-rose-400',
            onClick: () => window.open('https://wa.link/48u9hf', '_blank')
        },
        {
            icon: <FaShieldAlt size={20} />,
            label: 'Planos',
            bg: 'bg-yellow-500'
        },
        {
            icon: <FaChartLine size={20} />,
            label: 'Gestão',
            bg: 'bg-[#00112e] text-white'
        },
    ]
    
    return (
        <nav className="flex flex-wrap justify-center gap-2 px-4 py-2 bg-[#0e2a20]">
            {buttons.map(({ icon, label, bg, onClick }) => (
                <DashboardButtons key={label} icon={icon} label={label} bg={bg} onClick={onClick} />
            ))}
        </nav>
    );
}
