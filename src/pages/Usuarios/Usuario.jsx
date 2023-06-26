import { useParams } from "react-router-dom";

function Usuario() {
  const params = useParams();
  const { user } = params;

  return (
    <>
      <p>{user ? `Usuario: ${user}` : `No se ha encontrado usuario`}</p>
    </>
  );
}

export default Usuario;
