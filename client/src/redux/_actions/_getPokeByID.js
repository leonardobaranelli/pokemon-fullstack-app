import axios from "axios"; 
import { GET_POKE_BY_ID } from "../actionTypes";

export const _getPokeByID = (id) => {
    return async (dispatch) => {
      try {
        const apiData = await axios.get(
          `http://localhost:3001/pokemons/${id}`
        );
        const pokemon = apiData.data;
        dispatch({
          type: GET_POKE_BY_ID,
          payload: pokemon,
        });
        return pokemon; 
      } catch (error) {
        dispatch({
          type: GET_POKE_BY_ID,
          error: error.message,
        });
        throw error;
      }
    };
  };