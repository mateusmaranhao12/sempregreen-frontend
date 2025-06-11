import { FaArrowUp, FaArrowDown, FaFlag } from 'react-icons/fa';

export default function MatchOdds() {
    return (
        <div className="flex justify-start text-sm md:text-1xl font-bold text-black">
            <div className="pr-4">
                <div className="flex items-center gap-1">
                    <FaArrowUp className="text-green-600" />
                    Acima 0.5 - Home
                </div>
                <div className="flex items-center justify-center gap-1 text-center">
                    <span>1.98</span>
                    <FaFlag className="text-black" />
                </div>
            </div>

            <div>
                <div className="flex items-center gap-1">
                    <FaArrowDown className="text-red-600" />
                    Abaixo 0.5 - Home
                </div>
                <div className="flex items-center justify-center gap-1 text-center">
                    <span>2.38</span>
                    <FaFlag className="text-black" />
                </div>
            </div>
        </div>
    );
}
