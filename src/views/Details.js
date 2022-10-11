import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/PokemonCard";

export default function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});

  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));

    const types = data.types.map((e) => e.type.name);
    console.log(name, stats, src, types);

    setPokemon({ name, stats, src, types });
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <>
      <Card pokemon={pokemon} />
    </>
  );
}
