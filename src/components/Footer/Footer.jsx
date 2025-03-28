import  React from "react";
import './Footer.css'
import logof from '../../assets/logo.png'



const Footer = () => {
  return (
    <div className="footer">
    
     <div className="footer_top">

       <div className="footer_top_left">
        <img  className="logoimg" src={ logof } alt="" />
        
       </div>

     </div>

     <hr />

     <div className="footer_bottom">
       <p className="footer_bottom_left">
         &copy; 2025 Adaeze Aniekee. All rights reserved.
         </p>

         <div className="footer_bottom_right">
              <p>Term of services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
          </div>
            
      </div>
   


    </div>
  );
}

export default Footer;