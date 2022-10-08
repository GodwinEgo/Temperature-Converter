import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator/Calculator';

function App ()
{
  return (
    <Routes>
      <Route path='/' element={ <Calculator /> } />
    </Routes>
  );
}

export default App;
