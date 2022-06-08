import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { numericFilter, setNumericFilter } = useContext(PlanetsContext);

  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  console.log(options[0]);
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
    <div>
      <div>
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
      </div>
      <div>
        { numericFilter.map(
          (filter, index) => (
            <div data-testid="filter" key={ `${filter}-${index}` }>
              <p>
                {`${filter.column} ${filter.comparison} ${filter.value}`}
              </p>
              <button
                type="button"
                onClick={ () => handleDeleteFilter(index) }
              >
                Delete
              </button>
            </div>
          ),
        ) }
      </div>
    </div>
  );
}

export default Filters;
