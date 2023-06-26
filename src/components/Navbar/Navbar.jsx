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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
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
          <i class="bi bi-gear-fill"></i>
        </li>
        <li>
          <Link to="/account">
            <i class="bi bi-person-circle"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
