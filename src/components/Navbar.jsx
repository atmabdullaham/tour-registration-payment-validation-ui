import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useAdmin from "../hooks/useAdmin";
import Logo from "./Logo";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Logged out");
    });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "text-brand-primary border-brand-accent font-bold animated-border"
                : "hover:text-brand-secondary"
          }
        >
          হোম
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/my-registration"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "text-brand-primary border-brand-accent font-bold animated-border"
                : "hover:text-brand-secondary"
          }
        >
          আমার রেজিস্ট্রেশন
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "text-brand-primary border-brand-accent font-bold animated-border"
                : "hover:text-brand-secondary"
          }
        >
          যোগাযোগ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md border-b-2 border-brand-primary/10 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden p-2 text-brand-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-brand-light"
          >
            {navOptions}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost bg-transparent hover:bg-transparent border-0 text-xl pl-0 sm:pl-4"
        >
          <Logo />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2text-gray-700 font-medium">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end pr-0 sm:pr-4">
        <NavLink
          className="btn  btn-sm sm:btn-md rounded-full text-white bg-brand-primary hover:bg-brand-secondary border-none shadow-md shadow-brand-primary/30 mr-2"
          to="/registration"
        >
          রেজিস্ট্রেশন
        </NavLink>
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ring-2 ring-brand-secondary ring-offset-base-100 ring-offset-2"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={
                    user?.photoURL ||
                    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  }
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52 border border-gray-100">
              <li className="px-4 py-2 border-b border-gray-100 text-brand-primary font-bold">
                {user?.displayName}
              </li>
              {isAdmin && (
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="text-brand-primary font-semibold"
                  >
                    অ্যাডমিন ড্যাশবোর্ড
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-brand-accent hover:bg-red-50 mt-1 font-semibold"
                >
                  লগ আউট
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            className="btn btn-sm sm:btn-md bg-white border border-brand-primary text-brand-primary hover:bg-brand-light font-semibold rounded-full px-4 sm:px-6"
            to="/login"
          >
            লগইন
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
