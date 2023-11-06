import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { persistFilterState, resetFilterState } from '../../redux/actions';
import style from './Settings.module.scss';

const Settings = ({ onReset }) => {
  const dispatch = useDispatch();

  const isPersistent = useSelector((state) => state.filter.isPersistent);
  const [persistFilters, setPersistFilters] = useState(isPersistent);

  const handlePersistFilterChange = () => {
    const newState = !persistFilters;
      
    setPersistFilters(newState);
  
    setTimeout(() => {
      dispatch(persistFilterState(newState));
    }, 0);
    
    setTimeout(() => {
      localStorage.setItem('filterPersistState', JSON.stringify({ isPersistent: newState }));
    }, 0);
  };

  const handleCleanFilter = () => {
    onReset();
    dispatch(resetFilterState());
  };

  useEffect(() => {    
    const { isPersistent: storedIsPersistent } = JSON.parse(localStorage.getItem('filterPersistState')) || {};
    const initialPersistState = storedIsPersistent !== undefined ? storedIsPersistent : isPersistent;
    
    setPersistFilters(initialPersistState);
    
    dispatch(persistFilterState(initialPersistState));
  }, [dispatch, isPersistent]);

  return (
    <div className={style.settingsDropdown}>
      <button className={style.settingsButton}>Filter settings</button>
      <div className={style.settingsContent}>
        <label>
          <input
            className={style.persists}
            type="checkbox"
            checked={persistFilters}
            onChange={handlePersistFilterChange}
          />
          {" "}Persist filter state
        </label>
        <button className={style.reset} onClick={handleCleanFilter}>
          Clean filter
        </button>
      </div>
    </div>
  );
};

export default Settings;