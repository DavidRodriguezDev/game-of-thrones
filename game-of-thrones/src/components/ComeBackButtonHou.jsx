import React from 'react'
import { Link } from 'react-router-dom'

export const ComeBackButtonHou = () => {
  return (
    <div>
        <Link to="/houses">
            <button>VOLVER</button>
        </Link>
    </div>
  )
}
