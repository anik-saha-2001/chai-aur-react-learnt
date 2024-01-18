import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h3>Please Login</h3>;

  return (
    <div>
      <h3>Welcome: {user.username}</h3>
      <h3>Password: {user.password}</h3>
    </div>
  );
};

export default Profile;
