import React, { useEffect, useState } from "react";

function Projects() {
  const [Details, setDetails] = useState([]);
  const ProjectDetails = [
    {
      img: "../../../public/python1.png",
      title: "Calculator",
      linkTo: "https://github.com/Chandan-Kr-dev/calculator",
      visit: "",
    },
    {
      img: "../../../public/Todoimg.jpg",
      title: "Todo App Using React",
      linkTo: "https://github.com/Chandan-Kr-dev/TodoReact",
      visit: "https://main--todo-app-ck.netlify.app/",
    },
  ];
  const gameProjects = [];
  useEffect(() => {
    setDetails(ProjectDetails);
  }, []);

  return (
    <div className="m-32 rounded-lg text-center">
      <h1 className="text-white font-bold text-5xl ">Projects</h1>
      <div className="text-center bg-blue-400 mt-10 rounded-lg p-10">
        <h1 className="text-white text-2xl mb-8">Web Devlopment Projects</h1>
        <div id="card" className="flex justify-evenly items-center flex-wrap">
          {ProjectDetails.map((det) => {
            return (
              <div className=" ">
                <div className="about bg-slate-100 rounded-lg p-2 hover:">
                  <img className="h-36 w-36 rounded-lg hover:opacity-50 items-center" src={det.img} alt="" />
                  <div className=" ">
                    <p>{det.title}</p>
                  </div>
                </div>
                <div className="buttons flex gap-5">
                  <a
                    className="bg-green-500 text-white  px-2 py-1 rounded-lg my-5"
                    target="_blank"
                    href={det.linkTo}
                  >
                    Code
                  </a>
                  <a
                    href={det.visit}
                    className="bg-green-500 text-white  px-2 py-1 rounded-lg my-5"
                  >
                    View
                  </a>
                </div>
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
    </div>
  );
}

export default Projects;
