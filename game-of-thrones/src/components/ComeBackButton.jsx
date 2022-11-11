import React, { useContext } from 'react'
import './ComeBackButton.scss'
import { Link } from 'react-router-dom'
import { MyLangContext } from '../context/MyLangContext'
import { LenguageSelect } from './LenguageSelect'

export const ComeBackButton = ({backTo}) => {

  const {t} = useContext(MyLangContext)

  return (
    <div className='container-fluid align-items-center d-flex flex-row nav-back'>

        <Link to={backTo} className='back w-50'>
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        <span className='ms-4'>{t('back')}</span>
        </Link>
        <div className='w-50 d-flex justify-content-end gap-4'><LenguageSelect></LenguageSelect></div>
        
    </div>

  )
}
