import React from 'react';
import logo from "../logo.svg";
import SideNavigationBar from "../Global-Elements/SideNavigationBar";
import Schedule from "./Schedule";
import "../styles/browser.css"
import "./Home.css"
import AboutMeAndValues from "./AboutMeAndValues";
import HomeHeader from "./HomeHeader";

const Home:React.FC = () => (
    <div id={"mainFlexBody"}>
        <div id={"contentPage"}>
            <HomeHeader />
            <AboutMeAndValues />
            <Schedule />
        </div>
    </div>
        // <App />
    );

export default Home