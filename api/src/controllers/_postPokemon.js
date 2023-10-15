const { Pokemon, Type } = require("../db");
const { randomImage } = require('../helpers');

const ranImgMinLimit = 200;
const ranImgMaxLimit = 700;
const _createPokemon = async (
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
) => {
  
  const findedPoke = await Pokemon.findOne({ where: { name: name } });
  if (findedPoke) {
    throw new Error("That pokemon has already been created");
  } else {    
    const newPokemon = await Pokemon.create({
      id,
      name,
      health,
      attack,
      defense,
      height,
      weight,
      speed,
      image: image ? image : await randomImage(ranImgMinLimit, ranImgMaxLimit),            
    });

    for (const typeName of types) {
      const typeDb = await Type.findOne({
        where: {
          name: typeName,
        },
      });

      if (typeDb) {
        await newPokemon.addType(typeDb);      
      } else {
        console.error(`Type ${typeName} not found`);
      }
    }  
  }
};

module.exports = {
  _createPokemon,
};