import React from "react";
import { Boxo } from "../Box/Box";
import BoxTh from "../BoxTh/BoxTh";

import "./Home.css";

import Pic from "../pic/pic";
const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <span>code by shashank.</span>
        <span>
          <span style={{ marginRight: "15px" }}>work</span>
          <span style={{ marginRight: "15px" }}>about</span>
          <span style={{ marginRight: "15px" }}>contacts</span>
        </span>
      </div>

      <div className="main">
        <div className="text">
          <div>Hi</div>

          <div>
            {" "}
            I'M <span className="special">S</span>hashank{" "}
          </div>
          <div>Web developer</div>
        </div>

        <div className="letter"> S </div>
      </div>
      {/* <Boxo /> */}
      {/* <BoxTh /> */}
    </div>
  );
};

export default Home;
