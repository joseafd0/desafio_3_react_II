import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Detalles from "./views/Detalles";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

const App = () => {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalles />} />
      </Routes>
    </>
  );
};

export default App;
