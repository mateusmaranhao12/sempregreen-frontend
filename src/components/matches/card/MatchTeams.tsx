import { FiCopy } from "react-icons/fi";

export default function MatchTeams() {

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="text-sm font-semibold space-y-3">
      <div className="flex items-center justify-center md:justify-start gap-2">
        <span>New York Yankees (M Fried)</span>
        <button
          onClick={() => handleCopy('New York Yankees (M Fried)')}
          className="text-blue-500 hover:text-black cursor-pointer"
        >
          <FiCopy size={16} />
        </button>
      </div>
      <div className="flex items-center justify-center md:justify-start gap-2">
        <span>Kansas City Royals (N Cameron)</span>
        <button
          onClick={() => handleCopy('Kansas City Royals (N Cameron)')}
          className="text-blue-500 hover:text-black cursor-pointer"
        >
          <FiCopy size={16} />
        </button>
      </div>
    </div>
  );
}