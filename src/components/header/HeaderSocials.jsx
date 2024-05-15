import React from "react";
import { FaLinkedin } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="wrapper">
      <a className="icon linkedin" href="https://www.linkedin.com/in/gabrielpelle/" target="_blank" rel="noopener noreferrer" >
      <span className="tooltip">Linkedin</span>     
      <FaLinkedin/>
      </a>
    </div>
  )
}

export default HeaderSocials