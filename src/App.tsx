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

// import TableProduct from './components/admin/TableProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>

      <Header />
      {/* <HomePage /> */}
      {/* <DetailProduct /> */}
      {/* <TableProduct /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/:id' element={<DetailProduct />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
   
    </>
  )
}

export default App
