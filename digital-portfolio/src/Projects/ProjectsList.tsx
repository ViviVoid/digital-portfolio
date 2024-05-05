import React from 'react';
import "../styles/browser.css"
import daoLogo from "../DaoLogo.png"
import ProjectCard from "./ProjectCard";

import MAICLogo from "./MAIC_Logo.png";
import {Link} from "react-router-dom";

const ProjectsList: React.FC = () => (
    <div id={"ProjectsList"}>
        <ProjectCard projectTitle={"Autism Spectrum Disorder Chatbot"}
                     projectDescription={"I developed a static frontend with html/css, backend Node server and " +
                         "utilized JavaScript Fetch requests to utilize super computing power of ROSIE. This was done for " +
                         "a hackathon in collaboration with other students that handled tuning the chatbot and answering the tokens I would send for ROSIE to answer. " +
                         "This project was a main review of materials used in the Web Application course from the Milwaukee School of Engineering and " +
                         "personal research into strong usability practices for facilitating a chatbot for communication."}
                     projectImage={MAICLogo}
                     projectImageAlt={"Image of MSOE AI Club"}
                     projectLink={"/Projects/ASDHackathon"}
        />
        <ProjectCard projectTitle={"Wordle Project"} projectDescription={"I worked in a simulated software development team " +
            "that utilized scrum and agile techniques to develop a wordle game in java. The project was a 12-week endeavor overviewing " +
            "three sprints and a release sprint. The professor, Dr. Derek Riley, served as the product owner. " +
            "The project comprised of mainly Java with a minor usability focus and was the main focus of the Software Tools and Process course I took at the Milwaukee School of Engineering."}
                     projectImage={daoLogo}
                     projectImageAlt={"Dao Logo"}
                     projectLink={"/Projects/Wordle"}
        />
        <ProjectCard projectTitle={"Website Portfolio"}
                     projectDescription={"I created this website portfolio using static React and implementing User Experience " +
                         "principles. This is from my learnings in User-Centered Design, Web Applications, and personal research at the " +
                         "Milwaukee School of Engineering during my 2nd year of study."}
                     projectImage={daoLogo}
                     projectImageAlt={"Dao Logo"}
                     projectLink={"/Projects/WebsitePortfolio"}
        />
    </div>

    // <App />
);

export default ProjectsList