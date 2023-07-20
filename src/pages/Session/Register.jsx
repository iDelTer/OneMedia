import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setUserSession, getLocalUserSession } from "../../utils/UserProfile";
import "./login_and_register.css";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const requestData = {};
    formData.forEach((value, key) => {
      requestData[key] = value;
    });

    setUserSession(JSON.stringify(requestData))
      .then((message) => {
        if (message === "Sesión iniciada") {
          navigate("/account");
        } else {
          console.log(message);
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    const session = getLocalUserSession();
    if (session) navigate("/account");
  }, []);

  const handleName = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id="form-box">
      <form onSubmit={handleFormSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleName}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleEmail}
          placeholder="email@email.com"
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePassword}
          placeholder="password"
        />
        <ul id="form-option">
          <li>
            <Link to="/register">
              <button className="btn-register">Acceder</button>
            </Link>
          </li>
          <li>
            <input type="submit" value="Crear cuenta" id="btn-submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Register;
