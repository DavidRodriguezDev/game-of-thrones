import React, { useEffect, useState } from 'react'
import './DetailCharacter.scss'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ComeBackButton } from '../components/ComeBackButton';

export const DetailCharacter= () => {
  
    const {idCharacter} = useParams();
    const[character, setCharacter] = useState([]);

    const {appearances, titles, siblings, allegiances} = character
    
    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`https://api.got.show/api/show/characters/${idCharacter}`)
            setCharacter(data);
            console.log(data);
        }
        getData();
    }, []) 

    return (
    <>
    <ComeBackButton backTo="/characters"></ComeBackButton>

    <div className='container-fluid d-flex align-items-center flex-column detail-ch'>

        <img className='detail-ch--img-ch' src={character.image} alt={character.name}></img>
        <h1 className='detail-ch--name'>{character.name}</h1>

        <div className='container-fluid d-flex justify-content-between detail-ch--gallery '>

        <div className='detail-ch--gallery--box'>
        <h2 className='detail-ch--gallery--box--title'>Casa</h2>
        <ul className='detail-ch--gallery--box--details'><img src='' alt='{character.house}'></img></ul>
        </div>

        <div className='detail-ch--gallery--box'>
        <h2 className='detail-ch--gallery--box--title'>Alianzas</h2>
        <ul className='detail-ch--gallery--box--details'>
        {allegiances && allegiances.map((allegiance, index) => <li className='detail-ch--gallery--box--details--list' key={index}>{allegiance}</li>)}
        </ul>
        </div>

        <div className='detail-ch--gallery--box'>
        <h2 className='detail-ch--gallery--box--title'>Apariciones</h2>
        <ul className='detail-ch--gallery--box--details_scroll'>
            {appearances && appearances.map((apariencia, index) => <li className='detail-ch--gallery--box--details--list' key={index}>{apariencia}</li>)}
            
        </ul>
        </div>

        <div className='detail-ch--gallery--box'>
        <h2 className='detail-ch--gallery--box--title'>Padre</h2>
        <ul className='detail-ch--gallery--box--details'><li className='detail-ch--gallery--box--details--list'>{character.father}</li></ul>
        </div>

        <div className='detail-ch--gallery--box'>
        <h2 className='detail-ch--gallery--box--title'>Descendientes</h2>
        <ul className='detail-ch--gallery--box--details'>
        {siblings && siblings.map((sibling, index) => <li className='detail-ch--gallery--box--details--list' key={index}>{sibling}</li>)}
        </ul>
        </div>

        <div className='detail-ch--gallery--box'>
        <h2 className='detail-ch--gallery--box--title'>Titulos</h2>
        <ul className='detail-ch--gallery--box--details_scroll'>
        {titles && titles.map((title, index) => <li className='detail-ch--gallery--box--details--list' key={index}>{title}</li>)}
        </ul>
        </div>
        
    </div>
    </div>
    </>
  )
}
