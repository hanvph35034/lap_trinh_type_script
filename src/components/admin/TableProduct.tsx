import React, { useEffect, useState } from 'react';
import { TpProducts } from '~/types/Product';
import { Table, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import instance from '~/apis';

type Pops ={products : TpProducts[];
onDel:(id:number| undefined) => void
};
const TableProduct = ({products ,onDel} : Pops) => {
  const handledelete = (id : any)=>{
 onDel(id);
  }
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
        {products.map((i) => (
        <tbody key={i.id}>
          
            <tr >
              <td>{i.id}</td>
              <td>
                <img width={100} src={i.images?.[0]} alt="" />
              </td>
              <td>{i.title}</td>
              <td>{i.price}</td>
              <td>{i.stock}</td>
              <td>{i.description}</td>
              <td>
                <Button variant="primary m-2"><NavLink className="nav-link" to={`/admin/edit/${i.id}`}>sửa sản phẩm </NavLink></Button>
                <Button variant="danger" onClick={() => handledelete(i.id)}>xóa</Button>
              </td>
            </tr>
         
        </tbody>
         ))}
      </Table>
    </div></>
  );
};
export default TableProduct;
