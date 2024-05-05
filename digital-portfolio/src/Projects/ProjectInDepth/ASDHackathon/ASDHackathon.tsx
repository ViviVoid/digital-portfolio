import React from "react";
import ProjectTitleSpace from "../ProjectTitleSpace";
import HackathonSite from "./ASDHackathonSite.png";
import "../ProjectPages.css";

const ASDHackathon = () => {
    return (
        <div id={"mainFlexBody"}>
            <div id={"contentPage"}>
                <ProjectTitleSpace projectTitle={"Autism Spectrum Disorder Chatbot"} htmlID={"ASDChatbot"}/>
                <div className={"ProjectFigure"}>
                    <img src={HackathonSite} alt={"Picture of the Hackathon site"}/>
                    <p> <b>Figure:</b> A picture of the hackathon webservice.</p>
                </div>

                <div>
                    <h1 className={"Header"}>General Project Summary</h1>
                    <p>
                        The Autism Spectrum Disorder (ASD) Chatbot is a project developed during MSOE AI Club's Hacksgiving Hackathon
                        that aimed to provide a chat bot that could give
                        users insight on developmental disorders and information on nearby/relevant providers. The project comprised of
                        a backend server, a frontend server, and a middle server that served tokens to be answered by API requests.
                    </p>
                </div>

                <div>
                    <h1 className={"Header"}>Personal Contribution</h1>
                    <p>
                        My contribution to the project was mainly the webservice and utilizing the cleaned data of the providers and language to
                        provide a table for common referencing for the user and setting up a majority of the API for the project to facilitate communication
                        between ROSIE and the end user. The frontend of the webservice was also mainly my responsibility and quickly
                        drafted up through the use of a chat bot template and bootstrap elements.
                    </p>
                </div>

                <div>
                    <h1 className={"Header"}>Project Review</h1>
                    <p>
                       This project was a strong use of api requests with a Node.js backend server. It also introduced me to development platforms such as
                        Ngrok to help learn more about API usage. It was also light application of user centered design principles but that was a weak point of this project.
                        A stronger emphasis on user-accessibility and user-experience as a whole would have benefited this project such as establishing stronger wireframes and
                        project ideals. This is better established in the website portfolio project and reviewed.
                    </p>
                </div>


            </div>
        </div>
    );
}

export default ASDHackathon