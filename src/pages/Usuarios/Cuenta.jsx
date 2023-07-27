import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getLocalUserSession, getUserData } from "../../utils/UserProfile";
import "./cuenta.css";

function Cuenta() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [content, setContent] = useState("");
  const [userData, setUserData] = useState([]);

  const toggleContent = (cont) => {
    setContent(cont);
    console.log(content);
  };

  useEffect(() => {
    const sessionid = getLocalUserSession();
    if (!sessionid) return navigate("/login");
    setContent("completeds");

    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (e) {
        setMessage(e);
      }
    };

    fetchData();
  }, []);

  const categories = {
    movies: "películas",
    series: "series",
    games: "juegos",
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString(undefined, options);
    return formattedDate;
  };

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
              <span className="profile-information-username">
                {userData["user"]
                  ? userData.user["name"]
                  : "Usuario no encontrado"}
              </span>
              <span className="profile-information-joined">
                Miembro desde{" "}
                {userData["user"]
                  ? formatDate(userData.user["created_at"])
                  : "Fecha desconocida"}
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
                    <span className="stats-value">
                      {userData["completeds"]
                        ? userData["completeds"]["movies"].length
                        : "0"}
                    </span>
                    <span className="stats-text">Películas Completadas</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile-stats-box">
                  <div className="profile-stats-icons">
                    <span className="stats-icon">
                      <i className="bi bi-eye-fill"></i>
                    </span>
                  </div>
                  <div className="profile-stats-texts">
                    <span className="stats-value">
                      {userData["completeds"]
                        ? userData["completeds"]["series"].length
                        : "0"}
                    </span>
                    <span className="stats-text">Series Completadas</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="profile-stats-box">
                  <div className="profile-stats-icons">
                    <span className="stats-icon">
                      <i className="bi bi-eye-fill"></i>
                    </span>
                  </div>
                  <div className="profile-stats-texts">
                    <span className="stats-value">
                      {userData["completeds"]
                        ? userData["completeds"]["games"].length
                        : "0"}
                    </span>
                    <span className="stats-text">Juegos Completados</span>
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
                    <span className="stats-value">
                      {userData["likeds"] ? userData.likeds.length : "0"}
                    </span>
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
                    <span className="stats-value">
                      {userData["lists"] ? userData["lists"].length : "0"}
                    </span>
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
              if (userData && userData.completeds) {
                return Object.entries(userData.completeds).map(
                  ([category, items], index) => {
                    return (
                      <div key={index}>
                        <h3>
                          {categories[category].charAt(0).toUpperCase() +
                            categories[category].slice(1)}
                        </h3>
                        <p>{items.length} completadas</p>
                        {/* <ul>
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul> */}
                      </div>
                    );
                  }
                );
              } else {
                return <p>No hay datos completados.</p>;
              }
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

      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/logout">Logout</Link>
    </article>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(null, mapDispatchToProps)(Cuenta);

// export default Cuenta;
