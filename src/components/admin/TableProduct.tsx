import React, { useEffect, useState } from 'react'
import { Products } from '~/types/Product';
import { Table, Button } from 'react-bootstrap';
const TableProduct = () => {
  const [product, setProdcut] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then((data) => { setProdcut(data); })
  }, []);
  return (
    <>
    <div>
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
      <tbody>
      {product.map((product: Products) => (
        <tr>
       <td>{product.id}</td>
       <td><img width={100} src={product.images[0] || ""} alt="" /></td>
       <td>{product.title}</td>
       <td>{product.price}</td>
       <td>{product.stock}</td>
       <td>{product.description }</td>
       <td> <Button variant="primary m-2">sửa </Button>
       <Button variant="danger">xóa</Button></td>
       </tr>
       ))}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default TableProduct