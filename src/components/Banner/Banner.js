import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className="banner-container">
    <div className="banner-overlay"></div>
        <h1 className="banner-heading">Find student homes <br></br>with bills included</h1>
        <p className="banner-paragraph">A simple and faster way to search for student accommodation</p>
        <div className="forms-container">
            <input type="text"
                placeholder="Search by city"
                className="form-item"
            />
            <input type="text"
                placeholder="Any bedroom"
                className="form-item"
            />
            <input type="submit"
                value="Find Homes"
                className="form-btn"
            />
        </div>
    </div>
  )
}

export default Banner