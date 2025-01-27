import React from 'react'
import Footer from './Footer'

const NavBar = (props) => {
  return (
    <div className='logoText'>
        {props.logoText}
      <ul> 
        <li>Hey</li>
        <li>ABout</li>
        <li>Contact Us</li>
        <Footer/>
      </ul>
    </div>
  )
}

export default NavBar
