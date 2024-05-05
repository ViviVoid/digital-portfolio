import React from "react";
import ProjectTitleSpace from "../ProjectTitleSpace";
import figmaOverviewPicture from "./figma-overview.svg";

const WebsitePortfolio = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectTitleSpace projectTitle={"Website Portfolio"} htmlID={"WebsitePortfolio"}/>
                <div className={"ProjectFigure"}>
                    <img src={figmaOverviewPicture} alt={"Picture of the Website Portfolio Application"}/>
                    <p> <b>Figure:</b> A picture of the website portfolio wireframes made in Figma.</p>
                </div>
                <div>
                    <h1 className={"Header"}>General Project Summary</h1>
                    <p>
                        The website portfolio is a personal project that became greatly influenced by a User-Centered Design course
                        to incorporate more attractive design and better display my projects and experience. It is constantly being worked on
                        to keep information up to date but that largest overhaul is the expansion of the portfolio beyond displaying my weekly
                        schedule.
                    </p>
                </div>

                <div>
                    <h1 className={"Header"}>Project Review</h1>
                    <p>
                        This project provided a platform to work with React to deploy and develop a static web page. This is a refresher
                        on React components from the MSOE Web Applications course and approaches displaying my work in a more user friendly way.
                        The development time of this project was incredibly strenuous due to the learning curve of working with deployment.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WebsitePortfolio