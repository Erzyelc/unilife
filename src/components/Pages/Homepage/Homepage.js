import React from 'react'
import './Homepage.css'
import axios from 'axios';
import CityCard from '../../CityCard/CityCard';
import globe from '../../../assets/globe.png';
import compare from '../../../assets/compare.png';
import bills from '../../../assets/bills.png';

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
            imgRadius= {"24px"}
          />)
        }
        {
          /*cities.map(item => <p>{item.name}</p>)*/
        }
        </div>
        <button>See All Cities</button>
        <div class="compare-container">
          <h2>Compare all inclusive student homes.</h2>
          <div compare-items-container>
          <div>
            <img src={globe} alt="" className="compare-icon"/>
            <h3>Search</h3>
          </div>
          <div>
            <img src={compare} alt="" className="compare-icon"/>
            <h3>Compare</h3>
          </div>
          <div>
            <img src={bills} alt="" className="compare-icon"/>
            <h3>Bills Included</h3>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage