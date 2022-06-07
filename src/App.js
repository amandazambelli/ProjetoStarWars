import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Input from './components/Input';

function App() {
  return (
    <div>
      <PlanetsProvider>
        <Input />
        <Table />
      </PlanetsProvider>
    </div>
  );
}

export default App;
