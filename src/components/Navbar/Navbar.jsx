
import React, { useRef } from "react";
import { useState } from "react"
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/bars-solid.svg"
import menu_close from "../../assets/xmark-solid.svg"




const Navbar = () => {

  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    menuRef.current.style.right="0";
    setIsOpen(true);  // to hide header when menu is open
  }

  const closeMenu = () => {
    menuRef.current.style.right="-200px";
    setIsOpen(false);  // to show header when menu is closed
  }

  
  return (
   <div className={`navbar${isOpen ? "hide-header":"" }`}>
      <img className="logoimg" src= {logo} alt=""  />

      <img src={ menu_open  }  onClick={ openMenu} alt="" width={20} className="nav_open" />

      <ul ref={menuRef} className={`nav-menu ${ isOpen ?"show" : ""}`}>
           
           <img src={ menu_close } onClick={closeMenu} className="nav_close" alt="" width={15} />

          <li><AnchorLink className="anchor_link"  href="#home">Home</AnchorLink></li>
          <li><AnchorLink className="anchor_link" offset={50} href="#about">About me</AnchorLink></li> 
          <li><AnchorLink className="anchor_link" offset={50} href="#services">Services</AnchorLink></li>
          <li><AnchorLink className="anchor_link" offset={50} href="#work">Project</AnchorLink></li>
          <li><AnchorLink className="anchor_link" offset={50} href="#contact">Contact</AnchorLink></li>
      </ul>

      <div className="nav-connect">
      <AnchorLink className="anchor_link" offset={50} href="#contact">
        Connect with me </AnchorLink>
      </div>

      
   </div>
  );
}

export default Navbar;