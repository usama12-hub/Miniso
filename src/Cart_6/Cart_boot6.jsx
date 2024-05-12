import React from 'react'
import Iteme1 from './Fake_api6'

const Cart_boot6 = () => {
  return (
    <div className='container'>
        <div className='row'>
            {Iteme1.map((x)=>{
                return(
                    <div className='col-md-2 mx-3 my-4s'>
 <div className="card" style={{width: '12rem'}}>
  <img src={x.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


                    </div>
                )
            })}

        </div>
        <h2 className='my-4'><strong>FEATURED PRODUCTS</strong></h2>
        <h5 className='my3'> Our Recommendations</h5>

    </div>
  )
}

export default Cart_boot6