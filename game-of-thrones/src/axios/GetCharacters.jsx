import React, { useEffect, useState } from 'react'
import axios from "axios"

export const GetCharacters = () => {

    const[characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/characters/")
            setCharacters(data);
            console.log(data);
        }
        getData();
    },[])
  
    return (
    <div>
        {characters && characters.map((item) => {
            return(
                <div className="b-card-container" key={JSON.stringify(item)}>
                    <img src={item.image} alt={item.name}></img>
                    <h3>{item.name}</h3>
                </div>
            )
        } )}
    </div>
  )
}
