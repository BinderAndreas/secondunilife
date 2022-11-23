import React from 'react'
import cover from '../assets/cover-img.png'
import '../styles/banner.css'

function Banner({title, text}) {

const bannerstyle = {
    height: '360px',
    backgroundImage:`url("${cover}")`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    position: 'relative',
    zIndex: -2,
}

  return (
    <div style={bannerstyle}>
        <div className='overlay'></div>
        <h1 className='banner-title'>{title}</h1>
        <p className='banner-text'>{text}</p>
    </div>
  )
}

export default Banner