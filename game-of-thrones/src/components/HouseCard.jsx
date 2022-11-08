import React from 'react'
import './HouseCard.scss'


export const HousesCard = ({houses}) => {
 
  
    return (
    <div className="container-fluid d-flex flex-wrap gap-3 houses-gallery">
        {houses.map((item) => 
    
                <div className='card-shield' key={item.id}>
                <div className='w-100 card-shield--div-img'>
                    <img src={item.logoURL?item.logoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} alt={item.name}></img>
                </div>
                    <span className='titleShield'>{item.name}</span>
                </div>
            )
        } 
    </div>
  )
}
