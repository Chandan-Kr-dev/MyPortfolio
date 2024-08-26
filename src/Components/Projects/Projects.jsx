import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  const [Details, setDetails] = useState([]);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  

  

  const ProjectDetails = [
    {
      idx:0,
      img: "../Todoimg.jpg",
      title: "Login Form",
      linkTo: "https://github.com/Chandan-Kr-dev/LoginForm",
      visit: "",
    },
    {
      idx:1,
      img: "../Todoimg.jpg",
      title: "Todo App Using React",
      linkTo: "https://github.com/Chandan-Kr-dev/TodoReact",
      visit: "https://main--todo-app-ck.netlify.app/",
    },
    {
      idx:2,
      img: "",
      title: "Animated Website WizardZ",
      linkTo: "https://github.com/Chandan-Kr-dev/WizardZanimatedWeb",
      visit: "https://wizard-zanimated-web.vercel.app/",
    },
    {
      idx:3,
      img: "",
      title: "Twitter Clone UI",
      linkTo: "https://github.com/Chandan-Kr-dev/TwiiterCloneUI",
      visit: "",
    },
  ];
  const gameProjects = [];
  useEffect(() => {
    setDetails(ProjectDetails);
  }, []);

  return (
    <motion.div ref={ref} 
    style={{
      opacity:opacityProgress,
      scale:scaleProgress  
    }} className="md:m-32  mx-6  my-8  rounded-lg text-center">
      <h1 className="text-white font-bold md:text-5xl text-2xl">Projects</h1>
      <div className="text-center bg-blue-400 mt-10 rounded-lg p-10">
        <h1 className="text-white md:text-2xl mb-8">Web Devlopment Projects</h1>
        <div id="card" className="flex flex-wrap mx-20 ">
          {ProjectDetails.map((det) => {
            return (
              <div key={det.idx} className="m-5 ">
                <Card img={det.img} title={det.title} code={det.linkTo} visit={det.visit} />
              </div>
            );
          })}
        </div>
        {gameProjects.length > 0 ? (
          <div>
            <h1 className="text-white text-2xl mb-8">
              Game Development Projects
            </h1>
            <div
              id="card"
              className="flex justify-evenly items-center flex-wrap"
            >
              {ProjectDetails.map((det) => {
                return (
                  <div>
                    <img className="h-36 w-36 rounded" src={det.img} alt="" />
                    <h1 className="text-2xl text-gray-600 font-semibold">
                      {det.title}
                    </h1>
                    <a
                      className="bg-green-500 text-white  px-2 py-1 rounded-lg my-2"
                      target="_blank"
                      href={det.linkTo}
                    >
                      Code
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Projects;
