import Image from 'next/image';
import logo from '../app/assets/logo_completa.png'

export default function Logo() {
    return (
        <div className="mb-6 w-[400px] h-auto max-w-full">
            <Image
                src={logo}
                alt="Logo SempreGreen"
                layout="responsive"
                width={700}
                height={300}
            />
        </div>
    );
}
