// Componente link do React-Router-Dom
import { Link } from 'react-router-dom'

import "./Navbar.css"

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>Streaming API</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/new'} className='new-btn'>Novo Post</Link>                  
            </li>
            
        </ul>
    </nav>
  )
}

export default Navbar