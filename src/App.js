import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Input from './components/Input';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <Input />
        <Filters />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
