import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log("user", user);

  return (
    <>
      {isAuthenticated && (
        <div className="card glass mx-auto w-96">
          <figure className="mt-5">
            <img src={user?.picture} alt={user?.name} />
          </figure>
          <div className="card-body text-center">
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
