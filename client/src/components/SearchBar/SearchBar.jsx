import style from "./SearchBar.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getPokeByID, getPokeByName, getPokeDetails } from "../../redux/actions";
import { Filters, Alert} from "../../components";
import { errorHandler } from "../../functions";

const SearchBar = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

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
          history.push(`/details/${id}`);        
        }        
        setSearch("");
      } catch (error) {
        showAlert(errorHandler(error), 'error')
      }
  };  

  return (
    <div className={style.mainContainer}>   
      <span className={style.alert} >{alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}</span>
      <input className={style.input} type="search" onChange={event => handleChange(event)} placeholder="Search a pokemon" />     
      <button className={style.button} onClick={handleSearch}> search </button>
      <br/>      
      <Filters />
    </div>  
  );
};

export default SearchBar;

