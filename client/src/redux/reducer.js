import { typeNames } from "../functions";

import { 
    GET_POKEMONS,   
    GET_POKE_BY_ID,
    GET_POKE_BY_NAME,
    GET_POKE_DETAILS,
    CLEAN_POKE_DETAILS,
    FILTER_POKEMONS,

} from "./actionTypes";

export const initialState = {
    pokemons: [],        
    pokeDetails: {},
    filter: {
        filteredPokemons: [],
        isActive: false,        
        activeOptions: [], 
    },        
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_POKEMONS:
            if (payload !== undefined) {                
                const uniquePayload = payload.filter(newPokemon => 
                    !state.pokemons.some(existingPokemon => 
                        existingPokemon.id === newPokemon.id));
                return { ...state, pokemons: [...state.pokemons, ...uniquePayload] };
            }
            return state; 

        case GET_POKE_BY_ID:
            if(payload != undefined)
                return {...state, pokemons: [payload, ...state.pokemons]};    

        case GET_POKE_BY_NAME:
            if(payload != undefined)
                return {...state, pokemons: [payload, ...state.pokemons]};    

        case GET_POKE_DETAILS:            
            return {...state, 
                pokeDetails: payload};   
                    
        case CLEAN_POKE_DETAILS:
                return {...state,
                    pokeDetails: {}};      
                   
        case FILTER_POKEMONS:            
            const { activeOptions } = payload;
            
            const API = activeOptions.includes("API")
            const DB = activeOptions.includes("DB")
            const someType = typeNames.some(name => activeOptions.includes(name));
            
            if (API || DB || someType) {
                let pokemonsToFilter = API && !DB
                ? state.pokemons.filter((pokemon) => !isNaN(pokemon.id))
                : (!API && DB
                    ? state.pokemons.filter((pokemon) => isNaN(pokemon.id))
                    : state.pokemons);

                if (someType) {
                    pokemonsToFilter = pokemonsToFilter.filter((pokemon) =>
                        pokemon.types.some((type) => activeOptions.includes(type))
                    );
                } 

                const uniqueFilteredPokemons = Array.from(new Set(pokemonsToFilter.map(
                    pokemon => pokemon.id))).map(id =>
                    pokemonsToFilter.find((pokemon) => pokemon.id === id));
            
                return { ...state,
                    filter: {
                        ...state.filter,
                        filteredPokemons: uniqueFilteredPokemons,
                        isActive: true,
                        activeOptions: activeOptions,
                    }
                }                
            }
            else {
                return { ...state,
                    filter: {
                        ...state.filter,
                        filteredPokemons: [],
                        isActive: false,
                        activeOptions: [],
                    },  
                };     
            }                                   
      
        default:
            return state;
    }
};

export default rootReducer;




                        