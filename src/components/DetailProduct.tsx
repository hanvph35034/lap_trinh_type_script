import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { TpProducts } from '~/types/Product';
import instance from '~/apis';
import { useParams } from 'react-router-dom'; 
const DetailProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<TpProducts | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const response = await instance.get(`/products/${id}`); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);
  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Container>
     
          <Row>

            <Col md={6}>
              <Image src={products.thumbnail} fluid />
            </Col>
            <Col md={6}>
              <h3>{products.title}</h3>
              <p>Giá: $100</p>
              <p>Số lượng: {products.stock}</p>
              <p>Mô tả: {products.description}.</p>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Bình luận</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Gửi bình luận
                </Button>
              </Form>
            </Col>

          </Row>
     
      </Container>
    </div>
  );
};

export default DetailProduct;