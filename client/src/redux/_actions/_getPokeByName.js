import axios from "axios"; 
import { GET_POKE_BY_NAME } from "../actionTypes";

export const _getPokeByName = (name) => {
    return async (dispatch) => {
      try {
        const apiData = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/pokemons/name?name=${name}`
        );
        const pokemon = apiData.data.data;
        dispatch({
          type: GET_POKE_BY_NAME,
          payload: pokemon,
        });
        return pokemon; 
      } catch (error) {
        dispatch({
          type: GET_POKE_BY_NAME,
          error: error.message,
        });
        throw error; 
      }
    };
  };