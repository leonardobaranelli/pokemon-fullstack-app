import style from "./SearchBar.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokeByID, getPokeByName, getPokeDetails } from "../../redux/actions";

const SearchBar = () => {

  const dispatch = useDispatch();  

  const [search, setSearch] = useState("");

  const handleChange = (event) => {    
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    if(search === undefined || search === null ) return;
      try {
        let pokemon;
        if (!isNaN(search)) {     
          pokemon = await dispatch(getPokeByID(search));                        
        } else {              
          pokemon = await dispatch(getPokeByName(search));                      
        }        
        const id = pokemon?.id;   
        if(id !== undefined) {
          await dispatch(getPokeDetails(id));          
        }        
        setSearch("");
      } catch (error) {
        console.log(error);
      }
  };  

  return (
    <div className={style.mainContainer}>         
      <input className={style.input} type="search" onChange={event => handleChange(event)} placeholder="Search a pokemon" />     
      <button className={style.button} onClick={handleSearch}> search </button>
    </div>  
  );
};

export default SearchBar;


