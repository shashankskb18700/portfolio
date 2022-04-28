import React from "react";

import "./About.css";
import im from "../../Assets/img/superGlithc.png";
import Header from "../Header/Header";

import { ReactComponent as html } from "../../Assets/svg/html.svg";
const About = () => {
  return (
    <div className="about">
      {/* <div style={{ background: "white", color: "black" }}>ABOUT</div> */}
      <div className="cont">
        <Header></Header>

        <div className="textImg">
          <div className="intro">
            Hey ,Hi there , myself Shashank shekhar , you can call me Shashank
            ,I am full stack web developer from India.Currently pursuing
            Bachelor Of Engineering, I am well versed with knowledge of both
            frontend and backend technology , I have built many project ,mostly
            using mern stack technology , I am very enthusistic and energetic
            person, always eager to lean new technology and API.I'am currently
            open for work,so if you need a fantastic developer,please{" "}
            <span style={{ color: "#e42562" }}>get in touch!</span>.<br></br>
            <br></br>
            Check out my work!
          </div>

          <img src={im}></img>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
          fill="rgb(162, 200, 238)"
        />
      </svg>

      <div className="skills">
        <h2 style={{ textAlign: "center" }}>SKILLS</h2>

        <div className="scroller">
          <div className="thumb">
            <a
              style={{
                display: "block",
                width: "400px",
                height: "100%",
                // background:
                //   "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://i.ibb.co/tX3Ss7c/Screenshot-2022-04-28-at-8-41-27-PM-copy.png)",
                // backgroundSize: "0, 400px 300px",
                background: `url(https://i.ibb.co/JxR9SJK/Screenshot-2022-04-28-at-8-41-27-PM-copy.png) no-repeat center /cover`,
                backgroundColor: "black",

                paddingTop: "300px",
                transformStyle: "preserve-3d",
                transition: "all 0.5s",
              }}
            >
              {/* <i ></i> */}
              <span>HTML</span>
            </a>
          </div>

          <div className="thumb">
            <a
              style={{
                display: "block",
                width: "400px",
                height: "100%",
                // background:
                //   "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://i.ibb.co/MSXMfsF/Screenshot-2022-04-28-at-8-41-27-PM-copy.png)",

                // background: `url(https://i.ibb.co/6WL2F2r/Screenshot-2022-04-28-at-8-41-27-PM-copy-2.png) no-repeat center /cover`,
                // backgroundImage: `url(../../Assets/svg/html5-brands.svg) no-repeat center /cover`,

                // backgroundColor: "black",
                // backgroundSize: " 0, 400px 300px",
                // transformStyle: "preserve-3d",
                // transition: "all 0.5s",

                // background: `url(https://i.ibb.co/JxR9SJK/Screenshot-2022-04-28-at-8-41-27-PM-copy.png) no-repeat center /cover`,
                backgroundColor: "black",

                paddingTop: "300px",
                transformStyle: "preserve-3d",
                transition: "all 0.5s",
              }}
              className="fett"
            >
              <span>HTML</span>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/jyPN7S6/css.jpg"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/0DHgGVH/javascript.png"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/8nCxGMC/java.jpg"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/VxCrYrW/python.png"></img>
          </div>

          <div>
            <img src="https://i.ibb.co/pK75S9S/reactjs.png"></img>
          </div>

          <div>
            <img src="https://i.ibb.co/5R1PJXZ/nodjs.png"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/3Fh938L/expressjs.png"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/m62h50J/redux.png"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/XfBSBRK/firebase.png"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/m8hrPsh/monodb.png"></img>
          </div>

          <div>
            <img src="https://i.ibb.co/vq17GJd/mysql.png"></img>
          </div>
          <div>
            <img src="https://i.ibb.co/frxJx9f/webpack.png"></img>
          </div>

          <div>
            <img src="https://i.ibb.co/GH7QS4j/git.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
