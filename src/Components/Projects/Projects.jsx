import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import { motion, useScroll, useTransform } from "framer-motion";
import GameingCard from "../GameingCard";

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
    // {
    //   idx:1,
    //   img:"",
    //   title: "Todo App Using React",
    //   linkTo: "https://github.com/Chandan-Kr-dev/TodoReact",
    //   visit: "https://main--todo-app-ck.netlify.app/",
    // },
    {
      idx: 2,
      img: "/wizardz.jpg",
      title: "Animated Website WizardZ",
      linkTo: "https://github.com/Chandan-Kr-dev/WizardZanimatedWeb",
      visit: "https://wizard-zanimated-web.vercel.app/",
    },
    // {
    //   idx:3,
    //   img: "",
    //   title: "Twitter Clone UI",
    //   linkTo: "https://github.com/Chandan-Kr-dev/TwiiterCloneUI",
    //   visit: "",
    // },
    {
      idx: 4,
      img: "/EgramPanchayat.png",
      title: "E-Gram Panchayat",
      linkTo: "https://github.com/Chandan-Kr-dev/EgramPanchayat",
      visit: "https://egram-panchayat.vercel.app/",
    },
    {
      idx: 5,
      img: "/Judicio.jpg",
      title: "Judicio",
      linkTo: "https://github.com/Chandan-Kr-dev/judicio",
      visit: "https://judicio.vercel.app/",
    },
    {
      idx: 6,
      img: "/letstalk.jpg",
      title: "Let's Talk",
      linkTo: "https://github.com/Chandan-Kr-dev/Let-sTalk",
      visit: "lets-talk-three.vercel.app",
    },
  ];
  const gameProjects = [
    {
      idx: 1,
      img: "/endoftheline.png",
      title: "End of the Line",
      desktop: "https://chandan-kr.itch.io/end-of-the-line",
      android: "https://chandan-kr.itch.io/end-of-the-line-android",
    },
  ];
  // useEffect(() => {
  //   setDetails(ProjectDetails);
  // }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityProgress,
        scale: scaleProgress,
      }}
      className="md:m-32  mx-6  my-8  rounded-lg text-center"
    >
      <h1 className="text-white font-bold md:text-5xl text-2xl">Projects</h1>
      <div className="text-center bg-blue-400 mt-10 rounded-lg p-10">
        <h1 className="text-white md:text-2xl font-semibold mb-8 font-kushan tracking-widest">Web Devlopment Projects</h1>
        <div id="card" className="flex flex-wrap md:mx-20 -mx-5 ">
          {ProjectDetails.map((det) => {
            return (
              <div key={det.idx} className="mx-auto my-5  ">
                <Card
                  img={det.img}
                  title={det.title}
                  linkTo={det.linkTo}
                  visit={det.visit}
                />
              </div>
            );
          })}
        </div>
        <h1 className="text-white md:text-2xl font-semibold mb-8 font-kushan tracking-widest">Game Devlopment Projects</h1>
        <div id="card" className="flex flex-wrap md:mx-20 -mx-5 ">
        {gameProjects.map((project) => {
          return (
            <div key={project.idx} className="mx-auto ">
              
              <GameingCard
                img={project.img}
                title={project.title}
                desktop={project.desktop}
                android={project.android}
              />
            </div>
          );
        })}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
