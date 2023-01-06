import React from 'react'
import './Footer.css'
import copyright from "../../assets/Vector-3.png"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-policies">
            <a href="/">About Us</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy & Cookie Policies</a>
        </div>
        <div className="copyright-section">
            <p>2022</p>
            <img src={copyright} alt="" className="copyright-logo"/>
            <p>UniLife</p>
        </div>
    </div>
  )
}

export default Footer