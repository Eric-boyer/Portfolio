import React from "react";
import { toast } from 'react-toastify';

import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import "../contact/contact.css";


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3px6k9n",
        "template_71cqnwh",
        form.current,
        "bjH-IDD0BHvnIyOR3"
       
      )
      toast.success("Votre message a été envoyé avec succes!! A bientôt")
     e.target.reset()
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <FiMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>ericboyer2011@hotmail.fr</h5>
              <a
                href="mailto:ericboyer2011@hotmail.fr"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whats up</h4>
              <h5>+ 33 0650023115</h5>
              <a
                href="https://api.whatsapp.com/send?phone=0650023115"
                target="_blank"
                rel="noreferrer"
              >
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <BsTelephone className="contact__option-icon" />
              <h4>06 50 02 31 15</h4>
              <a
                href="https://api.whatsapp.com/send?phone=0650023115"
                target="_blank"
                rel="noreferrer"
              >
                Call Me
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            ></input>
            <textarea
              type="message"
              rows="7"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
