import React, { useEffect, useState } from 'react';
import instance from '~/apis';

import { TpProducts } from '~/types/Product';

const HomePage = () => {
  const [products, setProducts] = useState<TpProducts[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error( error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
        <h3>Banner</h3>
      </div>
      <h4>Sản Phẩm Nổi bật</h4>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img width={200} height={200} src={product.images?.[0]} alt="Product 1" />
            <h3>{product.title}</h3>
            <p>Thông tin sản phẩm</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="quantity">
              <span>Số lượng: {product.stock}</span>
            </div>
            <p>{product.price}.000 VND</p>
            <a href={product.id}>Chi tiết sản phẩm</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
