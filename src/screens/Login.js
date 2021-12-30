import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { setLoggedUser } = useContext(AuthContext);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    console.log("logging in customer", userId);
    setUserId(1);
    setLoggedUser(userId);
  }, []);

  return (
    <div className="align-items-center">
      <h2 className="text-center">LOGGING IN...</h2>
      {/* <form onSubmit={logIn}>
        <label>
          User ID:
          <input type="text" name="id" onChange={(input) => setUserId(input)} />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={(input) => setPassword(input)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

export default Login;
