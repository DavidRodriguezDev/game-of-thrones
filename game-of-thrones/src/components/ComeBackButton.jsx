import React from 'react'
import { Link } from 'react-router-dom'

export const ComeBackButton = ({back}, {text}) => { 
  return (
   

        <Link to={back}>
            <button>{text}</button>
        </Link>

  )
}
