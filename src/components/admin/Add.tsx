
import { TpProducts } from '~/types/Product';
import React, { useEffect, useState } from 'react';

import instance from '~/apis';
type Props = {}

const Add = (props: Props) => {
  const [products, setProducts] = useState<TpProducts[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get('/products');
        
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center mb-4">Thêm Sản Phẩm</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">Tên Sản phẩm</label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Giá  </label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Số lượng  </label>
            <input type="text" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mô tả</label>
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Ảnh</label>
            <input type="text" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Add