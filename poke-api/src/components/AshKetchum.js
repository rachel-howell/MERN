import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AshKetchum = () => {

  const [ pokemonList, setPokemonList ] = useState([]);

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
  //         .then(response => {
  //           return response.json();
  //       }).then(response => {
  //         setPokemonList(
  //           response.results
  //         );
  //       }).catch(err=>{
  //           console.log(err);
  //       });
  // }, [])

  useEffect(() => {
    console.log("Gotta catch em all");
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    .then(response=>{
      console.log(response);
      setPokemonList(response.data.results);
    });
  }, [])

  console.log(pokemonList)

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