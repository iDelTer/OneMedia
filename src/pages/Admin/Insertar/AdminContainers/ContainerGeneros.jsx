import { useState, useEffect } from "react";

function ContainerGeneros() {
  const [genres, setGenres] = useState([]);
  // https://github.com/albertomozo/proyecto_final_inicial/blob/main/peliculas.sql

  return (
    <div id="container-name">
      <div id="container-search">
        <select>
          <option value=""></option>
        </select>
      </div>
      <div id="container-results">
        <p>Resultados</p>
      </div>
    </div>
  );
}

export default ContainerGeneros;
