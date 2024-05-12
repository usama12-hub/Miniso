import React from 'react'
import { Link } from "react-router-dom";
const Navebar2 = () => {
  return (
    <div className="container ">
      <div className="row">
        <nav className="navbar navbar-expand-lg" style={{ height: "150px", }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNav"
            >
              <ul className="navbar-nav mx-5"></ul>
              <ul className="navbar-brand">
                <Link to="#">
                  <img src="/img/logo.avif " alt="" style={{ width: "225px" }} />
                </Link>
              </ul>
              <ul className="navbar-nav fs-5">
                <li className="nav-item">
                  <Link className="nav-link" to="search">
                  
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="setting">
                    <i class="fa-solid fa-user"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navebar2