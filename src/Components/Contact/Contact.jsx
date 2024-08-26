import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [Name, setName] = useState("")
  const [email, setemail] = useState("")
  const [Message, setMessage] = useState("")

  const handlesubmit=()=>{
    console.log("Submitted");
    
  }

  return (
    <div className="h-screen mx-auto md:m-32   my-8  text-center  ">
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
              onChange={(e)=>setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
           
            <input
            value={email}
              className="rounded text-black md:p-1 px-1 md:w-1/3 w-80"
              type="email"
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className=" md:text-2xl font-semibold   ">

          <textarea value={Message} onChange={(event) => setMessage(event.target.value)} />
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            type="submit"
            className="bg-blue-500 rounded-lg md:px-3 px-1 py-1 text-white font-bold shadow-md shadow-black"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
