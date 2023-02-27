import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link to ='/'>Accueil</Link>

        <Link to ='/profile/Reinca'>Reinca</Link>

        <Link to ='/profile/Bio'>Bio</Link>
    </nav>
  )
}
