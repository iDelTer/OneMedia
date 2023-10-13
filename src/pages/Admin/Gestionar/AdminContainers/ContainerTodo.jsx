import { useState, useEffect } from "react";
import {
  getLocalMovies,
  removeMovie,
  updateMovie,
} from "../../../../services/movies";
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
      const updatedMovies = movies.filter((obj) => obj.id !== itemId);
      alert("Película borrada");
      setMovies(updatedMovies);
      // Show message
    } else {
      console.log("Ha surgido un error");
    }
  };

  const updateLocalMovie = async (itemId, itemName, itemDescription) => {
    let bodyObj = {
      id: itemId,
      name: itemName,
      description: itemDescription,
    };
    bodyObj = JSON.stringify(bodyObj);
    const data = await updateMovie(bodyObj);
    console.log(JSON.stringify(data));
    if (data.status === 200) {
      const updatedMovies = movies.filter((obj) => obj.id !== itemId);
      alert("Película actualizada");
      setMovies(updatedMovies);
      // Show message
    } else {
      alert("Ha surgido un error");
    }
  };

  const handleTitleChange = (index, newValue) => {
    const updatedMovies = [...movies];
    updatedMovies[index].name = newValue;
    setMovies(updatedMovies);
  };

  const handleDescriptionChange = (index, newValue) => {
    const updatedMovies = [...movies];
    updatedMovies[index].description = newValue;
    setMovies(updatedMovies);
  };

  const handleButtonClick = (index) => {
    const movieId = movies[index].id;
    const movieTitle = movies[index].name;
    const movieDescription = movies[index].description;
    updateLocalMovie(movieId, movieTitle, movieDescription);
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
              <th>Guardar Cambios</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.length > 0 &&
              movies.map((item, index) => {
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
                        id={"movie-title-" + item.id}
                        name="movie-title"
                        defaultValue={item.name.replace(/_/g, " ")}
                        onChange={(e) =>
                          handleTitleChange(index, e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <textarea
                        name="movie-description"
                        id={"movie-description-" + item.id}
                        cols="30"
                        rows="10"
                        defaultValue={item.description
                          .substring(0, 120)
                          .replace(/_/g, " ")}
                        onChange={(e) =>
                          handleDescriptionChange(index, e.target.value)
                        }
                      ></textarea>
                    </td>
                    <td>
                      <i
                        onClick={() => {
                          // updateLocalMovie(
                          //   item.id,
                          //   item.name,
                          //   item.description
                          // );
                          handleButtonClick(index);
                        }}
                        className="bi bi-pencil"
                      ></i>
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
