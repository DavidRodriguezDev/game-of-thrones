import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
      <Link to="/characters">CHARACTERS</Link>
      <Link to="/houses">HOUSES</Link>
      <Link to="/chronology">CHRONOLOGY</Link>
    </nav>
  )
}
