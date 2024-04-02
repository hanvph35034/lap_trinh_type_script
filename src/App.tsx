import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, useNavigate } from "react-router-dom";

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
import { TpProducts } from './types/Product';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from './apis/product';
import instance from './apis';


function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<TpProducts[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
  const handleAddProduct = (data: TpProducts) => {
    (async () => {
      const newProduct = await createProduct(data)
      setProducts([...products, newProduct])
      navigate("/admin")
    })();
  }
  const handleEditProduct = (data: TpProducts) => {
    (async () => {
      const product = await updateProduct(data);
      setProducts(
        products.map((i) => (i.id === product.id ? product : i))
      );
      navigate("/admin");
    })();
  };
  const handleDeleteProduct = (id: number | undefined) => {
    (async () => {
      const isConfim = window.confirm('Are you sure you want to delete this product');
      if(isConfim){
        const data = await deleteProduct(`${id}`)
        setProducts(products.filter((i) =>i.id !== id));
      }
    })();
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/DetailProduct/:id' element={<DetailProduct />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register  />} />
        </Route>
        <Route path='/admin'>
          <Route path="/admin" element={<TableProduct products={products} onDel={handleDeleteProduct} />} />
          <Route path='/admin/add' element={<Add onAdd={handleAddProduct} />} />
          <Route path='/admin/edit/:id' element={<Edit onEdit={handleEditProduct} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
