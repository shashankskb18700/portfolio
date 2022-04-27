import React from "react";

import "./About.css";
import im from "../../Assets/img/superGlithc.png";
import Header from "../Header/Header";
const About = () => {
  return (
    <div className="about">
      <Header></Header>
      {/* <div style={{ background: "white", color: "black" }}>ABOUT</div> */}
      <div className="textImg">
        <div className="intro">
          Hey ,Hi there , myself Shashank shekhar , you can call me Shashank ,I
          am full stack web developer from India.Currently pursuing Bachelor Of
          Engineering, I am well versed with knowledge of both frontend and
          backend technology , I have built many project ,mostly using mern
          stack technology , I am very enthusistic and energetic person, always
          eager to lean new technology and API.I'am currently open for work,so
          if you need a fantastic developer,please{" "}
          <span style={{ color: "#f90a55" }}>get in touch!</span>.<br></br>
          <br></br>
          Check out my work!
        </div>

        <img src={im}></img>
      </div>

      <div className="skills">
        <h2 style={{ textAlign: "center" }}>SKILLS</h2>

        <div className="scroller">
          <div>node js</div>
          <div>REACT js</div>
          <div>Redux</div>
          <div>Expressjs</div>
          <div>Mongo db</div>
          <div>Firebase</div>
          <div>MYsql</div>
          <div>Nignix</div>
        </div>
      </div>
    </div>
  );
};

export default About;
