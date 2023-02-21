import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Cart';
import Home from './components/Home';
import Nav from './components/Nav';
import Show from './components/Show';
import Login from './components/Login';
import Resister from './components/Resister';
import PrivateCom from './components/PrivateComponent';
import '../src/App.css'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
     <Routes>
      <Route element={<PrivateCom/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>} />
      <Route path='/show' element={<Show/>} />
      </Route>
      <Route path='/resister' element={<Resister/>} />
      <Route path='/login' element={<Login/>} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
