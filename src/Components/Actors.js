import React, { useState } from 'react'

function Actors(props) {
    const {data}  = props; 
    return data.map((item)=>{
      return (

        // getting Actor Details from API and set it in proper manners in div
        <a href={item?._embedded?.show?.url}>{
    <div className='outerDiv'>
          {
            (item._embedded.show.image)? <img src={item?._embedded?.show?.image?.medium} alt='no img found'/> 
          : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' alt='no img found'/>
          }
          <div className='infoDiv'>
              <p className='infoPara'>Name: {item?._embedded?.show?.name}</p>
              {
                (item._embedded.show.language)? <p className='infoPara' >Language: {item?._embedded?.show?.language}</p> : <p className='infoPara' >Language: NA</p>
              }
             {
              (item._embedded.show.rating.average)? <p className='infoPara'> Rating: {item?._embedded?.show?.rating?.average} ⭐</p>:<p className='infoPara'>Rating: NA ⭐</p>
             }
              
          </div>
      </div>
        } </a>
  )
})
}
export default Actors;

{/* <div className='outerDiv'>
          {
            (item.person.image)? <a href={item?.person?._links?.self?.href}><img src={item?.person?.image?.medium } alt='no img found'/> </a>
          : <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png' alt='no img found'/>
          }
          <div className='infoDiv'>
              <p className='infoPara'>Name: {item?.person?.name}</p>
              {
                (item.person.country)? <p className='infoPara' >Country: {item?.person?.country?.name}</p> : <p className='infoPara' >Country: NA</p>
              }
             {
              (item.person._links.self)? <a className='infoPara' href={item?.person?._links?.self?.href}> link </a>:<p className='infoPara'></p>
             }
              
          </div>
      </div> */}