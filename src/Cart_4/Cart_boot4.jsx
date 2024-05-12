import React from 'react'
import Productss from './Fake_api4'

const Cart_boot4 = () => {
  return (
    <div className='container'>
        <div className='row'>
            
                {Productss.map((x)=>{
                    return(
                        <div className='col-md-2 mx-3 my-5'>
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
        <div>
        <img src="/img/11.png" alt="" />
    </div>
        

    </div>
  )
}

export default Cart_boot4