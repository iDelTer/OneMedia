import { useState, useEffect } from "react";
import { getLocalMovies, removeMovie } from "../../../../services/movies";
import "./container_name.css";

function ContainerNombre() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const films = await getLocalMovies();
      setMovies(films);
      console.log(films);
    };
    fetchMovies();
  }, []);

  const addMovie = async (identifier) => {
    let bodyObj = {};
    let movieItem = movies.find((item) => item.id === identifier);
    console.log(movieItem);
    bodyObj = {
      name: movieItem.name,
      description: movieItem.description.substring(0, 255),
      release: movieItem.release,
      picture: movieItem.poster_path,
    };
    console.log(bodyObj);
    bodyObj = JSON.stringify(bodyObj);
    console.log(bodyObj);

    const data = await getLocalMovies();
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

  const removeLocalMovie = async (itemId) => {
    let bodyObj = {
      id: itemId,
    };
    bodyObj = JSON.stringify(bodyObj);
    const data = await removeMovie(bodyObj);
    console.log(JSON.stringify(data));
    if (data.status === 200) {
      // const index = movies.findIndex((obj) => obj.id === itemId);
      // setMovies(movies.filter(index, 1));
      const updatedMovies = movies.filter((obj) => obj.id !== itemId);
      setMovies(updatedMovies);
    }
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
                        src={`https://image.tmdb.org/t/p/original${item.picture}`}
                        className="movie-film-image"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="movie-title"
                        name="movie-title"
                        value={item.name.replace(/_/g, " ")}
                      />
                    </td>
                    <td>
                      <textarea
                        name="movie-description"
                        id="movie-description"
                        cols="30"
                        rows="10"
                        defaultValue={item.description
                          .substring(0, 120)
                          .replace(/_/g, " ")}
                      ></textarea>
                    </td>
                    <td>
                      <i
                        onClick={() => {
                          removeLocalMovie(item.id);
                        }}
                        className="bi bi-trash"
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
