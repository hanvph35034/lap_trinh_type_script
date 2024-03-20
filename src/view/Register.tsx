import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Đăng kí tài khoản</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Họ của bạn </label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Tên của bạn </label>
              <input type="text" className="form-control" id="lastName" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mật Khẩu</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Đăng kí</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
