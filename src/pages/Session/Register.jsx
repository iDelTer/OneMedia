import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setUserSession, getLocalUserSession } from "../../utils/UserProfile";
import { connect, useDispatch } from "react-redux";
import { setMessage } from "../../actions";
import { error_messages as emsg } from "../../utils/error_messages";
import "./login_and_register.css";

function Register(props) {
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
        if (message === 200) {
          props.setMessage(emsg["es"]["M4_CON003"]);
          navigate("/account");
        } else {
          console.log(message);
          if (
            message ===
            `UNEXPECTED TOKEN '<', "<!DOCTYPE "... IS NOT VALID JSON`
          ) {
            props.setMessage(emsg["es"]["E5_CON002"]);
          }
        }
      })
      .catch((error) => {
        console.error(error);
        props.setMessage(error);
      });
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

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(null, mapDispatchToProps)(Register);

// export default Register;
