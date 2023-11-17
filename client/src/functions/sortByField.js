const sortByField = (sortField, sortOrder, pokemons) => {

  const _pokemons = Array.from(new Set(pokemons.map(
    pokemon => pokemon.id)))
    .map(id => pokemons.find((pokemon) => pokemon.id === id));

  return _pokemons.slice().sort((a, b) => {
    const orderFactor = sortOrder === "desc" ? -1 : 1;
    if(a === undefined || b === undefined) return;
    
    if (sortField === "name") {
      return orderFactor * a.name.localeCompare(b.name);
    } else if (sortField === "attack") {
      return orderFactor * (a.attack - b.attack);
    }

    return 0;
  });
};

export default sortByField;