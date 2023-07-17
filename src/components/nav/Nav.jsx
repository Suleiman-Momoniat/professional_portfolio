import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
const Nav = () => {
  const [activeIcon, setActiveIcon] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveIcon("#");
        }}
        className={activeIcon === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveIcon("#about");
        }}
        className={activeIcon === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveIcon("#experience");
        }}
        className={activeIcon === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      {/* <a href="#services" onClick={() => {setActiveIcon("#services")}} className={activeIcon === "#services" ? "active" : ""}><RiServiceLine /></a> */}
      <a
        href="#journey"
        onClick={() => {
          setActiveIcon("#journey");
        }}
        className={activeIcon === "#journey" ? "active" : ""}
      >
        <TimelineIcon />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveIcon("#contact");
        }}
        className={activeIcon === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
