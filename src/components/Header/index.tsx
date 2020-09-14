import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <h1>Header</h1>
      <div className='buttons'>
        <Link to='/' className='btn'>
          Home
        </Link>
        <Link to='/about' className='btn'>
          About
        </Link>
        <Link to='/animes' className='btn'>
          Animes
        </Link>
        <Link to='/dogs' className='btn'>
          Dogs
        </Link>
      </div>
    </nav>
  )
}

export default Header
