import React, { useState } from 'react'; // Import useState
import instance from '~/apis';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const navigate = useNavigate();
  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission

    try {
     
      const response = await instance.post('/users', { email, password });
      if (!response.data.success) {
        alert('Dang nhap thanh cong');
        navigate('/');
        console.log('Login successful! Redirecting...');
      } else {
        alert('Dang nhap that bai');
        console.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Đăng Nhập tài khoản</h2>
          <form onSubmit={handleSubmit}> {/* Attach onSubmit handler */}
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Mật khẩu</label>
              <input
                type="text" 
                className="form-control"
                id="loginPassword"
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
              />
            </div>
            <button type="submit" className="btn btn-primary">Đăng Nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
