import { FILTER_POKEMONS } from "../actionTypes";

export const _filterPokemons = (activeOptions) => {
    return { type: FILTER_POKEMONS, payload: { activeOptions } };
};
