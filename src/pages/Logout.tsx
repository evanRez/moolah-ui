import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const CALLBACK = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: CALLBACK } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
