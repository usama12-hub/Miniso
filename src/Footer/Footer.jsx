import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
<div className="container ">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-danger'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-danger'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-danger'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">About</Link></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <strong><h5 className='text-danger'>Subscribe to our newsletter</h5></strong>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-danger" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <strong><p className='  text-danger '>© Miniso Pakistan. Copyrights © 2023 | All Rights Reserved.</p></strong>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-body-emphasis" to="/"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="/"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="/"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></Link></li>
      </ul>
    </div>
  </footer>
</div>



    </div>
  )
}

export default Footer