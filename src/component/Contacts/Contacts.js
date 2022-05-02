import React from "react";
import Header from "../Header/Header";

import "./Contacts.css";
import { ReactComponent as PhoneSvg } from "../../Assets/svg/phone.svg";
import { ReactComponent as EmailSvg } from "../../Assets/svg/email.svg";
import { ReactComponent as LinkedInSvg } from "../../Assets/svg/linkedIn.svg";
// import { ReactComponent as Ht } from "../../Assets/svg/html.svg";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact">
        <h2>Contacts</h2>

        <div className="detail">
          <span className="detComp">
            <PhoneSvg style={{ width: "20px", paddingTop: "7px" }} /> &nbsp;
            <div style={{ width: "30vw", color: "white" }}>+91 9871791721</div>
          </span>

          <span className="detComp">
            <EmailSvg style={{ width: "20px", paddingTop: "7px" }} /> &nbsp;
            <div style={{ width: "30vw", color: "white" }}>
              shashankskb18700@gmail.com
            </div>
          </span>

          <span className="detComp">
            <LinkedInSvg style={{ width: "20px", paddingTop: "7px" }} /> &nbsp;
            <a
              style={{ width: "30vw", color: "white" }}
              href="https://www.linkedin.com/in/shashank-shekhar-781a951b4/"
            >
              https://www.linkedin.com/in/shashank-shekhar-781a951b4/
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
