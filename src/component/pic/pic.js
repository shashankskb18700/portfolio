import React from "react";
import img from "../../Assets/img/glit.png";
import "./pic.css";
const Pic = () => {
  return (
    <div className="pics">
      <img style={{ width: "230px", borderRadius: "500px" }} src={img}></img>
    </div>
  );
};

export default Pic;
