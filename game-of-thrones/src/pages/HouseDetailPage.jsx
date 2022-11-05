import React from 'react'
import { useParams } from 'react-router-dom'

export const HouseDetailPage = () => {
  
    const {idHouse} = useParams();

    console.log(idHouse);
  
    return (
    <div>HouseDetailPage</div>
  )
}
