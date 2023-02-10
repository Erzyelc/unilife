import React from 'react'
import './CityDetails.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'


function CityDetails() {
  const {cityId} = useParams();
  console.log(cityId)

  const [city, setCity] = React.useState('');
  React.useEffect(
    () => {
      axios.get(`https://unilife-server.herokuapp.com/cities/:${cityId}`)
      .then(res => {
        console.log(res)
        setCity(res)
      })
      .catch(err => console.log(err))
    }
  )
  return (
    <div className="city-details-container">
      <h2>{city?.title}</h2>
    </div>
  )
}

export default CityDetails