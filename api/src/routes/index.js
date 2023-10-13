const router = require('express').Router();
const pokemonsRouter = require("./pokemons/pokemons")
const typesRouter = require("./types/types")

router.use('/pokemons', pokemonsRouter);
router.use('/types', typesRouter);

module.exports = router;
