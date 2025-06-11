'use client';

import Logo from '@/components/Logo';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaSignOutAlt } from 'react-icons/fa';
import country from '../app/assets/br.png';
import NavMenu from './NavMenu';

export default function DashboardHeader() {
    const router = useRouter();

    return (
        <header className="bg-[#0e2a20] text-white px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
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

            <NavMenu />
        </header>
    );
}
