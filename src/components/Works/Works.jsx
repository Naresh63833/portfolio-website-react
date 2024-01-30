import React, { useContext } from "react";
import "./Works.css";
import ReactJS from "../../img/react.png";
import JS from "../../img/js.png";
import Dotnet from "../../img/dotnet.png";
import Csharp from "../../img/csharp.png";
import Sql from "../../img/sql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Technologies</span>
          <spane>
           Technology makes it possible for people
            <br />
            to gain control over everything,
            <br />
            except over technology.
            <br />
            Continous Learning...
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={ReactJS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JS} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Dotnet} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Csharp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Sql} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
