export const initialPokeData = {
  name: "",
  health: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  types: [],
  image: "",
};

export const initialErrorsData = {
  name: "",
  health: "",
  attack: "",
  defense: "",
  speed: "",
  height: "",
  weight: "",
  types: [],
  image: "",
};

export const propertyNames =  ["name", "health", "attack", "defense", "speed", "height", "weight"];

export const types = [
  "normal", "fighting", "flying", "poison", "ground",
  "rock", "bug", "ghost", "steel", "fire",
  "water", "grass", "electric", "psychic", "ice",
  "dragon", "dark", "fairy", "unknown", "shadow", 
];

export const transformValue = (property, value) => {
  if (['attack', 'defense', 'health', 'speed', 'weight', 'height'].includes(property)) {
    const intValue = parseInt(value, 10);
    return isNaN(intValue) ? 0 : intValue; 
  } else {
    return value;
  }
};







