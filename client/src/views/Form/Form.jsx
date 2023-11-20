import React from 'react';
import style from './Form.module.scss';
import axios from 'axios';
import Alert from '../../components/Alert/Alert'; 
import { useState } from 'react';
import { initialPokeData, initialErrorsData, propertyNames, types, transformValue } from './initData';
import { errorHandler, format } from "../../functions";
import validations from './validations';

const defaultImage = "";

const Form = () => {
  const [data, setData] = useState(initialPokeData);
  const [errors, setErrors] = useState(initialErrorsData);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setData({ ...data, [property]: transformValue(property, value)});
    validations({...data, [property] : transformValue(property, value)}, errors, setErrors); 
  };
  
  const checkboxType = (type) => {
    const updatedTypes = data.types.includes(type)
      ? data.types.filter((_type) => _type !== type)
      : [...data.types, type];
  
    setData({ ...data, types: updatedTypes });
    validations({ ...data, types: updatedTypes }, errors, setErrors);
  };  

  const submitHandler = (event) => {
    event.preventDefault();     
    
    const pokeDataWithImage = { ...data, image: defaultImage };
  
    axios.post('http://localhost:3001/pokemons', pokeDataWithImage)
    .then((res) => showAlert(res.data.message || 'Success!', 'success'))
    .catch((error) => {
        showAlert(errorHandler(error), 'error')
    })
  };

  return (    
    <form className={style.mainContainer} onSubmit={submitHandler}>
    {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
    <div>
      {propertyNames.map((property) => (
        <div key={property} className={style.container}>
          <label htmlFor={property}>{format(property)}</label>
          <br />
          <input
            name={property}
            type="text"
            value={data[property]}
            onChange={changeHandler}
            />
            <span className={`${style.validationMessage} ${errors[property] ? style.alertVisible : ''}`}>
              {errors[property]}          
            </span>
          </div>
      ))}
    </div>
    <span className={style.checkboxs}>
      <div>
      {types.map((type) => (
        <label key={type}>
          <input
            type="checkbox"
            value={type}
            checked={data.types.includes(type)}
            onChange={() => checkboxType(type)}
          />
          {format(type) + ' '}
        </label>
      ))}            
    </div>
      {errors.types && (
        <span className={`${style.validationMessage} ${errors.types ? style.alertVisible : ''}`}>
          {errors.types}
        </span>  
      )}
    </span>
    <button type="submit" disabled={Object.values(errors).some((error) => error !== '')}>
      Submit
    </button>
  </form>
  );
};

export default Form;


  