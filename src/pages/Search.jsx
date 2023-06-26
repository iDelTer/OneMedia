import { useParams } from "react-router-dom";

function Busqueda() {
  const params = useParams();
  const { query } = params;

  return <p>{query ? `Has buscado ${query}` : "No has buscado nada"}</p>;
}

export default Busqueda;
