import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ComeBackButtonCh } from '../components/ComeBackButtonCh';

export const CharacterDetailPage = () => {
  
    const {idCharacter} = useParams();

    const[character, setCharacter] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/characters/${idCharacter}`)
            setCharacter(data);
            console.log(data);
        }
        getData();
    }, [])

    return (
    <div>
        <ComeBackButtonCh></ComeBackButtonCh>
        <img src={character.image} alt={character.name}></img>
        <h2>{character.name}</h2>
        <p>{character.house}</p>
        <p>{character.allegiances}</p>
        <p>{character.appearances}</p>
        <p>{character.father}</p>
        <p>{character.siblings}</p>
        <p>{character.titles}</p>
    </div>
  )
}