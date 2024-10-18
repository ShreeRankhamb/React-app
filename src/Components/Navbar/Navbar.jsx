import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import menu from '../../assets/menu.png'

const Navbar = () => {



  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo"/>
      <ul>
          <li>Home</li>
          <li>Program</li>
          <li>Alumuni</li>
          <li>Placements</li>
          <li><button className='btn'>Contact</button></li>
      </ul>
      <img src={menu} alt="" className='menu-icon' />
    </nav>
  )
}

export default Navbar
