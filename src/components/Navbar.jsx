import Logo from "../assets/logo.png";
import { Link, matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Demo", link: "/demo" },
    { name: "About", link: "/about" },
  ];

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-gray-50" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} height={40} width={150} alt="tracksoft-logo" />
        </Link>

        {/* NavLinks */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {navLinks.map((ele, index) => {
              return (
                <Link to={ele.link} key={index}>
                  <div
                    className={`cursor-pointer font-semibold ${
                      matchRoute(`${ele.link}`)
                        ? "text-[#15BCD1]"
                        : "text-black"
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
              <button className="rounded-[8px] border border-richblack-700 px-[12px] py-[8px]">
                Log in
              </button>
            </Link>

            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 px-[12px] py-[8px]">
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
