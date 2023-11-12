import { Link, Outlet } from "react-router-dom";
import ProfileDrawer from "./ProfileDrawer";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../pages/Logout";
import LoginButton from "../pages/Login";

const Drawer = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Moolah UI</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to={`home`}>Home</Link>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <ProfileDrawer />
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div id="detail">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          <li>
            <Link to={`home`}>Home</Link>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <Link to={`profile`}>Profile</Link>
          </li>
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
