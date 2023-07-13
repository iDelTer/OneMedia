import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUserSession, setUserSession } from "../../utils/UserProfile";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [sessionid, setSessionid] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSessionid(setUserSession());
  };

  useEffect(() => {
    const session = getUserSession();
    if (session) navigate("/account");
    setLoaded(true);
  });

  const handleChange = (e) => {
    console.log(e);
    e.target.id === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div id="form-box">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Link to="/404">
          <span className="form-forgotten">Contraseña olvidada</span>
        </Link>
        <ul id="form-option">
          <li>
            <button className="btn-register">Registrarme</button>
          </li>
          <li>
            <input type="submit" value="Login" id="btn-login" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Login;
