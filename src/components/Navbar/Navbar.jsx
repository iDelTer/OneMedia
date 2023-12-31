import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { askAuthoritation, getLocalUserSession } from "../../utils/UserProfile";
import "./navbar.css";

function Navbar({ msg }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const logOut = getLocalUserSession();
    if (logOut) setShowLogOut(true);
    setShowMessage(msg);
    fetchShowAdmin();
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit(event);
    }
  };

  function closeShow() {
    setShowMessage(false);
  }

  const fetchShowAdmin = async () => {
    try {
      const response = await askAuthoritation();
      if (response.status === 200) {
        setShowAdmin(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="navbar-box">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">
              <span className="navbar-title-text navbar-title-first">One</span>
              <span className="navbar-title-text navbar-title-second">
                Media
              </span>
            </Link>
          </li>
          <li>
            <Link to="/movies">Películas</Link>
          </li>
          {/* <li>
            <Link to="/series">Series</Link>
          </li> */}
          {/* <li>
            <Link to="/games">Juegos</Link>
          </li> */}
        </ul>
        {/* <form className="searcher" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="searcher"
            id="searcher"
            placeholder="Buscar"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </form> */}
        <ul className="nav-settings">
          <li>
            <i className="bi bi-gear-fill"></i>
          </li>
          {(() => {
            if (showAdmin) {
              return (
                <li>
                  <Link to="/admin">
                    <i className="bi bi-tools"></i>
                  </Link>
                </li>
              );
            }
          })()}
          <li>
            <Link to="/login">
              <i className="bi bi-person-circle"></i>
            </Link>
          </li>
          {(() => {
            if (showLogOut) {
              return (
                <li>
                  <Link to="/logout">
                    <i className="bi bi-door-open-fill"></i>
                  </Link>
                </li>
              );
            }
          })()}
        </ul>
      </nav>
      {(() => {
        if (showMessage) {
          return (
            <div id="navbar-message">
              <div id="message-text">
                <span>{showMessage}</span>
              </div>
              <div id="message-menu" onClick={closeShow}>
                <i className="bi bi-x"></i>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
}

export default Navbar;
