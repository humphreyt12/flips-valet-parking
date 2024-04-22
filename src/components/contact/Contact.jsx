// The Contact Section
import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
// Sends email if form is sucessful there's an success message if not there's an error
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d26dupf",
        "template_e17w3tp",
        formRef.current,
        "UgKdh_LyC4haG1k5C"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="textContainer" variants={variants}>
        <h1 variants={variants}>Get in Touch</h1>
        {/* Call */}
        <div className="item" variants={variants}>
          <h2>Call</h2>
          <p>954-551-9979</p>
        </div>
        {/* Email */}
        <div className="item" variants={variants}>
          <h2>Email</h2>
          <a target="_blank" href="mailto:humphrey14t@gmail.com">
            <span>bdajuste@gmail.com</span>
          </a>
        </div>
        {/* Instagram */}
        <div className="item" variants={variants}>
          <h2>Follow</h2>
          <a
            target="_blank"
            href="https://www.instagram.com/flips_valet_parking/"
          >
            <img src="./instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
      {/* The form Section */}
      <div className="formContainer">
        <form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
        >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <input type="phone" required placeholder="Phone" name="phone" />
            <input type="text" required placeholder="Address" name="address" />
            <input type="text" required placeholder="Subject" name="subject" />
            <textarea rows={8} placeholder="Type your message here..." name="message" />
            <button>Submit</button>
            {error && "Error, Please try again"}
            {success && "Your message was successfully sent!"}
        </form>
      </div>
    </div>  
  );
};
export default Contact;
