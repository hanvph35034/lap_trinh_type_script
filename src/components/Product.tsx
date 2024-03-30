import React from 'react'
import { TpProducts } from '~/types/Product';
import { NavLink } from 'react-router-dom';
type Props = { product: TpProducts};
const Product = (props: Props) => {
  return (
     <div className="product-item" key={props.product.id}>
            <img width={200} height={200} src={props.product.images?.[0]} alt="Product 1" />
            <h3>{props.product.title}</h3>
            <p>Thông tin sản phẩm</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="quantity">
              <span>Số lượng: {props.product.stock}</span>
            </div>
            <p>{props.product.price}.000 VND</p>
            <NavLink to={`/DetailProduct/${props.product.id}`}>chi tiết sản phẩm</NavLink>
          </div>
  )
}

export default Product