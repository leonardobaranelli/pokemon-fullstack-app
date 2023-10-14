const pokemonsRouter = require("express").Router();

const { getByName } = require("../../handlers/getByName")
const { getByID } = require("../../handlers/getByID")
const { getPokemons } = require("../../handlers/getPokemons")

pokemonsRouter.get("/name", getByName);
pokemonsRouter.get("/:idPokemon", getByID);
pokemonsRouter.get("/", getPokemons);

module.exports = pokemonsRouter;