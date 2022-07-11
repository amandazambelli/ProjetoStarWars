import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Input from './components/Input';
import Filters from './components/Filters';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Logo />
      <PlanetsProvider>
        <div className="div-main">
          <div className="div-tabela">
            <Input />
            <Filters />
            <Table />
          </div>
        </div>
      </PlanetsProvider>
    </div>
  );
}

export default App;
