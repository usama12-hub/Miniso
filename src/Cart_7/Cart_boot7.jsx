import React from 'react'
import Items21 from './Fake_api7'

const Cart_boot7 = () => {
  return (
    <div className='Container'>
        <div className='row'>
            {Items21.map((x)=>{
                return(
                    <div className='col-md-3 my-5'>
<div className="card" style={{width: '18rem'}}>
  <img src={x.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example </p>
  </div>
</div>

                    </div>
                )
            })}

        </div>

        <h2 className='my-4'> <strong>Our Favorites!</strong></h2>
        <h6 className='my3'>Shop from our best selling collections
</h6>

    </div>
  )
}

export default Cart_boot7