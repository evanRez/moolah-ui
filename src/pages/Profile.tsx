import { useAuth0 } from "@auth0/auth0-react";
import { Suspense } from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log("user", user);

  return (
    <>
      {isAuthenticated && (
        <div className="h-screen text-center">
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
