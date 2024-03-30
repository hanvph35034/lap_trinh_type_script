import React, { useState ,useEffect} from 'react';
import instance from '~/apis';
import { TpProducts } from '~/types/Product';
import { useParams } from 'react-router-dom'; 

const Edit = () => {
  const [products, setProducts] = useState<TpProducts | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get(`/products/${id}`);
        setProducts(response.data);
      } catch (error) {
        console.error('không lấy duoc du liệu products:', error);
      }
    };

    fetchProducts();
  }, [id]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    if (products) {
      setProductName(products.title || '');
      setProductPrice(products.price || '');
      setProductQuantity(products.stock || '');
      setProductDescription(products.description || '');
      setProductImage(products.images || '');
    }
  }, [products]);

  const handleEditProduct = async (e:any) => {
    e.preventDefault();
    try {
      const updatedProduct = {
        title: productName,
        price: productPrice,
        stock: productQuantity,
        description: productDescription,
        images: productImage,
      };
      await instance.patch(`/products/${id}`, updatedProduct);
      console.log('Sửa sản phẩm thành công:', updatedProduct);
    } catch (error) {
      console.error('Lỗi khi sửa sản phẩm:', error);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Sửa Sản Phẩm</h2>
          {products && (
            <form onSubmit={handleEditProduct}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên Sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  key={products.id}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Giá Sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  key={products.id}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">Mô tả Sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="productDescription"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  key={products.id}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productQuantity" className="form-label">Số lượng Sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="productQuantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  key={products.id}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">Ảnh Sản phẩm</label>
                <input
                  type="text"
                  className="form-control"
                  id="productImage"
                  value={productImage}
                  onChange={(e) => setProductImage(e.target.value)}
                  key={products.id}
                  
                />
              </div>
              <button type="submit" className="btn btn-primary">Sửa sản phẩm</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;
