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
      <div className='d-flex flex-column align-items-center'>
      <button className='b-chronology--btn' onClick={changeOrder}>{ascOrder ? <span>v</span> 
            : <span>^</span>}</button>
      <div className='b-chronology'>
          {charactersLine.map((element,index) => {
            return (
              <>
                  <div className="b-chronology--card" key={index} style={index % 2 ?
              { "margin-top": "150px", "margin-left": "-1.5px","padding-top":"200px", "height" : "150px", "border-left": "1px solid white" } :
              { "margin-top": "0px", "border-right": "1px solid white" }}>
                    <h3 className='b-chronology--card__age'>{element.age.age}</h3>
                    <h2 className="b-chronology--card__name">{element.name}</h2>
                    <img className="b-chronology--card__img"src={element.image} alt=""/>
                  </div>
                </>)
          })}
      </div>
      </div>
    )
  }