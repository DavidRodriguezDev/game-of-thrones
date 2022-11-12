import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {HousesCard} from '../components/HouseCard'
import { NavBar } from '../components/NavBar'
import { Search } from '../components/Search'

export const HousesPage = () => {

  const[myHouses, setMyHouses] = useState([]);
  const[housesFiltered, setHousesFiltered] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const {data} =await axios.get("https://api.got.show/api/show/houses")
        setMyHouses(data);
        setHousesFiltered(data);
    }
    getData();
},[])

    const searchHouses = (name) => {
      const filtered = myHouses.filter((house) => house.name.toLowerCase().includes(name.toLowerCase()))
      setHousesFiltered(filtered)
    } 


  return (
    <>
      <Search setSearch={searchHouses}></Search>
      <HousesCard houses={housesFiltered}></HousesCard>
      <NavBar></NavBar>
    </>

    
  )
}
