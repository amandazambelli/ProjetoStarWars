import React, { useState, useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import PlanetsContext from '../context/PlanetsContext';
import './Filters.css';

function Filters() {
  const { numericFilter, setNumericFilter } = useContext(PlanetsContext);

  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleNumericFilter = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };

    const filtered = [...numericFilter, newFilter];

    const filteredOptions = filtered.reduce((acc, prevFilter) => {
      const newOption = acc.filter((option) => option !== prevFilter.column);
      return newOption;
    }, options);
    setOptions(filteredOptions);
    setNumericFilter(filtered);
    setColumn(filteredOptions[0]);
  };

  const handleClearFilters = () => {
    setNumericFilter([]);
  };

  const handleDeleteFilter = (index) => {
    setNumericFilter(numericFilter.filter((filt, filtIndex) => filtIndex !== index));
  };

  return (
    <div className="filter-container">
      <div className="filter">
        <select
          name="columnFilter"
          data-testid="column-filter"
          label="Coluna"
          onChange={ ({ target }) => setColumn(target.value) }
          value={ column }
        >
          { options.map(
            (opt) => <option key={ opt } value={ opt }>{ opt }</option>,
          ) }
        </select>
        <select
          name="comparisonFilter"
          data-testid="comparison-filter"
          label="Operador"
          onChange={ ({ target }) => setComparison(target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="valueFilter"
          type="number"
          data-testid="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleNumericFilter }
        >
          Filtrar
        </button>
        {
          numericFilter.length
            ? (
              <button
                data-testid="button-remove-filters"
                type="button"
                onClick={ handleClearFilters }
              >
                Limpar Filtros
              </button>
            ) : null
        }
        { /* <select
          name="columnSortFilter"
          data-testid="column-sort"
          label="Ordenar"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <div className="radio-container">
          <label htmlFor="ascendente">
            <input
              id="ascendente"
              type="radio"
              data-testid="column-sort-input-asc"
              name="columnSortAsc"
              value="ASC"
              checked
            />
            <div className="custom-radio">
              <span />
            </div>
            <span>Ascendente</span>
          </label>
          <label htmlFor="descendente">
            <input
              className="radio"
              id="descendente"
              type="radio"
              data-testid="column-sort-input-desc"
              name="columnSortAsc"
              value="DESC"
            />
            <div className="custom-radio">
              <span />
            </div>
            <span>Descendente</span>
          </label>
        </div>
        <button
          type="button"
          testid="column-sort-button"
        >
          Ordenar
        </button> */ }
      </div>
      <div className="p-filter-container">
        { numericFilter.map(
          (filter, index) => (
            <div className="p-btn" data-testid="filter" key={ `${filter}-${index}` }>
              <p>
                {`${filter.column} ${filter.comparison} ${filter.value}`}
              </p>
              <button
                type="button"
                onClick={ () => handleDeleteFilter(index) }
              >
                <MdDelete />
              </button>
            </div>
          ),
        ) }
      </div>
    </div>
  );
}

export default Filters;
