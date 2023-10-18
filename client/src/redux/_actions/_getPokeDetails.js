import axios from "axios"; 
import { GET_POKE_DETAILS } from "../actionTypes";

export const _getPokeDetails = (id) => {
    return async (dispatch) => {
        try {
            const apiData = await axios.get(
            `http://localhost:3001/pokemons/${id}`
            );
            const pokemon = apiData.data;
            dispatch({
                type: GET_POKE_DETAILS, payload: pokemon
            });
            return pokemon; 
        } catch (error) {
            dispatch({
            type: GET_POKE_DETAILS,
            error: error.message,
            });
            throw error; 
        }
    };
};