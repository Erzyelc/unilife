import React from 'react'
import './CityButtons.css'
import {Link} from 'react-router-dom'

function CityButtons({city}) {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/citydetails/${city.id}`}>
    <div>
        <div className="city-btn-container">
            <button className="city-btn">{city.name}</button>
        </div>
    </div>

    </Link>
  )
}

export default CityButtons