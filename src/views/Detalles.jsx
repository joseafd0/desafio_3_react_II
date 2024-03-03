import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalles = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const url_api = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    const response = await fetch(`${url_api}/${name}`);
    const data = await response.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));
    const statsList = stats.map((stat, index) => (
      <li key={index}>
        {stat.name}: {stat.base}
      </li>
    ));
    const types = data.types.map(({ type }) => type.name).join(" ");
    setPokemon({ name, stats, src, types, statsList });
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <div>
      <div className="flex flex-col gap-3 p-3">
        <figure>
          <img src={pokemon.src} alt="" />
        </figure>
      </div>
      <div>
        <h1>{pokemon.name}</h1>
        <ul>{pokemon.statsList}</ul>
        <p> {pokemon.types} </p>
      </div>
    </div>
  );
};

export default Detalles;
