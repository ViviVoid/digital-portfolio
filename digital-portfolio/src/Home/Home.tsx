import React from 'react';
import logo from "../logo.svg";
import SideNavigationBar from "../Global-Elements/SideNavigationBar";
import Schedule from "./Schedule";
import "../styles/browser.css"
import "./Home.css"
import AboutMeAndValues from "./AboutMeAndValues";
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";

const Home:React.FC = () => (
    <div id={"mainFlexBody"}>
        <div id={"contentPage"}>
            <HomeHeader />
            <AboutMeAndValues />
            <Schedule />
            <div className={"Attribution"}>
                Attribution to background image by Image by
                 <Link to="https://www.freepik.com/free-vector/gradient-black-background-with-cubes_19852467.htm#page=2&query=isometric%20background&position=16&from_view=keyword&track=ais&uuid=f85b52c8-13a2-451b-9a69-6eb29ce6f5bc"> Freepik </Link>
                for Background Image
            </div>
        </div>
    </div>
        // <App />
    );

export default Home