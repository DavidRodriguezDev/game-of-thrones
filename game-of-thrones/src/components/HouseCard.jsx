import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HouseCard.scss'


export const HousesCard = ({houses}) => {
 
    const navigate = useNavigate()
  
    return (
    <div className="container-fluid d-flex flex-wrap gap-3 houses-gallery">
        {houses.map((item) => 
    
                <div onClick={()=> navigate(`/houses/${item.name}`)} className='card-shield' key={item.id}>
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
