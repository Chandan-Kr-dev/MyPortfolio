import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Card = (props) => {
  const [showbuttons, setshowbuttons] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.2 , boxShadow:true ,rotate:360 ,backgroundColor:"red"}}
      // whileTap={{ scale: 0.8 }}
      transition={{ease: "linear"}}
      
      className="h-52 w-52 cursor-pointer bg-green-500 text-white rounded-lg"
    >
      <div
        onMouseEnter={() => {
          setshowbuttons(true);
        }}
        onMouseLeave={() => setshowbuttons(false)}
        className="card-container flex flex-col items-center p-5  "
      >
        <div className="card-image">
          {/* <img className="h-20 w-20 " src={props.img} alt="" /> */}
        </div>
        <div className="card-content">
          <h2 className="card-title text-2xl">{props.title}</h2>
          {showbuttons ? (
            <div className="flex justify-center items-center gap-10">
              <a href={props.visit} className="bg-black text-white rounded-full p-1 hover:bg-white hover:text-black"><FaLink/></a>
              <a href={props.linkTo} className="bg-black text-white rounded-full p-1 hover:bg-white hover:text-black"><FaGithub/></a>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
