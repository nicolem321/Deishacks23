import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => (
  <nav style={{ display: 'flex', listStyle: 'none', margin: 20, padding: 0 }}>
    <li style={{ flex: 1, padding: 10 }}>
        <img src="https://images.squarespace-cdn.com/content/v1/559f7e16e4b009271a8fa1b5/b4f955e0-d036-4e48-9749-eb26d5bdc2ae/CRMII+2019+logo+round+f+dark+color-01.jpg?format=1500w" alt="Logo" style={{ height: 200 }} />
    </li>
    <li style={{ flex: 1, textAlign: 'left', padding: 50}}>
    <p>Charles River Museum Product Information</p>
    </li>
    <li style={{ flex: 1, textAlign: 'right', padding: 60 }}>
    <FaSearch size={32} /> <p></p>
    <FaEnvelope size={32} />
    </li>
  </nav>
);

export default Navbar;
