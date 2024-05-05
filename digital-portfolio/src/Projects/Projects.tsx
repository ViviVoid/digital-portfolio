import App from "../App";
import ProjectsHeader from "./ProjectsHeader";
import "./Projects.css";
import React from "react";
import ProjectsList from "./ProjectsList";

const Projects = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectsHeader/>
                <ProjectsList/>
            </div>
        </div>
    );
}

export default Projects