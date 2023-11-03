"use client";
import "./contact.scss";
import { motion } from "framer-motion";
// import { contactData } from "@/data/contact.data";
// import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { showError, showSuccess } from "@/utils/toast/ToastMessage";

const variants = {
  // initial: {
  // x: -500,
  // y: 500,
  // opacity: 0,
  // },
  animate: {
    x: 0,
    // y: 0,
    // opacity: 1,
    // transition: {
    //   duration: 0.5,
    //   staggerChildren: 0.1,
    // },
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
  // const contactRef = useRef();
  // const formRef = useRef();
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  // const isInView = useInView(ref, { margin: "-100px" });

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
          // setSuccess(true);
          showSuccess(`Success! ${result.text}`);
          form.reset();
          // console.log(result.text);
        },
        (error) => {
          // setError(true);
          showError(`Something wrong. ${error.text}`);
          // console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      // ref={contactRef}
      className="contact"
      // variants={variants}
      // initial="initial"
      // whileInView="animate"
    >
      <article
        // variants={variants}

        className="contact__text--container"
      >
        <h6
          // variants={variants}

          className="contact__text--title"
        >
          Write to me
          {/* You can fill out the feedback form */}
        </h6>
        <motion.figure
          variants={variants}
          animate="scrollButton"
          className="contact__text--icon-wrapper"
        >
          <Image
            src={"/scroll.png"}
            alt="Look to the right"
            fill={true}
            className="contact__text--icon"
            loading="lazy"
            title="Look to the right"
            sizes="50px"
          />
        </motion.figure>
      </article>
      {/* <article className="contact__form-container"> */}
      <motion.form
        className="contact__form"
        // ref={formRef}
        onSubmit={sendEmail}
        // variants={variants}
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ delay: 4, duration: 1 }}
      >
        <input
          type="text"
          required
          placeholder="Name"
          name="name"
          className="contact__form--contact"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          className="contact__form--contact"
        />
        <textarea
          rows={8}
          placeholder="Message"
          name="message"
          className="contact__form--textarea"
        />
        <button className="contact__form--button" aria-label="Submit form">
          Submit
        </button>
      </motion.form>
      {/* </article> */}
    </section>
  );
};

export default Contact;
