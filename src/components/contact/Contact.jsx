"use client";
import "./contact.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { showError, showSuccess } from "@/utils/toast/ToastMessage";
import { useState } from "react";

const variants = {
  animate: {
    x: 0,
  },
  scrollButton: {
    opacity: 0,
    x: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ! function sending message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_EMAILJS_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_EMAILJS_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          showSuccess(`Success! ${result.text}`);
          handleReset();
        },
        (error) => {
          showError(`Something wrong. ${error.text}`);
        }
      );
  };

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="contact">
      <article className="contact__text--container">
        <h6 className="contact__text--title">Write to me</h6>
        <motion.figure
          variants={variants}
          animate="scrollButton"
          className="contact__text--icon-wrapper"
        >
          <Image
            src={"/scroll.webp"}
            alt="Look to the right"
            fill={true}
            className="contact__text--icon"
            loading="lazy"
            title="Look to the right"
            sizes="50px"
          />
        </motion.figure>
      </article>
      <motion.form className="contact__form" ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          required
          placeholder="Name"
          name="name"
          className="contact__form--contact"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          className="contact__form--contact"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          rows={8}
          placeholder="Message"
          name="message"
          className="contact__form--textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="contact__form--button" aria-label="Submit form">
          Submit
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
