const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { infoPokemonAPI, infoPokemonDB } = require('../helpers');

const getPokemonsAPI = async () => {
    const promises = [];
    const totalPokemons = 36; 

    for (let id = 1; id <= totalPokemons; id++) {
        const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        promises.push(response);
    }

    const pokemons = await Promise.all(promises);
    const infoPokemons = pokemons.map((response) => {
        const pokemon = response.data;
        return infoPokemonAPI(pokemon);
    });
    return infoPokemons;
}

const getPokemonsDB = async () => { 
    const pokemons = await Pokemon.findAll({        
        include: Type,
      });  
    
    if (!pokemons) return null;         
    return pokemons.map(pokemon => infoPokemonDB(pokemon));       
 }

module.exports = {
    getPokemonsAPI,
    getPokemonsDB,    
}