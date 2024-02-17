import { useState } from 'react';
import {BiMenu,} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'
import { Link } from 'react-scroll';
import PPhoto from './PPhoto.png';
import './Navbar.css';

const Navbar = () => {
  const [nav,setNav] = useState (false)
  const handleNav = () => setNav (!nav)
  return (
    <nav >
      <div className= 'navbar'>
        <div className="logo-container">
          <img src={PPhoto} alt="Logo" className="logo" />
          <p>Phayouderson Borgella</p>
        </div>
        <ul className= {nav ? 'nav-menu active' : 'nav-menu'}>
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<BiMenu/>) : (<LiaTimesSolid/>)}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
