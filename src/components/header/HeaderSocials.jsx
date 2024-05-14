import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
const HeaderSocials = () => {
  return (
    <div className="wrapper">
      <a className="icon linkedin" href="https://www.linkedin.com/in/gabrielpelle/" target="_blank" rel="noopener noreferrer" >
      <span className="tooltip">Linkedin</span>     
      <FaLinkedin/>
      </a>

      <a className="icon github" href="https://github.com/pellegabriel?tab=repositories" target="_blank" rel="noopener noreferrer">
      <span className="tooltip">Github</span>
       <FaGithub/>
      </a>
    </div>
  )
}

export default HeaderSocials