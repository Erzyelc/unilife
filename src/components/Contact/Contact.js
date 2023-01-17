import React from 'react'
import './Conctact.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'

function Contact() {
  return (
    <div className="contact-container">
    <div className="connect-container">
      <h2>Keep in touch</h2>
      <p>Curious about new offerings? Sign up for our <br></br>weekly newsletter and stay informed</p>
      <input 
        className="connect-input"
        type="text"
        placeholder="Your email"
        />
    </div>
    <div className="socialize-container">
    <h2>Let's Socialize</h2>
      <div className="social-item">
        <img src={facebook} alt="#"/>
        <h4><a href="#">Facebook</a></h4>
      </div>
      <div className="social-item">
        <img src={twitter} alt="#"/>
        <h4><a href="#">Twitter</a></h4>
      </div>
      <div className="social-item">
        <img src={instagram} alt="#"/>
        <h4><a href="#">Instagram</a></h4>
      </div>
      
    </div>
  </div>
  )
}

export default Contact