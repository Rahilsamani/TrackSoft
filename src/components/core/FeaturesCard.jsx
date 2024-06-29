import Button from "../common/Button";
import { FaSearch } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

const FeaturesCard = ({ icon, heading, description }) => {
  return (
    <div className="flex flex-col gap-5 border-custom p-5 rounded-xl h-[280px]">
      <div className="text-blue">
        {icon === "search" ? (
          <FaSearch size={40} />
        ) : icon === "trophy" ? (
          <FaTrophy size={40} />
        ) : (
          <FaCamera size={40} />
        )}
      </div>
      <h3 className="text-blue text-3xl font-semibold">{heading}</h3>
      <p className="text-grey" >{description}</p>
      <Button text={"Learn More"} link={"/"} />
    </div>
  );
};

export default FeaturesCard;