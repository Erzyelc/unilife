import React from 'react'
import './Homepage.css'
import axios from 'axios';
import CityCard from '../../CityCard/CityCard';
import globe from '../../../assets/globe.png';
import compare from '../../../assets/compare.png';
import bills from '../../../assets/bills.png';
import person from '../../../assets/person.png'
import heart from '../../../assets/heart.png'
import handhome from '../../../assets/handhome.png'
import {Link, useNavigate} from 'react-router-dom'

function Homepage() {

    let navigate = useNavigate();

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
        </div>
        <div className="cities-btn-container">
          <button className="cities-btn" onClick={() => navigate('/Cities')}>See All Cities</button>
        </div>
        <div class="compare-container">
          <h2>Compare all inclusive student homes.</h2>
          <div className= "compare-items-container">
          <div className="compare-item">
            <img src={globe} alt="" className="compare-icon"/>
            <h3>Search</h3>
            <p>Find your dream home in the perfect area near your university.</p>
          </div>
          <div className="compare-item">
            <img src={compare} alt="" className="compare-icon"/>
            <h3>Compare</h3>
            <p>Compare student accomodation to find the right home for you.</p>
          </div>
          <div className="compare-item">
            <img src={bills} alt="" className="compare-icon"/>
            <h3>Bills Included</h3>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
          </div>
        </div>
        <div className="search-container">
          <div className="selection-container">
          <div className="selection-item">
          <img src={heart} alt="#"/>
          <div className="selection-content">
            <h3>Best selection</h3>
            <p>Best selection of student accomodations.<br></br> Never been easier to find a home that's <br></br>right for you.</p>
          </div>
          </div>
          <div className="selection-item">
            <img src={handhome} alt="#"/>
            <div className="selection-content">
              <h3>Your favorite</h3>
              <p>Shortlist your favourite properties and send <br></br>enquiries in one click.</p>
            </div>
          </div>
            <button>Search & Compare</button>
          </div>
          <div className="person">
            <img src={person} alt="#"/>
          </div>
        </div>
    </div>
  )
}

export default Homepage