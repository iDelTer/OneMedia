import { useEffect, useState } from "react";
import { getLocalMovies } from "../../services/movies";
import HorizontalCarrusel from "../../components/HorizontalCarrusel/HorizontalCarrusel";
import { filmsArray } from "../../utils/arrays";
import "./peliculas.css";

function Peliculas() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const films = await getLocalMovies();
      setMovies(films);
    };
    getMovies();
  }, []);

  const categoriesLists = [
    {
      title: "Lanzamientos nuevos",
      list: filmsArray,
    },
    {
      title: "Popular",
      list: filmsArray,
    },
    {
      title: "Próximamente",
      list: filmsArray,
    },
  ];

  return (
    <div id="films-container">
      {(() => {
        if (movies && movies.length > 0) {
          return <HorizontalCarrusel title={"Lanzamientos"} list={movies} />;
        } else {
          return <p>Loading data...</p>;
        }
      })()}
    </div>
  );
}

export default Peliculas;
