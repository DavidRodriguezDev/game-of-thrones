import React from 'react'
import { CharacterCard } from '../components/CharacterCard'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Search } from '../components/Search'

export const CharactersPage = () => {

    const[characters, setCharacters] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/characters/")
            setCharacters([...data]);
            console.log(data)
        }
        getData();
    },[])

  return (
    <div>
      <Search></Search>
      <CharacterCard characters = {characters} ></CharacterCard>
    </div>
  )
}
