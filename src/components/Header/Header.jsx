import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import './Header.css'

const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className='header-container'>
          <div className='logo'>
            <h1>Supreme</h1>
          </div>

          <nav className='navigation-links'>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='#'>Products</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'><IoCartOutline /></a></li>
            </ul>
          </nav>

        </div>

      </header>
      
    </div>
  )
}

export default Header
