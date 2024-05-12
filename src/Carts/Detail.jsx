  import React from 'react'
  import { useParams } from 'react-router-dom'
  import one from './Fake_api';


  const Detail = () => {
    const {id}=useParams();
    const usama = one.find((x)=>x.id == id)

    return (
      <div  className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={usama.image} className="img-fluid" alt="..." />
            <h1>{id}</h1>
          </div>
          <div className='col-md-6'>
            <h1>description</h1>

          </div>
        

          </div>


        </div>

      
    )
  }

  export default Detail