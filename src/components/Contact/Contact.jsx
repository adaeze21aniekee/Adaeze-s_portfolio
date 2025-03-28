import React, { useState } from "react";
import './Contact.css';
import mail from '../../assets/envelope-solid.svg';
import location from '../../assets/location-dot-solid.svg';
import phone from '../../assets/phone-volume-solid.svg'

import emailjs from '@emailjs/browser';

import { useRef } from'react';



const Contact = () =>{

   const form = useRef();

   const [done, setDone] = useState(false)

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs
       .sendForm('service_v26zvhm', 'template_nhm2k2h', form.current, {
         publicKey: 'uM6PdHGP6xWhZja2u',
       })
       .then(
         () => {
            console.log('SUCCESS!');
           setDone(true);
         },
         (error) => {
           console.log('FAILED...', error.text);
         },
       );
   };




  return (
    <div  id="contact" className="contact">
      <div className="contact_title">
        <h1>Get in touch</h1>
      </div>

     <div className="contact_section">

      <div className="contact_left">
           <h1>Let's talk</h1>
           <p>I'm here to help you with your project, just give me a call or send me a message.</p>  
           <div className="contact_details">

              <div className="contact_detail">
                 <img src={mail} alt="mail" width={30} /> <p>adaezeaniekee21@gmail.com</p>
                 </div>
              <div className="contact_detail">
                 <img src={phone} alt="phone" width={30} /> <p>+234-903-716-5995</p>
                 </div>
              <div className="contact_detail">
                 <img src={location} alt="location" width={30} /> <p>Lagos, Nigeria</p>
                 </div>
               
           </div>
        </div>

        <form  ref={form} onSubmit={sendEmail} className="contact_right" >
           <label htmlFor="">Your Name</label>
           <input type="text" placeholder="Enter your name" name="name"  required />
           <label htmlFor="">Your Email</label>
           <input type="email" placeholder="Enter your email" name="email"  required />
           <label htmlFor="">Write your message here</label>
           <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
              <div className="submitdiv">
                <button className="contact_submit" type="submit">Submit now</button>
                {done && <p className="success">Message sent successfully!</p>}
             </div>

        </form>
 
     </div>
    </div>
  );
}

export default Contact;