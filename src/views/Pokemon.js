import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [selectPokemon, setselectedPokemon] = useState("");
  const navigate = useNavigate();

  const url = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

  const getPokemon = async () => {
    const res = await fetch(url);
    const { results } = await res.json();
    setPokemon(results);

    console.log(results);
  };

  const goToPokemon = () => {
    if (selectPokemon) navigate(`/pokemon/${selectPokemon}`);
    else alert("You must select a pokemon");
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      <div className="selection">
        <h1>Select a Pokemon</h1>
        <div className="selection-select">
          <select
            value={selectPokemon}
            className="form-select text-center"
            onChange={(e) => setselectedPokemon(e.target.value)}
          >
            <option className="option" value="disabled" >
              Pokemon
            </option>
            {pokemon.map((elem, i) => (
              <option kei={i} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
          <Button onClick={goToPokemon} variant="primary" className="btn">
            See details
          </Button>
        </div>
      </div>
    </>
  );
}
