import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ComeBackButtonHou } from '../components/ComeBackButtonHou';


export const HouseDetailPage = () => {
  
    const {idHouse} = useParams();

    const[house, setHouse] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/houses/${idHouse}`)
            setHouse(data);
            console.log(data);
        }
        getData();
    }, []) 

  
    return (
    <div>
      <ComeBackButtonHou></ComeBackButtonHou>
      <img src={house.logoUrl} alt={house.name}></img>
      <p>{house.name}</p>
     
    </div>
  )
}
