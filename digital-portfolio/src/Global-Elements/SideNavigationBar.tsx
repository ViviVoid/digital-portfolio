import React from 'react';
import { Link } from "react-router-dom";
import "../styles/SideNavigationBar.css"
import logo from "../DaoLogo.png";
import BackToTopBtn from "./BackToTopBtn";

const SideNavigationBar: React.FC = () => (
   <div className={"Side-Navigation-Bar"}>
       <Link to="/">
           <img src={logo} alt={"Andy Dao Logo"} id={"DaoLogo"}>
           </img>
       </Link>
       
       <Link to="/" className={"Side-Navigation-Item"}>
           Home
       </Link>

       <Link to="/Projects" className={"Side-Navigation-Item"}>
           Projects
       </Link>
       <Link to="/Contact" className={"Side-Navigation-Item"}>
           Contact Me
        </Link>
       <Link to="https://www.linkedin.com/in/aqd453/details/featured/1714940777634/single-media-viewer/?profileId=ACoAAD4rGP4BtgLUi4EXk_2AfRhcp1THaAA0-IE" className={"Side-Navigation-Item"}>
           Resume
       </Link>

       {/*<BackToTopBtn/>*/}
   </div>
);

export default SideNavigationBar;