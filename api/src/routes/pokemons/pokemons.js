const pokemonsRouter = require("express").Router();

const { getPokemons } = require("../../handlers/getPokemons")

pokemonsRouter.get("/", getPokemons);

module.exports = pokemonsRouter;