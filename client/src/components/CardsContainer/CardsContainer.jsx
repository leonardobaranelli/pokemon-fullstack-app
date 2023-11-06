import React, { useState } from "react";
import style from "./CardsContainer.module.scss";
import axios from "axios";
import { Card, Page, Alert } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, setPage } from "../../redux/actions";
import { sortByField, errorHandler } from "../../functions";

const CardsContainer = () => {
  const dispatch = useDispatch();
  
  const allPokemons = useSelector((state) => state.pokemons);
  const filter = useSelector((state) => state.filter);  
  const currentPage = useSelector((state) => state.Paginated_currentPage);
    
  const [orderBy, setOrderBy] = useState({ field: "name", order: "asc" });
  const [alert, setAlert] = useState(null);  

  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;  
  
  let totalPages = 0; 
  let paginatedPokemons = [];   

  if (filter && filter.isActive && filter.filteredPokemons) {
    paginatedPokemons = sortByField(orderBy.field, orderBy.order, filter.filteredPokemons).slice(
      startIndex,
      endIndex
    );
    totalPages = Math.ceil(filter.filteredPokemons.length / itemsPerPage);

  } else {
    paginatedPokemons = sortByField(orderBy.field, orderBy.order, allPokemons).slice(
      startIndex,
      endIndex
    );
    totalPages = Math.ceil(allPokemons.length / itemsPerPage);
  }
 
  const handleSortChange = (field) => {
    setOrderBy((prevOrder) => ({
      field,
      order: prevOrder.field === field && prevOrder.order === "asc" ? "desc" : "asc",
    }));
  };    

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const deletePokemon = async (id) => {
    await axios
      .delete(`http://localhost:3001/pokemons/delete/${id}`)
      .then((res) => {
        showAlert(res.data.message || "Success!", "success");
        dispatch(getPokemons());
      })
      .catch((error) => {
        showAlert(errorHandler(error), "error");
      });
  };

  return (
    <div className={style.mainContainer}>      
      <span className={style.alert}>{alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}</span>
      <div className={style.sortContainer}>
          <button className={style.sortButton} onClick={() => handleSortChange("name")}>
            Sort by Name <strong>{orderBy.field === "name" ? (orderBy.order === "asc" ? "(Asc)" : "(Desc)") : ""}</strong>
          </button>
          <button className={style.sortButton} onClick={() => handleSortChange("attack")}>
            Sort by Attack <strong>{orderBy.field === "attack" ? (orderBy.order === "asc" ? "(Asc)" : "(Desc)") : ""}</strong>
          </button>
        </div>
        
       <div className={style.cardContainer}>
         {paginatedPokemons.map(({ id, name, image, types, attack }) => (
          <div className={style.card} key={id}>
            <Card id={id} name={name} image={image} types={types} attack={attack} onDelete={deletePokemon} />
          </div>
        ))}
      </div>

      <Page currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default CardsContainer;