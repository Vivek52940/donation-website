import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll'
function Navbar() {
    return (
       <>
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                    <i class="fas fa-bars"/>
                </label>
                <label className="logo">Hope House</label>
                <ul>
                    <li><Link to="hero">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="gallery">Gallery</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
       </> 
    )
}

export default Navbar;
