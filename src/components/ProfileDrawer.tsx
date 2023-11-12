import { Link, Outlet } from "react-router-dom";
import LoginButton from "../pages/Login";
import LogoutButton from "../pages/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "./Avatar";

const ProfileDrawer = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <Avatar />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={`profile`}>Profile</Link>
          </li>
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDrawer;
