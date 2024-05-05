import React from 'react';
import "../styles/browser.css"
import "./Home.css"
import profPhoto from "./profSmaller.jpg"

const AboutMeAndValues:React.FC = () => (
    <>
    {/*<h1 className={"Header"}>Personal Statements</h1>*/}
    <div id={"AboutMe"}>
        <div id={"GrowthMindset"}>
            <h1 className={"HomeBackgroundImage"}>
                About Me
            </h1>
            <p>
                I like building upon myself throughout my academic career. I take active steps to be involved and learn more about my environment, surroundings, and other perspectives. This includes immersing myself in discussions by participating in symposiums, local talks, contributing to Servant-Leader Roundtable and MSOE AI Club, and expanding my breadth of knowledge and soft skills through the Triangle Fraternity.
            </p>
            <p>
                A growth mindset means developing my skills, process, and perspective. Thus, my commitments expand beyond coursework and include actively participating across campus and volunteering opportunities such as judging for Vex Robotics through the Robotics Education and Competition Foundation.
            </p>
        </div>

        {/*<div id={"Drive"}>*/}
        {/*    <h1 className={"HomeBackgroundImage"}>*/}
        {/*        Drive*/}
        {/*    </h1>*/}

        {/*    <p>*/}
        {/*        Establishing goals and progress is what comprises my drive to develop software and engage with the development process. Similar to inspiration, I find drive through engaging with recent trends through youtube videos, local tech talks, and engaging in discourse with new individuals. In tandem, I develop goals that intertwine my enjoyment in the process and eventual end goal.*/}
        {/*    </p>*/}

        {/*    <p>*/}
        {/*        Drive to me is cultivated by finding the spark of innovation to start the software development process and then creating smart actionable goals to follow through on an end goal and develop myself.*/}
        {/*    </p>*/}

        {/*</div>*/}

        {/*<div id={"Adaptability"}>*/}
        {/*    <h1 className={"HomeBackgroundImage"}>*/}
        {/*        Adaptability*/}
        {/*    </h1>*/}

        {/*    <p>*/}
        {/*        Being ready to take opportunities and adjust for my surroundings leads to windows of personal inspiration and prospects. Through engaging in interaction with faculty, developers, and peers, I develop an adaptability to be ready for different environments and open to other perspectives.*/}
        {/*    </p>*/}

        {/*    <p>*/}
        {/*        Adaptability is my ability to be ready and prepared for the everchanging environment of development, especially in the space of web applications, and staying up to date with the newest methods and technologies.*/}
        {/*    </p>*/}

        {/*</div>*/}

        <img src={profPhoto} alt={"Professional Photo of Andy Dao"} id={"ProfPhoto"}/>
    </div>
    </>
);

export default AboutMeAndValues