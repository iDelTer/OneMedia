import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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
          <Link to="/">OneMedia</Link>
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
      <ul>
        <li>
          <i className="bi bi-gear-fill"></i>
        </li>
        <li>
          <Link to="/account">
            <i className="bi bi-person-circle"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
