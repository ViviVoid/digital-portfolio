import App from "../App";
import SideNavigationBar from "../Global-Elements/SideNavigationBar";
import AboutMeAndValues from "../Home/AboutMeAndValues";
import Schedule from "../Home/Schedule";
import React from "react";
import Document from "react-pdf";
import {Link} from "react-router-dom";
// Defunct Page
const Resume = () => {

    return (
        <div id={"mainFlexBody"}>
            <div id={"sideBar"}>
                <SideNavigationBar />
            </div>
            <div id={"contentPage"}>
                <div id={"pdfFiles"}>
                    <Link to={"https://www.linkedin.com/in/aqd453/overlay/1714361822002/single-media-viewer/?profileId=ACoAAD4rGP4BtgLUi4EXk_2AfRhcp1THaAA0-IE"} target={"_blank"}> Personally Designed Resume </Link>
                    <Link to={"https://www.linkedin.com/in/aqd453/overlay/1708055467171/single-media-viewer/?profileId=ACoAAD4rGP4BtgLUi4EXk_2AfRhcp1THaAA0-IE"}> ATS-Friendly Resume </Link>
                </div>
            </div>
        </div>
        // <App />
    );
}

export default Resume