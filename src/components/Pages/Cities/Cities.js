import React,{useState} from 'react';
import './Cities.css'
import axios from 'axios'
import CityButtons from '../../CityButtons/CityButtons';

function Cities() {

  const [allCities, setAllCities] = React.useState([])
  
  React.useEffect(
    ()=> {
      axios.get(` https://unilife-server.herokuapp.com/cities?page=1&limit=24`)
      .then(res => {
        setAllCities(res.data.response)
      })
      .catch(err => console.log(err))
    }
  )
  return (
    <div className="all-cities-container">
    <h2 className="accomodations-header">Search by City</h2>
    <div className="all-cities-btns-container">
      {
        allCities.map(item => <CityButtons 
          key={item.id} city={item}
        />)
      }
    </div>
    </div>
  )
}

export default Cities