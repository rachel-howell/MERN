import React, { useState, useEffect } from 'react'

const AshKetchum = () => {

  const [ pokemonList, setPokemonList ] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
          .then(response => {
            return response.json();
        }).then(response => {
          setPokemonList(
            response.results
          );
        }).catch(err=>{
            console.log(err);
        });
  }, [])


  return (
    <div>
      {
        pokemonList ? pokemonList.map((pokemon, index)=> {
          return (<div key={index}>{pokemon.name}</div>)
        }) : null
      }
    </div>
  )
}

export default AshKetchum