import React from 'react'
import { Link } from 'react-router-dom'
const Navebar3 = () => {
  return (
    <div className='container'>
    <div className='row'>
    <nav className="navbar navbar-expand-lg">
<div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="home" ><strong className=''>HOME</strong></Link>
      </li></ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/a"><strong>NEW ARRIVALS</strong></Link>
      </li>
      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/b"><strong>SNACKS AND BISCUITS</strong></Link>
      </li></ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/c"><strong>LOTSO 🧸</strong></Link>
      </li></ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/d"><strong>BARBIE 💃</strong></Link>
      </li></ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/e"><strong>WE BARE BEARS 🐼</strong></Link>
      </li></ul>
      <ul className="navbar-nav"> 
      <li className="nav-item">
        
        
        
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>CATEGORIES</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Action</Link></li>

          </ul>
        </li>

      </ul>
      <ul className="navbar-nav">
      <li className="nav-item">
        

        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>LOYALTY ❤️</strong>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Skin Care</Link></li>
            <li><Link className="dropdown-item" to="#">Garments</Link></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><Link className="dropdown-item" href="#">Bags</Link></li>
            <li><Link className="dropdown-item" to="#">Stationary</Link></li>
            <li><Link className="dropdown-item" to="#">Fragrance</Link></li>
            <li><Link className="dropdown-item" to="#">Mobile Accessories</Link></li>
            <li><Link className="dropdown-item" to="#">Earphones</Link></li>
            <li><Link className="dropdown-item" to="#">Mackup</Link></li>
            <li><Link className="dropdown-item" to="#">Jewellery & Accessories</Link></li>
            <li><Link className="dropdown-item" to="#">Sunglasses</Link></li>
            <li><Link className="dropdown-item" to="#">Kitchenware</Link></li>

          </ul>
        </li>

      </ul>
        
      
      <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/j"><strong>CONTACT US</strong></Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    
    </div>
    </div>
  )
}

export default Navebar3





















