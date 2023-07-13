import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserSession } from "../../utils/UserProfile";
import "./cuenta.css";

function Cuenta() {
  const navigate = useNavigate();

  const [session, setSession] = useState("");

  useEffect(() => {
    const sessionid = getUserSession();
    !sessionid ? navigate("/login") : setSession(sessionid);
  });

  return (
    <article id="account-box">
      <article className="profile-header">
        <ul>
          <li className="profile-list-item">
            <div className="profile-banner profile-picture-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png?w=740&t=st=1689268447~exp=1689269047~hmac=43c4a3456bcb5db44949ee13c3f5cafa576b7a3ae5fa5c4f7fa240fec7e7eaf8"
                className="profile-picture"
              />
            </div>
            <div className="profile-banner profile-information-box">
              <span className="profile-information-username">Nombre</span>
              <span className="profile-information-joined">
                Miembro desde ...
              </span>
            </div>
          </li>
          <li className="profile-list-item">
            {/* Listas, likes, etc */}
            <ul className="stats-list">
              <li>
                <div className="profile-stats-box">
                  <span>
                    <i className="bi bi-eye-fill"></i>
                  </span>
                  <span>Completados</span>
                </div>
              </li>
              <li>
                <div className="profile-stats-box">
                  <span>
                    <i className="bi bi-heart-fill"></i>
                  </span>
                  <span>Gustados</span>
                </div>
              </li>
              <li>
                <div className="profile-stats-box">
                  <span>
                    <i className="bi bi-bookmark-fill"></i>
                  </span>
                  <span>Listas</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </article>
      <p>{`Tu id de sesión es: ${session}`}</p>

      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/logout">Logout</Link>
    </article>
  );
}

export default Cuenta;
