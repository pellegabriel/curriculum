import React from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
                  <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              className="nes-btn is-primary"
              href="https://www.linkedin.com/in/gabrielpelle/"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <a
              className="nes-btn is-primary"
              href="mailto:gabypelle12@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              className="nes-btn is-primary"
              href="https://api.whatsapp.com/send?phone=542966305853"
              target="_blank"
              rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
      
      </div>
    </section>
  );
};
export default Contact;
