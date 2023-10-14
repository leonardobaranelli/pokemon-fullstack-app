const axios = require("axios");
const { Pokemon, Type } = require("../db");
const infoPokemonDB = require("../helpers/infoPokemonDB");
const infoPokemonAPI = require("../helpers/infoPokemonAPI");

const _getByIDAPI = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;    
    
    return infoPokemonAPI(pokemon);    
}

const _getByIDDB = async (id) => {
    const foundPokemon = await Pokemon.findOne({
        where: { id: id },
        include: Type,
    });
    if (!foundPokemon) return null;     
    return infoPokemonDB(foundPokemon);
};

module.exports = {
    _getByIDAPI,
    _getByIDDB,
};