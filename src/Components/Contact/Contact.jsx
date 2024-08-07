import React from "react";

function Contact() {
  return (
    <div className="h-screen mx-auto text-center  ">
      <h1 className="text-white text-5xl font-bold mb-10">Contact Me</h1>
      <div className="">
        <div className="text-white flex justify-center items-center gap-5 text-2xl font-semibold my-5  ">
          <input className="rounded text-black p-1 w-1/3" type="text" placeholder="Name"/>
        </div>
        <div className="text-white flex justify-center items-center gap-5 text-2xl font-semibold my-5  ">
          <input className="rounded text-black p-1 w-1/3" type="text" placeholder="Email" />
        </div>
        <div className="text-white flex justify-center items-center gap-5 text-2xl font-semibold my-5  ">
          <textarea
            name="Message"
            className="rounded p-1 text-black"
            cols={40}
            rows={6}
            placeholder="Enter Your Message here.."
          >
            
          </textarea>
        </div>
      </div>
      <button className="bg-blue-500 rounded-lg px-3 py-1 text-white font-bold shadow-md shadow-black">Submit</button>
    </div>
  );
}

export default Contact;
