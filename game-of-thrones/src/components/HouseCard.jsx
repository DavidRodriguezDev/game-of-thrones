import React, { useEffect, useState } from 'react'
import axios from "axios"
import './HouseCard.scss'


export const HousesCard = () => {

    const[houses, setHouses] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} =await axios.get("https://api.got.show/api/show/houses")
            setHouses(data);
            console.log(data);
        }
        getData();
    },[])
  
    return (
    <div className="container-fluid d-flex justify-content-between flex-wrap gap-3 houses-gallery">
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
