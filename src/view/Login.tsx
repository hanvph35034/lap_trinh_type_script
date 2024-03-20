import React from 'react'

type Props = {}

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <h2 className="text-center mb-4">Đăng Nhập tài khoản</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="loginEmail" />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Mật khẩu</label>
              <input type="text" className="form-control" id="loginPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Đặng Nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login