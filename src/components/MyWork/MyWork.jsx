
import React from "react";
import "./MyWork.css"
import mywork_data from "../../assets/MyWork_data.js";
import arrow from "../../assets/arrow-right-solid.svg"

const MyWork = () => {
  return (
    <div  id="work" className="myWork">

      <div className="myWork_title">
        <h1> My Lastest Work</h1>
      </div>

      <div className="mywork_container">
        {mywork_data.map ((work,index)=>{
          return (
            <img key={index} src= {work.img} alt="" width={200}  height={200} />)
        })}
      </div>

      <div className="mywork_showmore">
        <p>Show More</p>
        <img className="iconimg" src={arrow} alt="" />
      </div>

    </div>
  );
};  

export default MyWork;

