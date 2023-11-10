import React, { useEffect } from 'react';
import style from "./Details.module.scss";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getPokeDetails, cleanPokeDetails } from "../../redux/actions"
import { format } from "../../functions";

const Details = () => {
  const dispatch = useDispatch();

  const { id } = useParams();  
  const { name, image, health, attack, defense, speed, height, weight, types } = useSelector((state) => state.pokeDetails);  
  
  useEffect(() => {
    const justWait = async () => {
      await dispatch(getPokeDetails(id));    
    };   
    justWait();
    return () => {
      dispatch(cleanPokeDetails());
    };
  }, [dispatch, id]);  

  const renderID = !isNaN(id) ? id : id.split('-')[0];
  return (
    <div className={style.mainContainer}>
      {name ? (
        <div>
          <h3>ID: <span className={style.detail}>{renderID}</span></h3>
          <h3>Name: <span className={style.detail}>{format(name)}</span></h3>
          <img src={image} alt="mon Image" />
          <h3>Health: <span className={style.detail}>{health}</span></h3>
          <h3>Attack: <span className={style.detail}>{attack}</span></h3>
          <h3>Defense: <span className={style.detail}>{defense}</span></h3>
          <h3>Speed: <span className={style.detail}>{speed}</span></h3>
          <h3>Height: <span className={style.detail}>{height}</span></h3>
          <h3>Weight: <span className={style.detail}>{weight}</span></h3>
          <h3>Types: <span className={style.detail}>{types?.map(type => `${format(type)} `)}</span></h3>          
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Details;
