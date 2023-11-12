import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const HOME = import.meta.env.VITE_AUTH0_HOME_URL;

  return (
    <div onClick={() => logout({ logoutParams: { returnTo: HOME } })}>
      Log Out
    </div>
  );
};

export default LogoutButton;
