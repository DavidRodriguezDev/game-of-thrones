import React from 'react'
import './CharacterCard.scss'
import {useNavigate} from "react-router-dom";
export const CharacterCard = ({characters}) => {

    const navigate = useNavigate()

    return (
    <div className='container-fluid d-flex flex-wrap gap-4 characters-gallery '>
        {characters.map((item)=> 
        <div onClick={()=> navigate(`/characters/${item.name}`)} className='card-item' key={item.id}>
            <img src={item.image} alt={item.name}></img>
            <div className='rectangle'>
            <span className='name'>{item.name}</span>
            </div>
        </div>)}
    </div>
  )
}



