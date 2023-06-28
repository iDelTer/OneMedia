import { useParams } from "react-router-dom";

function Pelicula() {
  const params = useParams();
  const { film } = params;
  return <p>{film ? `Has buscado ${film}` : "No has buscado nada"}</p>;
}

export default Pelicula;
