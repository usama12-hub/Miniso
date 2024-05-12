import React from 'react'
import Items2 from './Fake_api2'


const Cart_Boot2 = () => {
  return (
    <div className='container'>
        <div className='row'>
            {Items2.map((x)=>{
                return(
                    <div className='col-md-2 mx-3'>
  <div className="card" style={{width: '12rem'}}>
  <img src={x.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

                    </div>
                )
            })}

        </div>
        <h2 className='my-2'> <strong>New Arrival Winnie The</strong></h2>
        <h2 className='my2'> <strong>pooh</strong></h2>
    </div>
  )
}

export default Cart_Boot2