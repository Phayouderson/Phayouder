import { useState } from 'react';
import {BiMenu,BiLogoUpwork} from 'react-icons/bi'
import {LiaTimesSolid} from 'react-icons/lia'
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  
  const [nav,setNav] = useState (false)
  const handleNav = () => setNav (!nav)
  const closeNav = () => setNav(false);

  return (
    <nav>
      
      <div  className= 'navbar'>
        <div className="logo-container">
          <h1>PB</h1>
        </div>
            <ul className= {nav ? 'nav-menu active' : 'nav-menu'}>
              <li><a href="/"onClick={closeNav}>Home</a></li>
              <li><a href="/#about"onClick={closeNav}>About</a></li>
              <li><a href="/#projects"onClick={closeNav}>Projects</a></li>
              <li><a href="/#contact"onClick={closeNav}>Contact</a></li>
            </ul> 
        <div className='hamburger' onClick={handleNav}>
            {!nav ? (<BiMenu/>) : (<LiaTimesSolid/>)}
        </div>
        
      </div>

    </nav>
  );
};

export default Navbar;
