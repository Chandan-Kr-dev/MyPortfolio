import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Contact() {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Message, setMessage] = useState("");

  const [Loader, setLoader] = useState(false);
  const form = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();

    const emailPromise = new Promise((resolve, reject) => {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            resolve("Email sent successfully!");
          },
          (error) => {
            reject("Failed to send email.");
            console.error("FAILED...", error);
          }
        );
    });

    // Use toast.promise to handle the states
    toast.promise(
      emailPromise,
      {
        pending: "Sending your message...",
        success: "Message sent successfully! 🎉",
        error: "Failed to send message. Please try again. 😥",
      },
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

        
  };

  


  return (
    <div className="min-h-[70vh] mx-auto      text-center  ">
      <h1 className="text-white md:text-5xl text-2xl font-bold md:mb-10 mb-5">
        Contact Me
      </h1>
      <div className="">
        <form ref={form} onSubmit={handlesubmit}>
          <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
            />
          </div>

          <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
            />
          </div>
          
          <div className=" md:text-2xl font-semibold   ">
            <textarea
              rows={5}
              cols={38}
              name="message"
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
              placeholder="Your Message"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            type="submit"
            
            disabled={!(Loader == false)}
            className="bg-blue-500 md:text-2xl  rounded-lg md:px-3 px-1 py-1 text-white font-bold shadow-md shadow-black"
          >
            {Loader ? <span>Submitting...</span> : <span>Submit</span>}
          </motion.button>
        </form>

        
      </div>
    </div>
  );
}

export default Contact;
