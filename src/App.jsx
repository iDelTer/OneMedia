import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Session/Login";
import Register from "./pages/Session/Register";
import Logout from "./pages/Session/Logout";
import Usuario from "./pages/Usuarios/Usuario";
import Cuenta from "./pages/Usuarios/Cuenta";
import Busqueda from "./pages/Search";
import Peliculas from "./pages/Peliculas/Peliculas";
import Pelicula from "./pages/Peliculas/Pelicula";
import Series from "./pages/Series/Series";
import Serie from "./pages/Series/Serie";
import Juegos from "./pages/Juegos/Juegos";
import Juego from "./pages/Juegos/Juego";
import Error404 from "./pages/Errors/404";
import Admin from "./pages/Admin/Admin";
import AdminPeliculas from "./pages/Admin/AdminPeliculas";
import AdminInsertarPeliculas from "./pages/Admin/Insertar/AdminInsertarPeliculas";
import TemporalMessage from "./components/PopUps/TemporalMessage";
import PermanentMessage from "./components/PopUps/PermanentMessage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/account" element={<Cuenta />} />
          <Route path="/user/:user" element={<Usuario />} />
          <Route path="/search" element={<Busqueda />} />
          <Route path="/search/:query" element={<Busqueda />} />
          <Route path="/films" element={<Peliculas />} />
          <Route path="/film/:film" element={<Pelicula />} />
          <Route path="/series" element={<Series />} />
          <Route path="/serie/:serie" element={<Serie />} />
          <Route path="/games" element={<Juegos />} />
          <Route path="/game/:game" element={<Juego />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/insert/films"
            element={<AdminInsertarPeliculas />}
          />
          <Route path="/admin/manage/films" element={<AdminPeliculas />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </main>
      <PermanentMessage msg="prueba" />
    </div>
  );
}

export default App;
