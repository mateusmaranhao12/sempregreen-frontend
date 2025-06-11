import MatchBookmakersButton from "../../buttons/MatchBookmakersButton";

export default function MatchBookmakers() {
    return (
        <div className="flex gap-2 md:justify-start justify-center">
            <MatchBookmakersButton label="Betfair SB" bgColor="bg-black" textColor="text-yellow-300" />
            <MatchBookmakersButton label="Betfast" bgColor="bg-green-600" textColor="text-white" />
        </div>
    );
}
