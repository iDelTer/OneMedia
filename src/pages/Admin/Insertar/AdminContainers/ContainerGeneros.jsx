import { useState, useEffect } from "react";
import { getGenres } from "../../../../services/genre";

function ContainerGeneros() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    }

    fetchGenres();
  }, [])

  return (
    <div id="container-name">
      <div id="container-search">
        <select id="genres-select" name="genres-select">
          {
            genres.map((item) => {
              return <option key={item.id} value={item.web_id}>{item.name}</option>
            })
          }
        </select>
      </div>
      <div id="container-results">
        <p>Resultados</p>
      </div>
    </div>
  );
}

export default ContainerGeneros;
