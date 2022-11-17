import React from 'react'
import "../styles/header.css"
import { AiOutlineHome, AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';

function header() {
  return (
    <div className="header-container">
      <div className="home">
        <AiOutlineHome />
        <p>UniLife</p>
      </div>
      <div className="nav">
        <div className="shortlist">
          <AiOutlineHeart />
          <p>Shortlist</p>
        </div>
        <div className="contact">
          <AiOutlineMail />
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default header