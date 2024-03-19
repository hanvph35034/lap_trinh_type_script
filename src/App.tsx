import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route } from 'react-router-dom';
import './App.css'
// import {   Products, carts, usersTpye } from './types/Product';
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import DetailProduct from './components/DetailProduct' 
import Login from './view/Login';
import Register from './view/Register';
import NotFound from './view/NotFound';
// import TableProduct from './components/admin/TableProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/DetailProduct/:id' element={<DetailProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
   
    </>
  )
}

export default App
