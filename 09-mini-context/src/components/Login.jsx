import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
};

export default Login;
