import React from "react";
import ProjectTitleSpace from "../ProjectTitleSpace";
import WordleAppPicture from "./WordleApp.png";

const Wordle = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectTitleSpace projectTitle={"Wordle"} htmlID={"Wordle"}/>
                <div className={"ProjectFigure"}>
                    <img src={WordleAppPicture} alt={"Picture of the Wordle Application"}/>
                    <p> <b>Figure:</b> A picture of the Wordle application.</p>
                </div>
                <div>
                    <h1 className={"Header"}>General Project Summary</h1>
                    <p>
                        The Wordle application was a class project for Software Tools and Process that highlighted
                        scrum and agile techniques in the software development cycle. This project is the culmination
                        of a 12-week effort in practicing product backlog management, effective communication between development
                        members, and engaging in scrum and agile practices.
                    </p>
                </div>

                <div>
                    <h1 className={"Header"}>Personal Contribution</h1>
                    <p>
                        My significant personal contributions to the project involved File Input/Output management and wiki documentation.
                        I also added usability product backlog items such as color blindness and font size adjustments into the end product which is reflected
                        in the additional options shown in the figure.
                    </p>
                </div>

                <div>
                    <h1 className={"Header"}>Project Review</h1>
                    <p>
                        The Wordle application refreshed usage of Java and JavaFX to create a working application as a team.
                        New skills I gained from this experience included the prior mentioned experience with the scrum and agile process
                        and soft skills to communicate better with my teammates about deadlines and promises. Since the team was comprised of three
                        people, workload was low and could be highly variable due to teammates not being available due to other extracurricular committments
                        or sickness. Opportunities for improvement included a stronger framework and alternative languages/environments to approach
                        this problem.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Wordle