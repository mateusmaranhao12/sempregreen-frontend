import { FiClock } from "react-icons/fi";
import MatchPercent from "./MatchPercent";

export default function MatchHeaderInfo() {
    return (
        <div className="flex flex-col md:justify-start justify-center text-md font-bold">
            <MatchPercent value="8,09%" colorClass="text-black" />
            <div className="flex items-center gap-1 text-sm text-gray-600">
                <FiClock size={16} />
                <span>10/06 20:41</span>
            </div>
        </div>
    );
}
