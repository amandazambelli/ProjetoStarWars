import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { data, setFilteredData } = useContext(PlanetsContext);

  const [filterName, setFilterName] = useState(['']);

  useEffect(() => {
    const filter = data.filter(
      (planet) => planet.name.toLowerCase().includes(filterName),
    );
    setFilteredData(filter);
  }, [filterName]);

  const handleNameChange = ({ target }) => {
    setFilterName(target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Planet Name"
        data-testid="name-filter"
        onChange={ handleNameChange }
      />
    </div>
  );
}

export default Input;
