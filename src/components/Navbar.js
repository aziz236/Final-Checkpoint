import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarCss.css'
import MainLogo from '../images/MainLogo.png'

function Navbar() {
    return (
        
    <ul>
     <div className="bg-img">
      <div className="container">
        <img class="logo" src={MainLogo} alt="filmhouse"/>
        <div class="topnav">

        <Link className="NavbarIcons" to='/LoginSection'> Sign up </Link>
        <Link className="NavbarIcons" to='/'>             Home    </Link>
        <Link className="NavbarIcons" to='/NewsSection'>  News    </Link>
        <Link className="NavbarIcons" to='/AboutSection'> About   </Link>

        </div>
      </div>
     </div>
    </ul>
        
    )
}
export default Navbar;
