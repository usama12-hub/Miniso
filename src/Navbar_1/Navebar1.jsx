import React from 'react'
import { Link } from 'react-router-dom'

const Navebar_1 = () => {
  return (
    <div className="container">
    <div className="row">
      <nav
        className="navbar navbar-expand-lg bg-danger"
        style={{ height: "45px" }}
      >
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
            <ul className="navbar-nav" style={{ fontSize: "14.5px" }}>
              <li className="nav-item">
                <Link className="nav-link" to="/number" >
                  <i class="fa-solid fa-phone-flip"></i>+92 306 1591 044
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav" style={{ fontSize: "14.5px" }}>
              <Link className="nav-link" to="#" >
                Free Delivery on orders more than Rs5000
                <i class="fa-solid fa-truck mx-1"></i>
              </Link>
            </ul>
            <ul className="navbar-nav mx-4" style={{ fontSize: "14.5px" }}>
              <Link className="nav-link" to="link1" >
                <i class="fa-brands fa-facebook mx-2"></i>
                </Link>
                <Link className="nav-link" to="link2" >
                <i class="fa-brands fa-instagram mx-2"></i>
                </Link>
                <Link className="nav-link" to="link3" >
                <i class="fa-brands fa-youtube mx-2"></i>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>

  )
}

export default Navebar_1