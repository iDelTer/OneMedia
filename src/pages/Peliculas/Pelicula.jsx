import { useParams } from "react-router-dom";
import { getLocalMovie, rateMovie } from "../../services/movies";
import { useState, useEffect } from "react";
import { Rating } from "@mui/material";
import "./pelicula.css";

function Pelicula() {
  const params = useParams();
  const { movie } = params;

  const [loaded, setLoaded] = useState(false);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetchMovie(movie);
  }, []);

  const fetchMovie = async (identifier) => {
    let bodyData = {
      id: identifier,
    };
    bodyData = JSON.stringify(bodyData);
    const data = await getLocalMovie(bodyData);
    if (data) {
      setFilm(data);
      setLoaded(true);
      console.log(data);
    } else {
      console.log(data);
    }
  };

  const updateRate = async (identifier, newValue) => {
    let bodyData = {
      movie_id: identifier,
      score: newValue,
    };
    bodyData = JSON.stringify(bodyData);
    const data = await rateMovie(bodyData);
    alert("Película votada");
    console.log(JSON.stringify(data));
    location.reload();
  };

  return (
    <div id="content">
      {loaded ? (
        <div id="film-container">
          <div id="film-context">
            <img
              src={"https://image.tmdb.org/t/p/w154" + film.picture}
              alt={film.name.replace(/_/g, " ")}
            />
            <div>
              <Rating
                id="rating"
                value={parseInt(film.rate)}
                max={5}
                onChange={(event, newValue) => {
                  updateRate(film.id, newValue);
                }}
              />
            </div>
          </div>

          <div id="film-info">
            <p id="film-name">{film.name.replace(/_/g, " ")}</p>
            <p id="film-overview">{film.description.replace(/_/g, " ")}</p>
            <p id="film-release">{film.release}</p>
          </div>
        </div>
      ) : (
        <div>
          {movie ? <p>Cargando datos...</p> : <p>No se ha buscado película</p>}
        </div>
      )}
    </div>
  );
}

export default Pelicula;
