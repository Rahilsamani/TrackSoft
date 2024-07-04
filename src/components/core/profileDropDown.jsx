import { useRef, useState } from "react";
import {
  AiOutlineCaretDown,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";
import { FiMonitor, FiImage } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { setToken, setUser } from "../../slices/authSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));
  if (!user) return null;

  const logout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[40px] border rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-slate-700" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          ref={ref}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] overflow-hidden rounded-md border-[1px] border-slate-200 bg-white shadow-xl"
        >
          <div className="pt-2 block md:hidden">
            <Link
              to="/"
              className="flex items-center gap-x-2 px-2 py-1 hover:bg-slate-100"
            >
              <AiOutlineHome />
              <p>Home</p>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-x-2 px-2 py-1 hover:bg-slate-100"
            >
              <AiOutlineInfoCircle />
              <p>About</p>
            </Link>
            <Link
              to="/dashboard/track"
              className="flex items-center gap-x-2 px-2 py-1 hover:bg-slate-100"
            >
              <FiMonitor />
              <p>Track</p>
            </Link>
            <Link
              to="/dashboard/screenshot"
              className="flex items-center gap-x-2 px-2 py-1 hover:bg-slate-100"
            >
              <FiImage />
              <p>Images</p>
            </Link>
          </div>
          <div
            onClick={logout}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 cursor-pointer"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
}
