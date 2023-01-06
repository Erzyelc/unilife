import React from 'react'
import './Header.css'
import UniLife from "../../assets/UniLife.png"
import heart from "../../assets/Vector.png"
import envelope from "../../assets/Vector-2.png"
import house from "../../assets/Vector.svg"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
    <div className="header-logo-container">
        {/*<img src={house} alt="" className="house-img"/>*/}
        <Link to="/"><img src={house} className="house-img"></img></Link>
        <img src={UniLife} alt="" className="logo"/>
    </div>
        <div className="header-sub-container">
            <img src={heart} alt="" className="icon-img"/>
            <a href="/">Shortlist</a>
            <img src={envelope} alt="" className="icon-img"/>
            <a href="/">Contact Us</a>
        </div>
    </div>
  )
}

export default Header