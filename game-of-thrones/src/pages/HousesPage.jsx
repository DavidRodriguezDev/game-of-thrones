import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {HousesCard} from '../components/HouseCard'
import { Search } from '../components/Search'

export const HousesPage = () => {

  const[myHouses, setMyHouses] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const {data} =await axios.get("https://api.got.show/api/show/houses")
        setMyHouses(data);
        console.log(data);
    }
    getData();
},[])


  return (
    <>
      <Search></Search>
      <HousesCard houses={myHouses}></HousesCard>
    </>

    
  )
}
