import React from 'react'
import './CharacterCard.scss'

export const CharacterCard = ({characters}) => {
  
    return (
    <div className='container d-flex flex-wrap gap-3 characters-gallery '>
        {characters.map((item)=> 
        <div className='card-item' key={item.id}>
            <img src={item.image}></img>
            <div className='rectangle'>
            <span className='name'>{item.name}</span>
            </div>
        </div>)}
    </div>
  )
}
