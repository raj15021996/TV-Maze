import React, { useState } from 'react'

function Actors(props) {
    const {data}  = props;
    return data.map((item)=>{
      return (
    <div className='outerDiv'>
          {
            (item.person.image)? <img src={item?.person?.image?.medium } alt='no img found'/> 
          : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' alt='no img found'/>
          }
          <div className='infoDiv'>
              <p className='infoPara'>Name: {item?.person?.name}</p>
              {
                (item.person.country)? <p className='infoPara' >Country: {item?.person?.country?.name}</p> : <p className='infoPara' >Country: NA</p>
              }
             {
              (item.person.birthday)? <p className='infoPara'>D.O.B: {item?.person?.birthday}</p>:<p className='infoPara'>D.O.B: NA</p>
             }
              
          </div>
      </div>
  )
})
}
export default Actors;
