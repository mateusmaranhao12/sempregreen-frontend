import MatchActions from "./MatchActions";
import MatchBookmakers from "./MatchBookmakers";
import MatchHeaderInfo from "./MatchHeaderInfo";
import MatchOdds from "./MatchOdds";
import MatchTags from "./MatchTags";
import MatchTeams from "./MatchTeams";

export default function MatchCard() {
    return (
        <div className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-4 text-black text-center md:text-left">
            {/* Ações (calculadora/lixeira) à esquerda */}
            <div className="flex justify-center md:justify-start items-center">
                <MatchActions />
            </div>

            {/* Info central (porcentagem, times, tags) */}
            <div className="flex-1 space-y-2">
                <MatchHeaderInfo />
                <MatchTeams />
                <MatchTags />
            </div>

            {/* Odds e casas de aposta centralizados verticalmente */}
            <div className="flex flex-col items-center justify-center gap-2">
                <MatchOdds />
                <MatchBookmakers />
            </div>
        </div>
    );
}
