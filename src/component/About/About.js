import React from "react";

import "./About.css";
import im from "../../Assets/img/superGlithc.png";
import Header from "../Header/Header";
const About = () => {
  return (
    <div className="about">
      <Header></Header>
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
        <p>
          lorem ipsuEntrypoint main 4.76 MiB (6.37 MiB) = static/js/bundle.js
          4.76 MiB main.3ab86f99ae756fb98f15.hot-update.js 6.29 KiB 8 auxiliary
          assets cached modules 9.87 MiB (javascript) 1.39 MiB (asset) [cached]
          952 modules runtime modules 28.6 KiB 14 modules
          ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./src/component/About/About.css
          3.19 KiB [built] [code generated] webpack 5.71.0 compiled successfully
          in 1303 ms
        </p>
      </div>
    </div>
  );
};

export default About;
