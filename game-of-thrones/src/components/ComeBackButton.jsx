import React from 'react'
import { Link } from 'react-router-dom'

export const ComeBackButton = ({backTo}) => {

  return (
    <div>
        <Link to={backTo}>
            <button>Volver</button>
        </Link>
    </div>

  )
}
