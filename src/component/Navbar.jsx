import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({cartCount}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link
        className="navbar-brand"
        to='/'
        >ShopKro</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu bg-dark">
              <li>
                <a
                  className="dropdown-item"
                  href="/#products"
                  >Camera</a
                >
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/#products"
                  >Apple Gadgets</a
                >
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="/#products"
                  >Drones</a
                >
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className="nav-link"
              >Cart<i className="bi bi-cart-plus-fill"></i>
              <span className="cart-badge badge text-bg-success">{cartCount}</span></Link>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0 mx-lg-4 order-sm-last">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="myaccount"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              My Account
            </a>
            <ul className="dropdown-menu bg-dark text-light">
              <li>
                <Link
                  className="dropdown-item"
                  to="/myorders"
                  >My Orders</Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  >Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href="/#"
                  >Logout</Link>
              </li>
            </ul>
          </li>
        </ul>
        <form
          className="d-flex search-form"
          role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search" />
          <button
            className="btn btn-success"
            type="submit"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Search for all Products">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
