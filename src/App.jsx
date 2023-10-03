import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
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
import ErrorMessage from "./components/PopUps/ErrorMessage";
import "./App.css";

const msg = createContext();

function App({ message }) {
  const [msgValue, setMsgValue] = useState("Pruebita no más");

  return (
    <div className="App">
      <Navbar msg="Esto es un mensaje de prueba. Esto es un mensaje de prueba. Esto es un mensaje de prueba. Esto es un mensaje de prueba. Esto es un mensaje de prueba." />
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
          <Route path="/movies" element={<Peliculas />} />
          <Route path="/movie" element={<Pelicula />} />
          <Route path="/movie/:movie" element={<Pelicula />} />
          <Route path="/series" element={<Series />} />
          <Route path="/serie/:serie" element={<Serie />} />
          <Route path="/games" element={<Juegos />} />
          <Route path="/game/:game" element={<Juego />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/insert/movies"
            element={<AdminInsertarPeliculas />}
          />
          <Route path="/admin/manage/movies" element={<AdminPeliculas />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </main>
      {message && <ErrorMessage msg={message} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(App);
// export default App;
