const axios = require("axios");
const { Pokemon } = require("../db");
const { infoPokemonAPI, infoPokemonDB } = require("../helpers");

const _getByNameAPI = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = response.data;

    return infoPokemonAPI(pokemon);
}

const _getByNameDB = async (name) => {
    const pokemon = await Pokemon.findOne({ where: { name: name } });

    if (!pokemon) return null;
    return infoPokemonDB(pokemon);
}

module.exports = {
    _getByNameAPI,
    _getByNameDB,
};