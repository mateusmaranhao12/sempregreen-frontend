import { FaCalculator, FaTrash } from 'react-icons/fa';
import MatchActionsButton from '../../buttons/MatchActionsButton';

export default function MatchActions() {
  return (
    <div className="flex flex-row md:flex-col gap-2">
      <MatchActionsButton bgColor='bg-green-600' textColor='text-white'>
        <FaCalculator />
      </MatchActionsButton>
      <MatchActionsButton bgColor='bg-red-500' textColor='text-white'>
        <FaTrash />
      </MatchActionsButton>
    </div>
  );
}
