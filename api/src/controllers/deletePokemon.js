const { Pokemon } = require("../db");

const deletePokemon = async (req, res) => {
  const { id } = req.params;  

  try {
    const deletedPokemon = await Pokemon.findByPk(id);
    if (deletedPokemon) {
      await deletedPokemon.destroy();

      res.status(200).json({
        message: "The pokemon was deleted successfully",
        pokemon: deletedPokemon,
      });
    } else {
      res.status(404).json({
        error: true,
        status: 404,
        message: "Pokemon not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      status: 500,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
    deletePokemon
};    