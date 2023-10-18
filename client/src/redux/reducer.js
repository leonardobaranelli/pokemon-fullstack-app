import { 
    GET_POKEMONS,   

} from "./actionTypes";

export const initialState = {
    pokemons: [],        
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
      
        default:
            return state;
    }
};

export default rootReducer;




                        