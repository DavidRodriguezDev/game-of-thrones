import React, { useEffect, useState } from 'react'
import axios from "axios"

export const GetHouses = () => {

    const[houses, setHouses] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/houses")
            setHouses(data);
            console.log(data);
        }
        getData();
    },[])
  
    return (
    <div>
        {houses && houses.map((item) => {
            return(
                <div className="b-card-container" key={JSON.stringify(item)}>
                    <img src={item.logoUrl} alt={item.name}></img>
                    <h3>{item.name}</h3>
                </div>
            )
        } )}
    </div>
  )
}
