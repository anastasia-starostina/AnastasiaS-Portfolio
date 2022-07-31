import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import {RiLinkedinBoxLine} from "react-icons/ri"
import {IoLogoWhatsapp} from "react-icons/io"

const Contact = () => {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>anastasia.st.stern@gmail.com</h5>
              <a href="mailto:anastasia.st.stern@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiLinkedinBoxLine />
              <h4>LinkedIn</h4>
              <h5>
                https://www.linkedin.com/in/anastasia-starostina-900bb2130/
              </h5>
              <a
                href="https://www.linkedin.com/in/anastasia-starostina-900bb2130/"
                target="_blank"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <IoLogoWhatsapp />
              <h4>WhatsApp</h4>
              <h5>+447889441699</h5>
              <a
                href="https://api.whatsapp.com/send?phone="
                // PUT PHONE NUMBER HERE
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form action = "">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <imput type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary">Send message</button>

          </form>
        </div>
      </section>
    );
}

export default Contact