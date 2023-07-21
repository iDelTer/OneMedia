import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getLocalUserSession,
  askAuthoritation,
} from "../../../utils/UserProfile";
import ContainerAleatorio from "./AdminContainers/ContainerAleatorio";
import ContainerNombre from "./AdminContainers/ContainerNombre";
import ContainerGeneros from "./AdminContainers/ContainerGeneros";
import "./insertar_peliculas.css";

function AdminInsertarPeliculas() {
  const navigate = useNavigate();

  const [load, setLoad] = useState(false);
  const [films, setFilms] = useState([]);
  const [containerOption, setContainerOption] = useState("random");

  useEffect(() => {
    const session = getLocalUserSession();
    if (!session) navigate("/404");

    const fetchStatus = async () => {
      const data = await askAuthoritation();
      if (data.status === 404) navigate("/404");
    };
    fetchStatus();
    setLoad(true);
  }, []);

  useEffect(() => {
    if (load) {
    }
  }, [load]);

  const changeContainerOption = (op) => {
    setContainerOption(op);
  };

  const renderSelectedComponent = () => {
    if (containerOption === "random") {
      return <ContainerAleatorio />;
    } else if (containerOption === "name") {
      return <ContainerNombre />;
    } else if (containerOption === "genre") {
      return <ContainerGeneros />;
    } else {
      return null;
    }
  };

  return (
    <div>
      {load ? (
        <div id="admin-films">
          <div id="films-menu">
            <div
              className={
                containerOption === "random"
                  ? "selected menu-buttons-box"
                  : "menu-buttons-box"
              }
            >
              <button onClick={() => changeContainerOption("random")}>
                Buscar aleatorio
              </button>
            </div>
            <div
              className={
                containerOption === "name"
                  ? "selected menu-buttons-box"
                  : "menu-buttons-box"
              }
            >
              <button onClick={() => changeContainerOption("name")}>
                Buscar por nombre
              </button>
            </div>
            <div
              className={
                containerOption === "genre"
                  ? "selected menu-buttons-box"
                  : "menu-buttons-box"
              }
            >
              <button onClick={() => changeContainerOption("genre")}>
                Buscar por género
              </button>
            </div>
          </div>
          <div id="films-box">{renderSelectedComponent()}</div>
        </div>
      ) : (
        <div>
          <p>Looking for the page if exists...</p>
        </div>
      )}
    </div>
  );
}

export default AdminInsertarPeliculas;
