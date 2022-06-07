import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
