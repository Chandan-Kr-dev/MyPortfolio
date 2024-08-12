import React, { useEffect, useState } from "react";

function Projects() {
  const [Details, setDetails] = useState([]);

  const [showbuttons, setshowbuttons] = useState(false);

  const ProjectDetails = [
    {
      img: "../python1.png",
      title: "Login Form",
      linkTo: "https://github.com/Chandan-Kr-dev/LoginForm",
      visit: "",
    },
    {
      img: "",
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
              <div
                onMouseEnter={() => setshowbuttons(true)}
                onMouseLeave={()=>setshowbuttons(false)}
                className="w-[12vw] h-[12vh] bg-violet-400 p-2 rounded-lg"
              >
                
                <div className="title w-full my-4 font-bold ">
                  <h1>{det.title}</h1>
                </div>
                {showbuttons ? (
                  <div className="buttons flex">
                    <a href={det.linkTo} className=" bg-blue-500 hover:bg-blue-900 hover:text-white font-semibold transition-all mx-2 px-2 rounded-lg ">
                      Code
                    </a>
                    <a href={det.visit} className=" bg-blue-500 hover:bg-blue-900 hover:text-white font-semibold transition-all mx-2 px-2 rounded-lg ">
                      Preview
                    </a>
                  </div>
                ) : null}
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
