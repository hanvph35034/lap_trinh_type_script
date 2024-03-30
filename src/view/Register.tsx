import React, { useState } from 'react';
import instance from '~/apis';
import { registerSchema } from '~/validations/anth';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstError, setFirstError] = useState('');
  const [lastError, setLastError] = useState('');
  const [passError, setPassError] = useState('');
  const handleRegister = async (e:any) => {
    e.preventDefault();
    try {
      const newRegister = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
      
      const { error } = registerSchema.validate(newRegister);
      if (error) {
        setError(error.message);
        setEmailError('Email không hợp lệ');
        setFirstError('Tên Đệm phải lớn hơn 6 kí tự');
        setLastError('Tên  phải lớn hơn 6 kí tự');
        setPassError('Mật khẩu phải lớn hơn 10 kí tự');
        return;
      }

      await instance.post('/users', newRegister);
      console.log('Thêm tài khoản thành công', newRegister);
      alert('Thêm tài khoản thành công');
      
    } catch (error) {
      console.error('Thêm tài khoản thất bại', error);
      setError('Thêm tài khoản thất bại');
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Đăng kí tài khoản</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Họ của bạn</label>
              <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              {firstError && <div className="text-danger">{firstError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Tên của bạn</label>
              <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              {lastError && <div className="text-danger">{lastError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <div className="text-danger">{emailError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mật khẩu</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {passError && <div className="text-danger">{passError}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Đăng kí</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
