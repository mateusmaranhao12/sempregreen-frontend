import MatchCard from "./card/MatchCard";

export default function MatchListPre() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
        </div>
    );
}
