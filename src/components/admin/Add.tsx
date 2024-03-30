import React, { useState } from 'react';
import instance from '~/apis';
import { productVali } from '~/validations/anth';
const Add = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [error, setError] = useState('');
  const [errName, setErrName] = useState('');
  const [errPrice, setErrPrice] = useState('');
  const [errSock, setErrsock] = useState('');
  const [errImage, setErrImage] = useState('');
  const [errDescription, setErrDescriptity] = useState('');

  const handleAddProduct = async (e:any) => {
    e.preventDefault();
    try {
      const newProduct = {
        title: productName,
        price: productPrice,
        quantity: productQuantity,
        description: productDescription,
        image: productImage,
      };
      const { error } = productVali.validate(newProduct);
      if (error) {
        setError(error.message);
        setErrName('tên sản phẩm ko được để trống');
        setErrPrice('giá  phải lớn hơn 6 kí tự');
        setErrsock('số lượng  phải lớn hơn 6 kí tự');
        setErrDescriptity('mô tả phải lớn hơn 10 kí tự');
        setErrImage('ảnh phải lớn hơn 10 kí tự');
        return;
      }
      await instance.post('/products', newProduct);
      console.log('Thêm sản phẩm thành công:', newProduct);

    } catch (error) {
      console.error('không thêm đươc sản phẩm product:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Thêm Sản Phẩm</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleAddProduct}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Tên Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}/>
              {errName && <div className="text-danger">{errName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">giá Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}/>
              {errPrice && <div className="text-danger">{errName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">Mô tả Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="productDescription"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}/>
              {errDescription && <div className="text-danger">{errDescription}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="productQuantity" className="form-label">Số lượng Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="productQuantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}/>
              {errSock && <div className="text-danger">{errSock}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">Ảnh Sản phẩm</label>
              <input
                type="text"
                className="form-control"
                id="productImage"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)} />
              {errImage && <div className="text-danger">{errImage}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
