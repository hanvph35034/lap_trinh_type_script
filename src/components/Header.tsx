import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="nav-link"  to="/">Trang chủ</NavLink>
              <NavLink className="nav-link" to="/">Danh mục</NavLink>
              <NavLink className="nav-link" to="/register">
                Đăng nhập <i className="fas fa-user"></i>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex">
            <input type="text" placeholder="Tìm kiếm" className="mr-sm-8" />
            <Button variant="outline-success">Tìm kiếm</Button>
          </div>
        </Navbar>
      </header>
    </>
  )
}

export default Header