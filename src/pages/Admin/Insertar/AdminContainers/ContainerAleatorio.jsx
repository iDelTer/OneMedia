import { useState, useEffect } from "react";
import {
  getRemoteMoviesRandom,
  addLocalMovie,
} from "../../../../services/movies";
import "./container_aleatorio.css";

function ContainerAleatorio() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchRemoteMovies = async () => {
      const films = await getRemoteMoviesRandom();
      setMovies(films);
    };
    fetchRemoteMovies();
  }, []);

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
    alert("Película insertada");
    console.log(JSON.stringify(data));
  };

  return (
    <div id="peliculitas">
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
          {movies.length > 0 &&
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
  );
}

export default ContainerAleatorio;
