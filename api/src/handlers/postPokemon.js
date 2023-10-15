const { _createPokemon } = require("../controllers/_postPokemon");

const postPokemon = async (req, res) => {
  const {
    id,
    name,
    image,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
  } = req.body;

  try {
    const newPokemon = await createPokemon(
      id,
      name,
      image,
      health,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );

    res.status(201).json({
      message: "The pokemon was created successfully",
      pokemon: newPokemon,
    });
  } 
  catch (error) {
    res.status(400).json({
      error: true,
      status: 400,
      message: error.message || 'Unknown error',
    });
  }
};

module.exports = { 
  postPokemon,
};


