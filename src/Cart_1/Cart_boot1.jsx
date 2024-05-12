import React from 'react'
import Items from './Fake_api1'


const Cart_boot1 = () => {
  return (
    <div className='container'>
        <div className='row'>
            {Items.map((x)=>{
                return(
                    <div className='col-md-2 mx-3'>
<div className="card" style={{width: '12rem'}}>
  <img src={x.image}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div>


                    </div>
                )
            })}

        </div>
        <h2 className='my-3'> <strong>New Arrival Barbie</strong></h2>

    </div>
  )
}

export default Cart_boot1