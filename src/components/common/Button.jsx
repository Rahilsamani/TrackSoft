import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Button = ({ text, link }) => {
  const naviagte = useNavigate();
  return (
    <div className="border-custom rounded-lg px-2 py-1 group hover:bg-[#fff] transition-colors duration-200 w-fit">
      <button
        className="flex gap-2 items-center group-hover:gap-4 transition-all duration-200 text-lg"
        onClick={() => naviagte(link)}
      >
        {text}{" "}
        <div className="bg-[#130969] text-white p-1 rounded-md group-hover:gap-4 transition-all duration-200">
          <FaChevronRight size={15} />
        </div>
      </button>
    </div>
  );
};

export default Button;
