import React from "react";
import webdesign from "./graphic-design.svg";
import graphic from "./palette-solid.svg"
import webdev from  "./code-solid.svg"
import uiandux from "./desktop-solid.svg"
import perf from "./rocket-solid.svg"
import api from "./cloud-solid.svg"



const Services_data =  [
    {
    
      icon: webdesign ,
      title: "Web Design",
      description: "I design modern, user-friendly, and fully responsive websites that blend aesthetics with functionality. Let's bring your vision to life!",
    },
    {
      icon: graphic,
      title: "Graphic Design",
      description: "I create visually compelling designs that communicate ideas effectively. From logos to social media graphics, I bring creativity to every project.",
    },
    {
      icon: webdev,
      title: "web Development",
      description: "I build fast, responsive, and user-friendly websites using modern technologies to ensure seamless functionality and great user experiences.",
    },
     {
      icon: uiandux,
      title: "UI/UX Implementation",
      description: "I create user-friendly, visually appealing interfaces that enhance user experience through thoughtful design and seamless functionality.",
     },

     {
      icon: perf,
      title: "Performance Optimization",
      description: "I enhance website speed, responsiveness, and efficiency to ensure smooth user experiences and top-tier performance across all devices.",
    },
    
    {
      icon: api,
      title: "API Integration",
      description: "I connect applications with powerful APIs to enhance functionality, ensuring smooth data exchange and efficient performance",
    },

    
  ]

  export default Services_data;

// To use this data in your component, import the Services_data and use it like this: