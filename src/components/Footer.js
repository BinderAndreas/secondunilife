import React from 'react'
import "../styles/footer.css"
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"
import { TbCopyright } from "react-icons/tb";



function Footer() {
  return (
    <div className="footer-container">
      <div className="blue-area">
        <div className='newsletter'>
          <h1>Keep in touch</h1>
          <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
          
        </div>
        <div className='socialize'>
          <h1>Let's Socialize</h1>
          <div className='twitter'><BsFacebook /><p>Facebook</p></div>
          <div className='twitter'><AiFillTwitterCircle /><p>Twitter</p></div>
          <div className='twitter'><AiFillInstagram /><p>Instagram</p></div>
        </div>
      </div>
      <div className="black-area">
        <div className="about">
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy & Cookie Policies</p>
        </div>
        <div className="unilife">
          <p>2022</p>
          <TbCopyright /><p>UniLife</p>
        </div>
      </div>
    </div>
  )
}

export default Footer