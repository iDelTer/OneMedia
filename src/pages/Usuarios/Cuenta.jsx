import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserSession } from "../../utils/UserProfile";
import "./cuenta.css";

function Cuenta() {
  const navigate = useNavigate();

  const [session, setSession] = useState("");
  const [content, setContent] = useState("");

  const toggleContent = (cont) => {
    setContent(cont);
    console.log(content);
  };

  useEffect(() => {
    const sessionid = getUserSession();
    !sessionid ? navigate("/login") : setSession(sessionid);
    setContent("completeds");
  }, []);

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

      <div id="account-content">
        <div id="account-nav">
          <ul>
            <li
              className={content === "completeds" ? "selected" : ""}
              onClick={() => toggleContent("completeds")}
            >
              Completadas
            </li>
            <li
              className={content === "likeds" ? "selected" : ""}
              onClick={() => toggleContent("likeds")}
            >
              Favoritos
            </li>
            <li
              className={content === "lists" ? "selected" : ""}
              onClick={() => toggleContent("lists")}
            >
              Listas
            </li>
          </ul>
        </div>
        <div id="account-items">
          {(() => {
            if (content === "completeds") {
              return <p>Completado</p>;
            }
            if (content === "likeds") {
              return <p>Favoritos</p>;
            }
            if (content === "lists") {
              return <p>Listas</p>;
            }
          })()}
        </div>
      </div>
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
