import React, { useState, useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './Input.css';

function Input() {
  const { data, setFilteredData,
    numericFilter, setNumericFilter } = useContext(PlanetsContext);

  const [filterName, setFilterName] = useState(['']);

  useEffect(() => {
    const filtered = data.filter(
      (planet) => planet.name.toLowerCase().includes(filterName),
    );

    const filterNumeric = numericFilter.reduce(
      (acc, prevFilter) => acc.filter((planet) => {
        switch (prevFilter.comparison) {
        case 'maior que':
          return (planet[prevFilter.column]) > Number(prevFilter.value);
        case 'menor que':
          return (planet[prevFilter.column]) < Number(prevFilter.value);
        case 'igual a':
          return Number(planet[prevFilter.column]) === Number(prevFilter.value);
        default:
          return true;
        }
      }), filtered,
    );

    setFilteredData(filterNumeric);
    setNumericFilter(numericFilter);
  }, [filterName, numericFilter]);

  const handleNameChange = ({ target }) => {
    setFilterName(target.value.toLowerCase());
  };

  return (
    <div className="div-input">
      <input
        className="input-name"
        type="text"
        name="nameFilter"
        placeholder="Planet Name"
        data-testid="name-filter"
        onChange={ handleNameChange }
      />
    </div>
  );
}

export default Input;
