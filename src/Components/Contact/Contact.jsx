import React from "react";

function Contact() {
  return (
    <div className="h-screen mx-auto md:m-32   my-8  text-center  ">
      <h1 className="text-white md:text-5xl text-2xl font-bold md:mb-10 mb-5">
        Contact Me
      </h1>
      <div className="">
        <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
          <input
            className="rounded text-black md:p-1 px-1 w-1/3"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="text-white flex justify-center items-center gap-5 md:text-2xl font-semibold my-5  ">
          <input
            className="rounded text-black md:p-1 px-1 w-1/3"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className=" md:text-2xl font-semibold my-5  ">
          <textarea
            name="Message"
            className="rounded md:p-1 px-1 text-black w-1/3"
            cols={40}
            rows={6}
            placeholder="Enter Your Message here.."
          ></textarea>
        </div>
      </div>
      <button className="bg-blue-500 rounded-lg md:px-3 px-1 py-1 text-white font-bold shadow-md shadow-black">
        Submit
      </button>
    </div>
  );
}

export default Contact;
