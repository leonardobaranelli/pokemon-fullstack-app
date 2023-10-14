const pokemonsRouter = require("express").Router();

const { getPokemons } = require("../../handlers/getPokemons")
const { getByID } = require("../../handlers/getByID")

pokemonsRouter.get("/", getPokemons);
pokemonsRouter.get("/:idPokemon", getByID);

module.exports = pokemonsRouter;