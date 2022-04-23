import React from "react";
import Bo from "../Box/Box";

import "./Home.css";
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
      <Bo />
    </div>
  );
};

export default Home;
