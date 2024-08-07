import React, { useEffect, useState } from "react";

function Projects() {
  const [Details, setDetails] = useState([]);
  const ProjectDetails = [
    {
      img: "../../../public/python1.png",
      title: "Calculator",
      linkTo: "https://github.com/Chandan-Kr-dev/calculator",
    },
    {
      img: "../../../public/Todoimg.jpg",
      title: "Todo App Using React",
      linkTo: "https://github.com/Chandan-Kr-dev/TodoReact",
    },
  ];
  const gameProjects=[

  ]
  useEffect(() => {
    setDetails(ProjectDetails);
  }, []);

  return (
    <div className="m-32 rounded-lg text-center">
      <h1 className="text-white font-bold text-5xl ">Projects</h1>
      <div className="text-center bg-blue-400 mt-10 rounded-lg p-10">
        <h1 className="text-white text-2xl mb-8">Web Devlopment Projects</h1>
        <div id="card" className="flex justify-evenly items-center flex-wrap">
          
            {ProjectDetails.map((det)=>{
              return (
                <div className="items-center justify-center ">

                  <img className="h-36 w-36 rounded" src={det.img} alt="" />
                  <div className="about text-center">
                  <h1 className="text-2xl text-gray-600 font-semibold my-2">{det.title}</h1>
                  <a className="bg-green-500 text-white  px-2 py-1 rounded-lg my-5" target="_blank" href={det.linkTo}>Code</a>

                  </div>
                </div>
              )

            })}
          
        </div>
        {gameProjects.length>0 ? <div>

        <h1 className="text-white text-2xl mb-8">Game Development Projects</h1>
        <div id="card" className="flex justify-evenly items-center flex-wrap">
          
            {ProjectDetails.map((det)=>{
              return (
                <div>
                  <img className="h-36 w-36 rounded" src={det.img} alt="" />
                  <h1 className="text-2xl text-gray-600 font-semibold">{det.title}</h1>
                  <a className="bg-green-500 text-white  px-2 py-1 rounded-lg my-2" target="_blank" href={det.linkTo}>Code</a>
                </div>
              )

            })}
          
        </div>
        </div>:null}
      </div>
    </div>
  );
}

export default Projects;
