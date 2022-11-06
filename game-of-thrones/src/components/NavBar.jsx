import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
  return (
    <div className='container-fluid d-flex align-items-center nav'>
      <nav className='container d-flex justify-content-between nav--container'>
      <Link to="/characters">CHARACTERS</Link>
      <Link to="/houses">HOUSES</Link>
      <Link to="/chronology">CHRONOLOGY</Link>
      </nav>
    </div>
  )
}