import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route } from 'react-router-dom';
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './view/Home';
import DetailProduct from './components/DetailProduct' 
import Login from './view/Login';
import Register from './view/Register';
import NotFound from './view/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import TableProduct from './components/admin/TableProduct';
import Add from './components/admin/Add';
import Edit from './components/admin/Edit';


function App() {
  return (
    <>

      <Header />
      <Routes>

        <Route path='/'>
        <Route index element={<Home />} />
        <Route path='/DetailProduct/:id' element={<DetailProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
         </Route>
        <Route path='/admin'>
        <Route index  element={<TableProduct />} />
        <Route path='/admin/add' element={<Add/>} />
        <Route path='/admin/edit/:id' element={<Edit/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
   
    </>
  )
}

export default App
