import Image from 'next/image';
import logo from '../../app/assets/logo_completa_menor.png'

export default function Logo() {
    return (
        <div className="w-full max-w-[300px] h-auto">
            <Image
                src={logo}
                alt="Logo SempreGreen"
                width={200}
                height={100}
                className="w-full h-auto"
            />
        </div>
    );
}
