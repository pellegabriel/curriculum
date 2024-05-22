import React from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin } from "react-icons/fa"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5w2856",
        "template_v1ref19",
        form.current,
        "1IrXBTS_f9Qyz8eDN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="nes-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
