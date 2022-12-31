import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import DogDetails from './components/dogdetails';
import Login from './components/login';
import Register from './components/register';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
function App() {
 

  return (
    <div className='App'>
      {/* use router */}
      <BrowserRouter> 
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/Register' element={<Register/>}></Route>
        <Route exact path='/DogDetails' element={<DogDetails/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;