
import react from "react";
import "./Hero.css";
import profileimage from "../../assets/adaezepicc.jpg";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    < div  id="home" className="hero" >
      <img className="myimg" src= {profileimage} alt="" />

      <h1>
      Hello, <span>I'm Adaeze Aniekee, </span>  a frontend developer. 
      </h1>

      <p>
        I'm passionate about building responsive web applications that are user-friendly and accessible to everyone
      </p>

      <div className="hero_action">
         <div className="hero_connect"> <AnchorLink className="anchor_link" offset={50} href="#contact">   connect with me </AnchorLink>  </div>
          <div className="hero_resume">My resume</div>
      </div>

    </div>
  );
};

export default Hero;