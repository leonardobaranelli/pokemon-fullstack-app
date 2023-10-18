import { 
    GET_POKEMONS,   
    GET_POKE_BY_ID,
    GET_POKE_BY_NAME,
    GET_POKE_DETAILS,

} from "./actionTypes";

export const initialState = {
    pokemons: [],        
    pokeDetails: {},
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
      
        default:
            return state;
    }
};

export default rootReducer;




                        