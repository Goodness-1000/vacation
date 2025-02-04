import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h2><Link to={"/"}>Logo</Link></h2>
        <ul className='header-ul'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li>NewsLetter</li>
            <li> <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
        <img/>
    </div>
  )
}

export default Header