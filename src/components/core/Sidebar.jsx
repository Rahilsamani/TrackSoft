import { GiProgression } from "react-icons/gi";
import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";

const Sidebar = () => {
  const sideLinks = [
    { icon: "VscGraphLine", name: "Track", link: "/dashboard/track" },
    {
      icon: "VscDeviceCamera",
      name: "Screenshot",
      link: "/dashboard/screenshot",
    },
    {
      icon: "GiProgression",
      name: "Progress",
      link: "/dashboard/progress",
    },
    { icon: "VscCalendar", name: "Holiday", link: "/dashboard/holiday" },
    { icon: "VscFoldDown", name: "Leave", link: "/dashboard/leave" },
    { icon: "VscGraphScatter", name: "Payroll", link: "/dashboard/payroll" },
    { icon: "VscOrganization", name: "Members", link: "/dashboard/members" },
    { icon: "VscCloudUpload", name: "File Upload", link: "/dashboard/upload" },
  ];

  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="md:flex hidden h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-grey bg-slate-800 py-10">
      <div className="flex flex-col gap-2">
        {sideLinks.map((link, index) => {
          const Icon = link.icon.startsWith("Vsc")
            ? Icons[link.icon]
            : GiProgression;
          return (
            <NavLink
              to={link.link}
              key={index}
              className={`relative px-8 py-2 text-sm font-medium ${
                matchRoute(link.link)
                  ? "bg-white text-black"
                  : "bg-opacity-0 text-slate-400"
              } transition-all duration-200`}
            >
              <span
                className={`absolute left-0 top-0 h-full w-[0.15rem] bg-green-500 ${
                  matchRoute(link.link) ? "opacity-100" : "opacity-0"
                }`}
              ></span>

              <div className="flex items-center gap-x-2">
                {Icon && <Icon className="text-lg" />}
                <span>{link.name}</span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
