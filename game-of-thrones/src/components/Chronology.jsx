import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Chronology.scss"

export const Chronology = () => {
    const [timeline, setTimeline] = useState([]);
    const charactersLine =[]
    const [ascOrder, setAscOrder]= useState(true)
  
    useEffect(() => {
      const getData = async () => {
        const {data} = await axios.get("https://api.got.show/api/show/characters/");
        console.log(data);
        setTimeline(data);
      };
      getData();
    }, []);
  
    for (const character of timeline) {
      if (character.age){
        if (character.age.age){
    charactersLine.push(character)
        }
      }
    }
    const ageOrder = () => {
      if (ascOrder) {
        charactersLine.sort((a, b) => a.age.age - b.age.age);
      } else {
        charactersLine.sort((a, b) => b.age.age - a.age.age);
      }
    }
    const changeOrder=()=>{
      if(ascOrder){
        setAscOrder(false)
        ageOrder()
      }else{
        setAscOrder(true)
        ageOrder()
      }
    }
    ageOrder()
    
    return (
      <>
      <div className='b-chronology'>
          
            {charactersLine[0] && <button className='b-chronology--btn' onClick={changeOrder}>{charactersLine[0].age.age}</button>}
    
          {charactersLine.map(element => {
            return (
              <>
                  <div className="b-chronology--card" key={element.id}>
                    <h4 className='b-chronology--card__age'>{element.age.age}</h4>
                    <h2 className="b-chronology--card__name">{element.name}</h2>
                    <img className="b-chronology--card__img"src={element.image} alt=""/>
                  </div>
                </>)
          })}
      </div>
      </>
    )
  }