import React from 'react'
import one from './Fake_api'
import { Link } from 'react-router-dom'

const Cart_boot = () => {
  return (
    <div>
      <div className="conatiner">
        <div className="row">
          
            {one.map((x)=>{
              return(
                <div className='col-md-2 mx-3 my-4'>
                <div className="card" style={{width: '12rem'}}>
                  <Link to={`/cart9/${x.id}`}><img src={x.image}className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{x.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
                </div>
              </div>
              
                 </div>

              )
            })}
          </div>
        </div>
      </div>
      
 
  )
}

export default Cart_boot
