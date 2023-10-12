const router = require('express').Router();

const pokemonsRouter = require("./pokemons")

router.use('/pokemons', pokemonsRouter);

module.exports = router;
