import React, { useEffect, useState } from 'react';
import { TpProducts } from '~/types/Product';
import { Table, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import instance from '~/apis';

const TableProduct = () => {
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

  const handleDeleteProduct = async (productId: string) => {
    const confirmDelete = window.confirm('Bạn có muốn xóa sản phẩm này không?');
    if (confirmDelete) {
      try {
        await instance.delete(`/products/${productId}`);
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
    <div>
      <Button variant="success">
        <NavLink className="nav-link" to="/admin/add">
          Thêm sản phẩm
        </NavLink>
      </Button>
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        {products.map((product) => (
        <tbody key={product.id}>
          
            <tr >
              <td>{product.id}</td>
              <td>
                <img width={100} src={product.images?.[0]} alt="" />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.description}</td>
              <td>
                <Button variant="primary m-2"><NavLink className="nav-link" to={`/admin/edit/${product.id}`}>sửa sản phẩm </NavLink></Button>
                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>xóa</Button>
              </td>
            </tr>
         
        </tbody>
         ))}
      </Table>
    </div></>
  );
};
export default TableProduct;
