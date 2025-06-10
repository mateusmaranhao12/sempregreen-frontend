import Image from 'next/image';
import logo from '../app/assets/logo_completa.png'

export default function Logo() {
    return (
        <div className="mb-6">
            <Image src={logo} alt="Logo SempreGreen" width={300} height={200} />
        </div>
    );
}
