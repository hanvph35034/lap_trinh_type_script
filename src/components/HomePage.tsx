import React, { useEffect, useState } from 'react';
import instance from '~/apis';
import { NavLink } from "react-router-dom";
import { TpProducts } from '~/types/Product';
import Product from './Product';

const HomePage = () => {
  const [products, setProducts] = useState<TpProducts[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get(`/products?_start=${startIndex}&_limit=8`);
        setProducts(response.data);
      } catch (error) {
        console.error( error);
      }
    };
    fetchProducts();
  }, [startIndex]);
  const handleNextClick = () => {
    setStartIndex(startIndex + 8);
  };
  const handlePrevClick = () => {
    if (startIndex >= 10) {
      setStartIndex(startIndex - 8);
    }
  };
  return (
    <div className="home-container">
      <div className="banner">
        <h3>Banner</h3>
      </div>
      <h4>Sản Phẩm Nổi bật</h4>
      <div className="product-grid">
        {products.map((product) => (
         <Product product={product} />
        ))}
      </div>
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default HomePage;
