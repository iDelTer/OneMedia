import { useParams } from "react-router-dom";

function Juego() {
  const params = useParams();
  const { game } = params;
  return <p>{game ? `Has buscado ${game}` : "No has buscado nada"}</p>;
}

export default Juego;
