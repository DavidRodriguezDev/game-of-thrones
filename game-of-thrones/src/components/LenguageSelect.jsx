import { useContext } from 'react'
import homeLogo from '../assets/home.svg'
import spainLogo from '../assets/spain.svg'
import ukLogo from '../assets/uk.svg'
import { Link } from 'react-router-dom'
import { MyLangContext } from '../context/MyLangContext'
import './LenguageSelect.scss'

export const LenguageSelect = () =>{
    
    const {changeLenguage } = useContext(MyLangContext)

    return(
        <>
        <Link to='/'> 
            <img className='lenguage' src={homeLogo} alt=""></img>
        </Link> 

            <img onClick={()=> changeLenguage('es')} className='lenguage' src={spainLogo} alt=""></img>
            <img onClick={()=> changeLenguage('en')} className='lenguage' src={ukLogo} alt="English"></img>
        </>
        
    )
}