import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaBitcoin, FaYoutube, FaSquareGithub} from "react-icons/fa6"
import {BsInstagram} from "react-icons/bs"

const Navbar = () => {
    const[show, setShow] = useState(false);
  return <>
  
  <nav className={show ? "navbar navbar_show":"navbar"}>
    <div className="logo">
        <img src="/logo1.png" alt="logo" />
    </div>
    <div className="links">
        <ul>
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/donate"}>DONATE US</Link></li>
            <li><Link to={"/about"}>ABOUT</Link></li>
            <li><Link to={"/contact"}>CONTACT US</Link></li>
        </ul>
        <ul>
            <li><Link to={"/"}>
            <FaBitcoin/>
            </Link>
            </li>
            <li><Link to={"/"}><FaYoutube/></Link></li>
            <li><Link to={"/"}><FaSquareGithub/></Link></li>
            <li><Link to={"/"}><BsInstagram/></Link></li>
        </ul>
    </div>
  </nav>
  </>;
  
};

export default Navbar;
