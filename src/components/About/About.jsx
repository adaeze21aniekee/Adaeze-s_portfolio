
import React from "react";
import "./About.css";
import about_img from "../../assets/adaezesec.jpg";



const About = () => {
  return (
    <div id="about" className="about">

      <div className="About_title">
        <h1> About me</h1>
      </div>

      <div className="About_sections">

        <div className="About_left">
          <img className="aboutimg" src={about_img} alt="" />
        </div>

        <div className="About_right">
          <div className="About_right_para">
            <p className="para">I am a Front-End Developer passionate about creating fast, responsive, and visually appealing web applications. With expertise in HTML, CSS, JavaScript (ES6+), TypeScript, React.js, and Next.js, I specialize in crafting engaging user interfaces that prioritize performance and accessibility.

          Transforming and Converting UI/UX designs into interactive and pixel-perfect web experiences,
	        	Optimizing web performance with best practices, 
	        	Building reusable components with React.js, improving development efficiency and 
	        	Ensuring cross-browser compatibility and accessibility. 
           </p>
            <p className="para">  I enjoy solving complex UI challenges and staying updated with the latest trends in front-end development. Whether it's building a prefect landing page or a complex dashboard, I aim for a clean, maintainable, and scalable code.</p>
          </div>

        </div>
        
      </div>

      <div class="social-media">
          <a href="http://facebook.com/adaeze.aniekee.5"><i class="fa-brands fa-facebook fa-xs"></i></a>
          <a href="http://x.com/adaezee_aniekee?s=21"><i class="fa-brands fa-twitter fa-xs"></i></a>
          <a href="http://www.instagram.com/adaeze_princessx"><i class="fa-brands fa-instagram fa-xs"></i></a>
          <a href="http://linkedin.com/in/adaezeaniekee"><i class="fa-brands fa-linkedin fa-xs"></i></a>
          </div>


      <div className="About_skillss">

            <div className="About_skil"><p>HTML & CSS </p><hr style={{width: "80%"}} /></div>
            <div className="About_skil"><p> JavaScript</p><hr style={{width: "60%"}} /></div>
            <div className="About_skil"><p> React JS </p><hr style={{width: "70%"}} /></div>
            <div className="About_skil"><p> Next JS </p><hr style={{width: "40%"}} /></div>

          </div>



      <div className="about_achievements">
        
        <div className="about_achievement">
          <h1> 2+ </h1>
          <p> YEARS OF EXPERIENCE </p>
        </div>

        <hr />

        <div className="about_achievement">
          <h1> 8+ </h1>
          <p> PROJECTS COMPLETED </p>
        </div>

        <hr />

        <div className="about_achievement">
          <h1> 3+ </h1>
          <p> HAPPY CLIENTS </p>
        </div>

      </div>

    </div>
  );
}

export default About;