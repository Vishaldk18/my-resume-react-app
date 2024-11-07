import React, { useState, useEffect } from "react";
import cricketly from "../../../images/cricketly.jpg";
import WeatherMate from "../../../images/weathermate.jpg";
import todo from "../../../images/todoList.jpg";
import eshop from "../../../images/eshop.png";
import video from "../../../images/video.jpg";
import currency from "../../../images/currency.png";

const Projects = () => {
  const projectList = [
    { pId: 1, pTitle: "Cricketly", pImg: cricketly, pDescription: "Cricketly is a cricket accessories shopping website built with React and Redux, offering an easy-to-navigate layout for browsing and purchasing cricket gear.", pURL: "https://cricketly.netlify.app/" },
    { pId: 2, pTitle: "WeatherMate", pImg: WeatherMate, pDescription: "WeatherMate is a simple weather app built with React and Redux, designed to display real-time temperature updates.", pURL: "https://weathermate1.netlify.app/" },
    { pId: 3, pTitle: "ToDoList App", pImg: todo, pDescription: "A to-do list app built with React, designed to help users manage tasks efficiently.", pURL: "https://plananddo.netlify.app/" },
    { pId: 4, pTitle: "Currency Exchange", pImg: currency, pDescription: "A currency converter app that allows users to convert currencies with real-time exchange rates.", pURL: "https://easycurrencyexchange.netlify.app/" },
    { pId: 5, pTitle: "Video Nest", pImg: video, pDescription: "VideoNest is a YouTube-like video streaming app built with React, allowing users to search for videos and play them seamlessly.", pURL: "https://videonest.netlify.app/" },
    { pId: 6, pTitle: "eSHOP", pImg: eshop, pDescription: "eShop is a simple e-commerce app built with React, displaying a list of products with basic cart functionality.", pURL: "https://pipkart.netlify.app/" },
  ];

  const [columns, setColumns] = useState("1fr");

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1200) setColumns("repeat(4, 1fr)");
      else if (window.innerWidth >= 992) setColumns("repeat(3, 1fr)");
      else if (window.innerWidth >= 600) setColumns("repeat(2, 1fr)");
      else setColumns("1fr");
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Inline styles for the component
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  };

  const headingStyle = {
    textAlign: "center",
    margin: "5px 0px 30px 0px",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#fff",  // White text for contrast
    textShadow: "0 0 5px #01579b, 0 0 10px #01579b, 0 0 15px #01579b",
    
  };
  
  
  
  
  
  
  
  

  const projectsGridStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: columns,
  };

  const projectCardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const projectCardImageStyle = {
    width: "100%",
    height: "auto",
  };

  const projectCardContentStyle = {
    padding: "16px",
  };

  const projectTitleStyle = {
    margin: "0 0 10px",
    fontSize: "18px",
  };

  const projectDescriptionStyle = {
    fontSize: "14px",
    color: "#666",
    marginBottom: "12px",
  };

  const projectLinkStyle = {
    color: "#2196f3",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Explore My Work</h1>
      <div style={projectsGridStyle}>
        {projectList.map((project) => (
          <div style={projectCardStyle} key={project.pId}>
            <div>
              <img src={project.pImg} alt={project.pTitle} style={projectCardImageStyle} />
            </div>
            <div style={projectCardContentStyle}>
              <h5 style={projectTitleStyle}>{project.pTitle}</h5>
              <p style={projectDescriptionStyle}>{project.pDescription}</p>
              <a
                href={project.pURL}
                target="_blank"
                rel="noopener noreferrer"
                style={projectLinkStyle}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
