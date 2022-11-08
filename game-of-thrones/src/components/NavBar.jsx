import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center nav'>
      <nav className='container-fluid d-flex justify-content-between flex-wrap nav--container'>
      <NavLink to="/characters" activeclassname={'active'} >CHARACTERS</NavLink>
      <NavLink to="/houses" activeclassname={'active'} >HOUSES</NavLink>
      <NavLink to="/chronology" activeclassname={'active'} >CHRONOLOGY</NavLink>
      </nav>
    </div>
  )
}
