import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ExitButton = ({ to }: { to: string }) => {
  return (
    <Link to={to}>
      <span className="flex items-center text-lg text-white hover:text-yellow-200 transition ease-in-out">
        <FaArrowLeft />
        <span className="ml-2">Back</span>
      </span>
    </Link>
  );
};
