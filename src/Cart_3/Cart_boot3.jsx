import React from 'react'
import Itemes from './Fake_api3'


const Cart_boot3 = () => {
  return (
    <div className='container'>
        <div className='row'>
            {Itemes.map((x)=>{
                return(
                    <div className='col-md-2 mx-3 my-4'>
  <div className="card" style={{width: '12rem'}}>
  <img src={x.image}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{x.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>

                    </div>
                )
            })}

         

        
        <h2 className='my-3'> <strong>New Arrival Barbie</strong></h2>

    
        </div>
        


    </div>
  )
}

export default Cart_boot3