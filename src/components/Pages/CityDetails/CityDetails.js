import React from 'react'
import './CityDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'


function CityDetails() {
  const {cityId} = useParams();
  console.log(cityId)

  return (
    <div className="city-details-container">
      <h2>City Details</h2>
    </div>
  )
}

export default CityDetails