import React from 'react'
import './Homepage.css'
import axios from 'axios';
import CityCard from '../../CityCard/CityCard';

function Homepage() {

    const [cities, setCities] = React.useState([])

    React.useEffect(
      ()=> {
        axios.get(` https://unilife-server.herokuapp.com/cities?limit=9`)
        .then(res => {
          //console.log(res.data.response)
          setCities(res.data.response)
        })
        .catch(err => console.log(err))
      }
    )


  return (
    <div className="homepage-container">
      <h2 className="accomodations-header">Student accomodations in our top cities</h2>
        <div className="cities-container">
        {
          cities.map( item => <CityCard 
            key={item.id} city={item}
            imageUrl={item.image_url}
            imgHeight={"300px"}
            cardStyle= "city-cards"
            imgRadius= {"24px"}
          />)
        }
        {
          /*cities.map(item => <p>{item.name}</p>)*/
        }
        </div>
    </div>
  )
}

export default Homepage