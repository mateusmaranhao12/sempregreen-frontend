import DashboardButtons from '../dashboard/DashboardButtons'
import { MdMenu } from 'react-icons/md';
import {
    FaFlag,
    FaCalculator,
    FaQuestionCircle,
    FaShieldAlt,
    FaChartLine
} from 'react-icons/fa';

const buttons = [
    { icon: <MdMenu size={24} />, label: 'Entradas', bg: 'bg-green-600' },
    { icon: <FaFlag size={20} />, label: 'Filtros', bg: 'bg-blue-400' },
    { icon: <FaCalculator size={20} />, label: 'Calculadora', bg: 'bg-blue-600 text-white' },
    { icon: <FaQuestionCircle size={20} />, label: 'Suporte', bg: 'bg-rose-400' },
    { icon: <FaShieldAlt size={20} />, label: 'Planos', bg: 'bg-yellow-500' },
    { icon: <FaChartLine size={20} />, label: 'Gestão', bg: 'bg-[#00112e] text-white' },
];

export default function NavMenu() {
    return (
        <nav className="flex flex-wrap justify-center gap-2 px-4 py-2 bg-[#0e2a20]">
            {buttons.map(({ icon, label, bg }) => (
                <DashboardButtons key={label} icon={icon} label={label} bg={bg} />
            ))}
        </nav>
    );
}
