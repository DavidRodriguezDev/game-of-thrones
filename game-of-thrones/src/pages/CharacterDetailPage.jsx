import React from 'react'
import {DetailCharacter} from '../components/DetailCharacter'


export const CharacterDetailPage = () => {
  
    return (
<<<<<<< HEAD
    <div className='b-charactersDetail__container'>
        <ComeBackButtonCh></ComeBackButtonCh>
        <div className='b-charactersDetail__image'>
            <img src={character.image} alt={character.name}></img>
            <h2>{character.name}</h2>
        </div>
        <div className='b-charactersDetail__info'>
            <p>{character.house}</p>
            <p>{character.allegiances}</p>
            <p>{character.appearances}</p>
            <p>{character.father}</p>
            <p>{character.siblings}</p>
            <p>{character.titles}</p>
        </div>    

    </div>
=======
    <DetailCharacter></DetailCharacter>
>>>>>>> dev
  )
}
