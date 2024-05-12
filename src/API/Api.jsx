import React from 'react'
import Api1 from './Fake_api'
import '../App.css' ;

const Api = () => {
  return (
    <div className='container'>
        <div className='row'>
            {Api1.map((x)=>{
                return(
                    <div className='col-md-2 hover11 column'>
                        
                       <figure> <img src={x.image} alt='#'></img></figure>

                    </div>
                )
            })}

        </div>

    </div>
  )
}

export default Api