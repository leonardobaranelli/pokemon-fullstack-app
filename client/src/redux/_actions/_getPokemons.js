import axios from "axios"; 
import { GET_POKEMONS } from "../actionTypes";

export const _getPokemons = () => {
    return async (dispatch) => {
        try {
        const apiData = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/pokemons`
        );
        const pokemons = apiData.data;
        dispatch({
            type: GET_POKEMONS, payload: pokemons
        });
        return pokemons; 
        } catch (error) {
        dispatch({
            type: GET_POKEMONS,
            error: error.message,
        });
        throw error; 
        }
    };
};    
