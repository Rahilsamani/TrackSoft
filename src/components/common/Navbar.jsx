import Logo from "../../assets/logo.png";
import { Link, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "About", link: "/about" },
  ];

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 bg-gray-50 transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <FaUserSecret color="#130969" size={25} />
            <img src={Logo} height={40} width={150} alt="tracksoft-logo" />
          </div>
        </Link>

        {/* NavLinks */}
        <nav className="hidden md:block text-xl">
          <ul className="flex gap-x-6 text-richblack-25">
            {navLinks.map((ele, index) => {
              return (
                <Link to={ele.link} key={index}>
                  <div
                    className={`cursor-pointer font-semibold ${
                      matchRoute(`${ele.link}`)
                        ? "text-blue"
                        : "text-grey"
                    }`}
                  >
                    <li>{ele.name}</li>
                  </div>
                </Link>
              );
            })}
          </ul>
        </nav>

        <div>
          {/* Login / Signup  */}
          <div className="flex gap-2">
            <Link to="/login">
              <button className="rounded-[8px] font-medium border border-neutral-300 px-[12px] py-[8px]">
                Log in
              </button>
            </Link>

            <Link to="/signup">
              <button className="rounded-[8px] font-medium border border-neutral-300 px-[12px] py-[8px]">
                Sign up
              </button>
            </Link>
          </div>

          {/* profile picture */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
