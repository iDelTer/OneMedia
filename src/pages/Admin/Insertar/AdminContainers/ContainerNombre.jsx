import "./container_name.css";

function ContainerNombre() {
  return (
    <div id="container-name">
      <div id="container-search">
        <input type="text" placeholder="Buscar por nombre" />
      </div>
      <div id="container-results">
        <p>Resultados</p>
      </div>
    </div>
  );
}

export default ContainerNombre;
