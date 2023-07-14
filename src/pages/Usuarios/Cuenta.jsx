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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRuis3naVOidfr-89QVZTFyAwnncSVE-FanR0eUO44l2T0-42F31HNW0aSrrQSmXEcyI&usqp=CAU"
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
                  <div className="profile-stats-icons">
                    <span className="stats-icon">
                      <i className="bi bi-eye-fill"></i>
                    </span>
                  </div>
                  <div className="profile-stats-texts">
                    <span className="stats-value">0</span>
                    <span className="stats-text">Completados</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile-stats-box">
                  <div className="profile-stats-icons">
                    <span className="stats-icon">
                      <i className="bi bi-heart-fill"></i>
                    </span>
                  </div>
                  <div className="profile-stats-texts">
                    <span className="stats-value">0</span>
                    <span className="stats-text">Favoritos</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile-stats-box">
                  <div className="profile-stats-icons">
                    <span className="stats-icon">
                      <i className="bi bi-bookmark-fill"></i>
                    </span>
                  </div>
                  <div className="profile-stats-texts">
                    <span className="stats-value">0</span>
                    <span className="stats-text">Listas</span>
                  </div>
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
