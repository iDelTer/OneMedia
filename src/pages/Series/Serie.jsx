import { useParams } from "react-router-dom";

function Serie() {
  const params = useParams();
  const { serie } = params;
  return <p>{serie ? `Has buscado ${serie}` : "No has buscado nada"}</p>;
}

export default Serie;
