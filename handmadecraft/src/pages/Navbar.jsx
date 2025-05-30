import React from 'react';
import { CiLogin } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-success" to="/"> Craftora</Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/shop">Shop</Link>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu bg-black" aria-labelledby="categoriesDropdown">
                <li><Link className="dropdown-item text-white" to="/category/jewellery">Jewellery</Link></li>
                <li><Link className="dropdown-item text-white" to="/category/Art & Dec">Art & Dec</Link></li>
                <li><Link className="dropdown-item text-white" to="/category/Candle">Candle</Link></li>
                <li><Link className="dropdown-item text-white" to="/category/Knitted Goods">Knitted Goods</Link></li>
              </ul>
            </li>


            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex me-3">
            <input
              className="form-control form-control-sm"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          {/* Icons */}
          <Link to="/cart" className="me-3 text-dark">
            <i className="bi bi-cart-fill fs-5"></i>
          </Link>


          <Link className="nav-link text-white" to="/login">
            <CiLogin size={20} /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
