import React from 'react'
import Icon404 from '../error.png';

function Error() {
  return (
    <div className='error'>
      
        <p> Oops , Page not found.</p>
        <div>
        <img src={Icon404} alt="Icon404" width={200} height={200} style={{marginLeft:"10px"}} />

        </div>
        
    </div>
  )
}

export default Error