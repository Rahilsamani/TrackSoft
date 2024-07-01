import { FaChevronRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-[#F5F5F5] justify-center items-center py-10">
      <div className="w-11/12">
        <div className="grid grid-cols-4 place-items-start justify-items-center">
          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue text-2xl font-semibold">Quick Links</h3>
            <div className="text-grey flex flex-col gap-2">
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Home
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Features
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  About
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  DashBoard
                </p>
              </div>
            </div>
          </div>
          {/* Features */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue text-2xl font-semibold">Features</h3>
            <div className="text-grey flex flex-col gap-2">
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Time Tracking
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Activity Monitoring
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Screen Monitoring
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Attendance
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Employee Productivity
                </p>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue text-2xl font-semibold">Contact Info</h3>
            <div className="text-grey flex flex-col gap-2">
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  +91 9895749345
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  +91 9898345932
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  tracksoft@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer group">
                <FaChevronRight size={14} className="text-blue" />
                <p className="group-hover:text-black transition-colors duration-200">
                  Navi Mumbai, India
                </p>
              </div>
            </div>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col gap-5">
            <h3 className="text-blue text-2xl font-semibold">Follow Us</h3>
            <div className="text-grey flex flex-col gap-2">
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaFacebookF size={16} className="text-blue" />
                <p className="group-hover:text-black tansition-all duration-200">
                  Facebook
                </p>
              </div>
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaTwitter size={16} className="text-blue" />
                <p className="group-hover:text-black tansition-all duration-200">
                  Twitter
                </p>
              </div>
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaInstagram size={16} className="text-blue" />
                <p className="group-hover:text-black tansition-all duration-200">
                  Instagram
                </p>
              </div>
              <div className="flex items-center group gap-1 cursor-pointer">
                <FaLinkedinIn size={16} className="text-blue" />
                <p className="group-hover:text-black tansition-all duration-200">
                  Linkedin
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-grey mt-10 w-11/12 mx-auto"></div>

        <p className="text-center text-xl mt-5 text-grey">
          Created By <span className="text-blue font-normal">Rahil Ahmed</span>{" "}
          | all rights reserved ©
        </p>
      </div>
    </div>
  );
};

export default Footer;
