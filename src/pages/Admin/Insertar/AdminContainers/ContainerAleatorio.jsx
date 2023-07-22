import { useState, useEffect } from "react";
import { getRemoteMovies } from "../../../../services/movies";
import './container_aleatorio.css'

function ContainerAleatorio() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchRemoteMovies = async () => {
			const films = await getRemoteMovies();
			setMovies(films);
		};
		fetchRemoteMovies();
	}, []);

	return (
		<div id="peliculitas">
      <table>
        <thead>
          <tr>
            <td>Imagen</td>
            <td>Nombre</td>
            <td>Descripción</td>
            <td>Acción</td>
          </tr>
        </thead>
        <tbody>
			{movies.length > 0 && movies.map((item) => {
				return (
          <tr key={item.id}>
            <td><img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} className="movie-film-image"/></td>
            <td>{item.title}</td>
            <td>{item.overview.substring(0, 120)}</td>
            <td>botón</td>
          </tr>
        )
			})}
      </tbody>
      </table>
		</div>
	);
}

export default ContainerAleatorio;
