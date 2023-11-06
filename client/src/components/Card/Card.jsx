import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { format } from "../../functions";

const Card = ({ id, name, image, types, onDelete }) => {
  const isDatabasePokemon = isNaN(id);

  return (
    <div className={style.card}>
      <Link to={`/details/${id}`} className={style.underlinedLink}>
        <span className={style.name}>{name && name.toUpperCase()}</span>
      </Link>
      <img src={image} alt="image" />
      <h2 className={style.type}>{types?.map((type) => `${type.toUpperCase()} `)}</h2>
  
      {isDatabasePokemon && (
        <button className={style.delete} onClick={() => onDelete(id)}>
          <span className={style.deleteText}>Delete</span>
        </button>
      )}
    </div>
  );  
};

export default Card;