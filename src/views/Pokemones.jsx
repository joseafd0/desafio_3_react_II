import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState("");
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemones = async () => {
    const response = await fetch(url);
    const { results } = await response.json();
    setPokemones(results);
  };

  const pokemonDetalles = async () => {
    if (pokemonSeleccionado) navigate(`/pokemones/${pokemonSeleccionado}`);
    else alert("No has seleccionado un pokemon");
  };

  useEffect(() => {
    getPokemones();
  }, []);

  return (
    <div className="mt-5 text-center">
      <h1>Selecciona un Pokemon</h1>
      <div className="col-5 col-sm-3 col-lg-2 mx-auto">
        <select
          value={pokemonSeleccionado}
          className="form-select text-center"
          onChange={({ target }) => setPokemonSeleccionado(target.value)}
        >
          <option value="" disabled>
            Pokemones
          </option>
          {pokemones.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <Button
          onClick={pokemonDetalles}
          variant="dark"
          type="submit"
          className="mt-3"
        >
          Ver Detalles
        </Button>
      </div>
    </div>
  );
};

export default Pokemones;
