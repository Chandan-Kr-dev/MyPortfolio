import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Message, setMessage] = useState("");

  const [Loader, setLoader] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault();
    setLoader(false)
    try {
      axios
        .post(`${import.meta.env.VITE_DEV_URL}api/contact`, {
          Name,
          email,
          Message,
        })
        .then((res) => {
          if (res.data == "Message sent successfully") {
            console.log(res);
            Swal.fire({
              title: "Thank You !",
              text: "Your Message is Sent Successfully",
              icon: "success",
            });
            setName("");
            setemail("")
            setMessage("")
          }else{
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while sending your message",
              icon: "error",
            });
          }
        })
        
    } catch (error) {
      console.error(error)
    }
    // console.log("Submitted");
  };

  return (
    <div className="min-h-[70vh] mx-auto      text-center  ">
      <h1 className="text-white md:text-5xl text-2xl font-bold md:mb-10 mb-5">
        Contact Me
      </h1>
      <div className="">
        <form onSubmit={handlesubmit} action="">
          <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
            <input
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
            <input
              value={email}
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className=" md:text-2xl font-semibold   ">
            <textarea
              value={Message}
              onChange={(event) => setMessage(event.target.value)}
              rows={5}
              cols={38}
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
              placeholder="Your Message"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            type="submit"
            disabled={!(Loader==false)}
            className="bg-blue-500 md:text-2xl  rounded-lg md:px-3 px-1 py-1 text-white font-bold shadow-md shadow-black"
          >
            {Loader ? <span>Submitting...</span>:<span>Submit</span>}
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
