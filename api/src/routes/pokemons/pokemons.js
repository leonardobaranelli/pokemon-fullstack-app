const pokemonsRouter = require("express").Router();

const { getByName } = require("../../handlers/getByName")
const { getByID } = require("../../handlers/getByID")
const { getPokemons } = require("../../handlers/getPokemons")
const { postPokemon } = require("../../handlers/postPokemon")
const { deletePokemon } = require("../../controllers/deletePokemon")

pokemonsRouter.get("/name", getByName);
pokemonsRouter.get("/:idPokemon", getByID);
pokemonsRouter.get("/", getPokemons);
pokemonsRouter.post("/", postPokemon);
pokemonsRouter.delete("/delete/:id", deletePokemon);

module.exports = pokemonsRouter;



