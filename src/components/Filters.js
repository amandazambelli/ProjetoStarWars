import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { numericFilter, setNumericFilter } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleNumericFilter = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };

    setNumericFilter([...numericFilter, newFilter]);
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
      </div>
      <div>
        { numericFilter.map(
          (filter, index) => (
            <>
              <p key={ `${filter}-${index}` }>
                {`${filter.column} ${filter.comparison} ${filter.value}`}
              </p>
              <button
                type="button"
              >
                Delete
              </button>
            </>
          ),
        ) }
      </div>
    </div>
  );
}

export default Filters;
