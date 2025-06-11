import { useState } from "react";
import { FaPause, FaSyncAlt, FaVolumeUp } from "react-icons/fa";

export default function StatusBar() {

    const [avisoSonoro, setAvisoSonoro] = useState(false)
    const [partidasPausadas, setPartidasPausadas] = useState(false)
    const [atualizar, setAtualizar] = useState(true)

    return (
        <div className="bg-teal-700 text-white px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-sm">
            <div className="font-bold text-yellow-400 uppercase">
                Administrativo - Full <span className="lowercase">(60 dias restantes)</span>
            </div>

            <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={avisoSonoro}
                        onChange={() => setAvisoSonoro(!avisoSonoro)}
                    />
                    Aviso Sonoro <FaVolumeUp size={14} />
                </label>

                <label className="flex items-center gap-1 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={partidasPausadas}
                        onChange={() => setPartidasPausadas(!partidasPausadas)}
                    />
                    (Live) Partidas Pausadas <FaPause size={14} />
                </label>

            </div>
            <label className="flex items-center gap-1 cursor-pointer text-blue-400 font-semibold">
                <input
                    type="checkbox"
                    checked={atualizar}
                    onChange={() => setAtualizar(!atualizar)}
                />
                Atualizar Automaticamente <FaSyncAlt size={14} />
            </label>
        </div>
    );
}
