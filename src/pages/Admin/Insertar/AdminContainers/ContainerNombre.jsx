import { useState, useEffect } from "react";
import {
  getRemoteMoviesName,
  addLocalMovie,
} from "../../../../services/movies";
import "./container_name.css";

function ContainerNombre() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const addMovie = async (identifier) => {
    let bodyObj = {};
    let movieItem = movies.find((item) => item.id === identifier);
    console.log(movieItem);
    bodyObj = {
      name: movieItem.original_title,
      description: movieItem.overview.substring(0, 255),
      release: movieItem.release_date,
      picture: movieItem.poster_path,
    };
    console.log(bodyObj);
    bodyObj = JSON.stringify(bodyObj);
    console.log(bodyObj);

    const data = await addLocalMovie(bodyObj);
    console.log(JSON.stringify(data));
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    let bodyData = {
      query: encodeURI(e.target.value),
    };

    const fetchRemoteMovies = async (data) => {
      const films = await getRemoteMoviesName(data);
      setMovies(films);
    };
    fetchRemoteMovies(bodyData);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit(event);
    }
  };

  return (
    <div id="container-name">
      <div id="container-search">
        <form className="searcher" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Buscar por nombre"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </form>
      </div>
      <div id="container-results">
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.length > 0 &&
              movies.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                        className="movie-film-image"
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.overview.substring(0, 120)}</td>
                    <td>
                      <i
                        onClick={() => {
                          addMovie(item.id);
                        }}
                        className="bi bi-cloud-plus"
                      ></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContainerNombre;
