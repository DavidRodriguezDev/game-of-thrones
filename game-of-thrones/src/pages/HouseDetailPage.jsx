import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ComeBackButton } from '../components/ComeBackButton';


export const HouseDetailPage = () => {
  
    const {idHouse} = useParams();

    const[house, setHouse] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/houses/${idHouse}`)
            setHouse(data[0]);
            console.log(data[0]);
        }
        getData();
    }, []) 

  
    return (
    <div>
      <ComeBackButton backTo="/houses"></ComeBackButton>
      <img src={house.logoURL} alt={house.name}></img>
      <p>{house.name}</p>
     
    </div>
  )
}
