import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { setMessage } from "../../actions";
import {
  getLocalUserSession,
  getRemoteUserSession,
} from "../../utils/UserProfile";
import { error_messages as emsg } from "../../utils/error_messages";
import "./login_and_register.css";

function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const requestData = {};
    formData.forEach((value, key) => {
      requestData[key] = value;
    });

    getRemoteUserSession(JSON.stringify(requestData))
      .then((msg) => {
        if (msg === 200) {
          props.setMessage(emsg["es"]["M4_CON001"]);
          navigate("/account");
        } else {
          props.setMessage(emsg["es"]["E5_CON001"]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const session = getLocalUserSession();
    if (session) navigate("/account");
    setLoaded(true);
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id="form-box">
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@email.com"
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handlePassword}
        />
        <Link to="/404">
          <span className="form-forgotten">Contraseña olvidada</span>
        </Link>
        <ul id="form-option">
          <li>
            <Link to="/register">
              <button className="btn-register">Registrarme</button>
            </Link>
          </li>
          <li>
            <input type="submit" value="Login" id="btn-login" />
          </li>
        </ul>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(null, mapDispatchToProps)(Login);
// export default Login;
