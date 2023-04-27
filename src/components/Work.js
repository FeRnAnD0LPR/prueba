import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCradData from "./WorkCradData";

import React from "react";
// import pro1 from "../assets/project1.png";
// import { NavLink } from "react-router-dom";

const Work = () => {
    return (
    <div className="work-container">
        <h1 className="project-heading">Proyectos</h1>
        <div className="project-container">
            {WorkCradData.map((val, ind) =>{
                return (
                  <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view} 
                  />
                );
            })}
            {/* <div className="project-card">
                <img src={pro1} alt="image" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" 
                        className="btn">View</NavLink>
                        <NavLink to="url.com" 
                        className="btn">Source</NavLink>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    );
};

export default Work;