import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Usuario from "./pages/Usuarios/Usuario";
import Cuenta from "./pages/Usuarios/Cuenta";
import Busqueda from "./pages/Search";
import Error404 from "./pages/404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Cuenta />} />
          <Route path="/user/:user" element={<Usuario />} />
          <Route path="/user" element={<Usuario />} />
          <Route path="/search" element={<Busqueda />} />
          <Route path="/search/:query" element={<Busqueda />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
