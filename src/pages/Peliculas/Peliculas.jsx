import HorizontalCarrusel from "../../components/HorizontalCarrusel/HorizontalCarrusel";
import { filmsArray } from "../../utils/arrays";
import "./peliculas.css";

function Peliculas() {
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
      {categoriesLists.map((item) => (
        <HorizontalCarrusel title={item.title} list={item.list} />
      ))}
    </div>
  );
}

export default Peliculas;
