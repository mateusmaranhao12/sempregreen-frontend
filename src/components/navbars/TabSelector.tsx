import { useState } from "react";
import { FaFire } from "react-icons/fa";
import MatchListPre from "../matches/MatchListPre";
import MatchListEV from "../matches/MatchListEV";
import MatchListLive from "../matches/MatchListLive";

export default function TabSelector() {

    const [tab, setTab] = useState<'pre' | 'live' | 'ev'>('pre')
    const tabStyle = (active: boolean) => `flex-1 flex items-center cursor-pointer justify-center gap-2 px-4 py-2 font-bold border border-green-800 
     ${active ? 'bg-green-600' : 'bg-[#083e27]'} 
     text-white transition-colors duration-200`;

    return (
        <div className="pt-4">
            <div className="flex rounded overflow-hidden border border-green-800">
                <button className={tabStyle(tab === 'pre')} onClick={() => setTab('pre')}>
                    <FaFire /> Pré
                </button>
                <button className={tabStyle(tab === 'live')} onClick={() => setTab('live')}>
                    <FaFire /> Live
                </button>
                <button className={tabStyle(tab === 'ev')} onClick={() => setTab('ev')}>
                    <FaFire /> EV
                </button>
            </div>

            <div className="mt-4">
                {tab === 'pre' && <MatchListPre />}
                {tab === 'live' && <MatchListLive />}
                {tab === 'ev' && <MatchListEV />}
            </div>
        </div>
    );
}
