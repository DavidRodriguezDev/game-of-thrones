import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MyLangContext } from '../context/MyLangContext'
import './NavBar.scss'

export const NavBar = () => {

  const {t} = useContext(MyLangContext)


  return (
    <div className='container-fluid d-flex align-items-center nav'>
      <nav className='d-flex justify-content-between flex-wrap nav--container' >
      <NavLink to="/characters" activeclassname={'active'}>{t('nav_ch')}</NavLink>
      <NavLink to="/houses" activeclassname={'active'}>{t('nav_ho')}</NavLink>
      <NavLink to="/chronology" activeclassname={'active'}>{t('nav_cro')}</NavLink>
      </nav>
    </div>
  )
}
