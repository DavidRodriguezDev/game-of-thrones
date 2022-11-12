import React from 'react'
import { CharacterCard } from '../components/CharacterCard'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Search } from '../components/Search'
import { NavBar } from '../components/NavBar'

export const CharactersPage = () => {

    const[characters, setCharacters] = useState([]);
    const [charactersFiltered, setCharactersFiltered] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get("https://api.got.show/api/show/characters/")
            setCharacters([...data]);
            setCharactersFiltered([...data]);
            console.log(data)
        }
        getData();
    },[])

    const searchCharacters = (name) => {
      const filtered = characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
      setCharactersFiltered(filtered)
    }

  return (
    <>
      <Search setSearch={searchCharacters}></Search>
      <CharacterCard characters = {charactersFiltered} ></CharacterCard>
      <NavBar></NavBar>
    </>
  )
}
