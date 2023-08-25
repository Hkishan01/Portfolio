import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gtcpp99",
        "template_a0buejc",
        form.current,
        "QZs-K6Ws07Gjfa_KN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mail sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="cnt">
      <h2>Get in touch</h2>
      <div id="cnt">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name"> Full name*</label>
          <input type="text" name="name" />
          <label htmlFor="email"> Email*</label>
          <input type="email" name="email" />
          <label htmlFor="organization "> Your Organization </label>
          <input type="text" name="organization " />
          <label htmlFor="message">Message*</label>
          <textarea name="message" />
          <button type="submit" name="send">
            Send
          </button>
        </form>
        <img
          src="https://img.freepik.com/free-vector/hand-postman-putting-letter-envelope-into-open-mailbox-courier-delivering-mail-flat-vector-illustration-correspondence-communication-profession-newsletter-concept-banner-website-design_74855-24713.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Contact;
