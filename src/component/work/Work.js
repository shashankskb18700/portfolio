import React from "react";
import Header from "../Header/Header";
import { Link, Redirect } from "react-router-dom";

import reed from "../../Assets/projectImg/reed1.png";
import kireina from "../../Assets/projectImg/kireina.png";
import "./Work.css";

import github from "../../Assets/svg/github.svg";
import web from "../../Assets/svg/web2.png";

const Work = () => {
  return (
    <div className="work">
      <Header />

      <div className="projects">
        <div className="project">
          <div className="reed"></div>
          {/* <img src={reed} className="prjImg"></img> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2> REDEEMER</h2>
            {/* <Redirect to="https://github.com/shashankskb18700/resumeBuilder">
            <i class="fa-brands fa-github"></i>
           </Redirect> */}

            {/* <a
            to={{
              pathname:
                "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
            }}
            target="_blank"
           >
            <img src={github}></img>
           </Link> */}

            <span>
              <a
                target="_blank"
                href="https://github.com/shashankskb18700/resumeBuilder"
                style={{ paddingRight: "27% ", paddingTop: "6%" }}
              >
                <img src={github}></img>
              </a>

              <a target="_blank" href="https://redeemer-1a3d9.web.app/">
                <img src={web} className="web"></img>
              </a>
            </span>
          </div>
        </div>
        <div className="project">
          <div className="kireina"></div>
          {/* <img src={kireina} className="prjImg"></img> */}

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ marginRight: "5%" }}>Kiriena</h2>
            {/* <Redirect to="https://github.com/shashankskb18700/resumeBuilder">
            <i class="fa-brands fa-github"></i>
           </Redirect> */}

            {/* <a
            to={{
              pathname:
                "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
            }}
            target="_blank"
           >
            <img src={github}></img>
           </Link> */}

            <span>
              <a
                target="_blank"
                href="https://github.com/shashankskb18700/Kireina"
                style={{ paddingRight: "27% ", paddingTop: "6%" }}
              >
                <img src={github}></img>
              </a>

              {/* <a target="_blank" href="">
                
              </a> */}
              <img
                src={web}
                style={{ width: "28%", paddingBottom: "4%" }}
              ></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
