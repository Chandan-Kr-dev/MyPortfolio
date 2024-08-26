import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  const [showbuttons, setshowbuttons] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.2 , boxShadow:true}}
      whileTap={{ scale: 0.8 }}
      
      className="h-52 w-52 cursor-pointer bg-green-500 text-white rounded-lg"
    >
      <div
        onMouseEnter={() => {
          setshowbuttons(true);
        }}
        onMouseLeave={() => setshowbuttons(false)}
        className="card-container flex flex-col items-center p-10  "
      >
        <div className="card-image">
          <img className="h-20 w-20 " src={props.img} alt="" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          {showbuttons ? (
            <p className="card-text grid grid-cols-2 items-center">
              <motion.a
              whileHover={{scale: 1.2 , borderColor:"black", backgroundColor: "white" ,color:"black"}}
                href={props.visit}
                className="bg-blue-600 border-2 px-2 mx-2 rounded-lg"
              >
                VISIT
              </motion.a>
              <motion.a
                whileHover={{scale:1.2 ,borderColor:"red"}}
              href={props.code} className="border-2 border-white rounded-lg">
                CODE
              </motion.a>
            </p>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
