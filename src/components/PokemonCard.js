import '../App.css';
import React from 'react';


export default function PokemonCard({pokemon}) {

  return (
    
        <>
        <div className="poke-card" >
            <img src={pokemon.src} alt="pokemon-pic"/>
            
                <div className="pokemon-name">Name:{pokemon.name}</div>
                <ul className ="text-left">
                    <div>
                        {pokemon.stats?.map((stat, i) =>(
                            <li key={i}>
                                {stat.name}:{stat.base}
                            </li>
                        ))}
                    </div>
                </ul>
                <div className="pokemon-type">Type: {pokemon.types}</div>
           
        </div>
        </>
    );
}
