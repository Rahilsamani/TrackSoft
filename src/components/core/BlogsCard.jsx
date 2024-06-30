import { FaCalendar, FaChevronRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogsCard = ({ image, date, author, heading, description, link }) => {
  return (
    <div className="border-custom rounded-lg p-4 group hover:bg-[#fff] transition-colors duration-200 w-fit flex flex-col h-[480px]">
      <img className="object-cover rounded-lg mb-5" src={image} alt="blog" />

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 items-center">
          <FaCalendar />
          <p className="text-xs text-grey">{date}</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaUser />
          <p className="text-xs text-grey">{author}</p>
        </div>
      </div>

      <div className="text-blue text-3xl font-semibold mb-3">
        <h3>{heading}</h3>
      </div>

      <div className="text-grey mb-5">{description}</div>

      <div className="border-custom rounded-lg px-2 py-1 group hover:bg-[#fff] transition-colors duration-200 w-fit">
        <Link target="_blank" to={link}>
          <button className="flex gap-2 items-center group-hover:gap-4 transition-all duration-200">
            Learn More
            <div className="bg-[#130969] text-white p-1 rounded-md group-hover:gap-4 transition-all duration-200">
              <FaChevronRight size={15} />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
