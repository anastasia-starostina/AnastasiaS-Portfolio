import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import {RiLinkedinBoxLine} from "react-icons/ri"
import {IoLogoWhatsapp} from "react-icons/io"
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_lq6b79m",
          "template_yfsfr3f",
          form.current,
          "cyXUklEnBPgRXJ9PI"
        )
        e.target.reset()
    };

    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>anastasia.st.stern@gmail.com</h5>
              <a
                href="mailto:anastasia.st.stern@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiLinkedinBoxLine className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>
                linkedin.com/in/anastasia-starostina-900bb2130/
              </h5>
              <a
                href="https://www.linkedin.com/in/anastasia-starostina-900bb2130/"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <IoLogoWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+447889441699</h5>
              <a
                href="https://api.whatsapp.com/send?phone="
                // PUT PHONE NUMBER HERE
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit = {sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <imput
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </section>
    );
}

export default Contact