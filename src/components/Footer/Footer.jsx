import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:nareshp2282001@gmail.com" target="_blank" style={{textDecoration:'none'}}><span style={{color:"white"}}>nareshp2282001@gmail.com</span></a>
        <div className="f-icons">
          <a href="https://www.instagram.com/_p.naresh_/" target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/nareshp22/" target="_blank"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/Naresh63833" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
