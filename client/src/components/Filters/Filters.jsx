import React, { useState, useEffect } from 'react';
import style from "./Filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterPokemons, getPokemons } from "../../redux/actions";
import { typeNames, format } from "../../functions";
import { Settings } from "../index";

const Filters = () => {
  const dispatch = useDispatch();
  const isPersistent = useSelector((state) => state.filter.isPersistent);

  const [checkedBoxes, setCheckedBoxes] = useState({});

  useEffect(() => {    
    const savedState = JSON.parse(localStorage.getItem("checkboxState")) || {};
    setCheckedBoxes(savedState);
    
    const activeOptions = Object.keys(savedState).filter(type => savedState[type]);
    const fetchData = async () => {
      await dispatch(getPokemons());   
      await dispatch(filterPokemons(activeOptions));    
    }
    
      fetchData();

  }, [dispatch]);

  const handlerBoxChange = (event) => {
    const { value, checked } = event.target;

    setCheckedBoxes((prevChecked) => {
      const updatedChecked = { ...prevChecked, [value]: checked };
      const activeOptions = Object.keys(updatedChecked).filter(type => updatedChecked[type]);
            
      dispatch(filterPokemons(activeOptions));

      return updatedChecked;
    });
  };

  useEffect(() => {    
    if (isPersistent) {
      localStorage.setItem("checkboxState", JSON.stringify(checkedBoxes));
    } else {
      localStorage.removeItem("checkboxState");
    }
  }, [isPersistent, checkedBoxes]);

  const handleReset = () => {
    setCheckedBoxes({});
    dispatch(filterPokemons([]));
    localStorage.removeItem("checkboxState");
  };

  return (
    <div className={style.mainContainer}>
      <Settings onReset={handleReset}/>
      <div className={style.byType}>
        {typeNames.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={checkedBoxes[type] || false}
              onChange={handlerBoxChange}
            />
            {format(type) + " "}
          </label>
        ))}
      </div>

      <div className={style.bySource}>
        {["API", "DB"].map((_source) => (
          <label key={_source}>
            <input
              type="checkbox"
              value={_source}
              checked={checkedBoxes[_source] || false}
              onChange={handlerBoxChange}
            />
            {_source}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;

