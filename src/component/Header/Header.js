import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ color: "white" }}>
        {" "}
        <span>code by shashank.</span>
      </Link>

      <span>
        <Link to="/work">
          <span style={{ marginRight: "18px" }}>work</span>
        </Link>

        <Link to="/about">
          <span style={{ marginRight: "18px" }}>about</span>
        </Link>

        <Link
          to="/contact
        "
        >
          <span style={{ marginRight: "18px" }}>contacts</span>
        </Link>
      </span>
    </div>
  );
};

export default Header;
