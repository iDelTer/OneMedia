import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLocalUserSession, setUserSession } from "../../utils/UserProfile";
import "./navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const session = getLocalUserSession();
  //   if (session) setIsLogged(true);
  // });

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
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">
            <span className="navbar-title-text navbar-title-first">One</span>
            <span className="navbar-title-text navbar-title-second">Media</span>
          </Link>
        </li>
        <li>
          <Link to="/films">Películas</Link>
        </li>
        <li>
          <Link to="/series">Series</Link>
        </li>
        <li>
          <Link to="/games">Juegos</Link>
        </li>
      </ul>
      <form className="searcher" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="searcher"
          id="searcher"
          placeholder="Buscar"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </form>
      <ul className="nav-settings">
        <li>
          <i className="bi bi-gear-fill"></i>
        </li>
        <li>
          <Link to="/login">
            <i className="bi bi-person-circle"></i>
            {/* {isLogged ? (
              <i className="bi bi-person-circle"></i>
            ) : (
              <i className="bi bi-person-up"></i>
            )} */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
