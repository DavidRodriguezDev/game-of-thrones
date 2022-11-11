import { useContext } from 'react'
import { MyLangContext } from '../context/MyLangContext'
import { LenguageSelect } from './LenguageSelect'
import './Search.scss'

export function Search(){

    const {t} = useContext(MyLangContext)

    return(
        <nav className="container-fluid d-flex align-items-center container-search">
            <div className="container-search--div pb-1 d-flex flex-row align-items-center container-search--div">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="" fill="white" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            <input className="w-100 ms-3 container-search--div--input" type='text' placeholder={t('search')}></input>
            </div>
            <div className='container-search--container-lenguage'>
                <LenguageSelect className="" ></LenguageSelect>
            </div>
        </nav>
    )
}