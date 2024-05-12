import React from 'react'
import Items121 from './Fake_api8'

const Cart_boot8 = () => {
  return (
    <div className='Cantaner'>
        <div className='row'>
            {Items121.map((x)=>{
                return(
                    <div className='col-md-6'>

                        <img src={x.image} alt=''></img>

                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default Cart_boot8