
import React from "react";
import './Services.css'
import Services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow-right-solid.svg'

const Services = () => {
  return(
    <div  id="services" className="services">
      <div className="services_title">
        <h1>My Services</h1>
        
      </div >

      <div className="services_container">
        {Services_data.map((service,index)=>{
          return(
            <div key={index} className='services_format'>
              <img src={service.icon} alt="" width="35" height="35"/>
              <h2>{service.title}</h2>
              <p>{service.description}</p>


              <div className="services_readmore">
                <p> Read More </p>
               <img className="iconimg" src={arrow_icon} alt="" />
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Services