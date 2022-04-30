import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <span>code by shashank.</span>
      <span>
        <Link to="/about">
          <span style={{ marginRight: "18px" }}>work</span>
        </Link>

        <Link to="/about">
          <span style={{ marginRight: "18px" }}>about</span>
        </Link>

        <span style={{ marginRight: "18px" }}>contacts</span>
      </span>
    </div>
  );
};

export default Header;
