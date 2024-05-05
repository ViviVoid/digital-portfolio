import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import "../styles/SideNavigationBar.css"
import arrowUp from "./ArrowUp.png";
import "./BackToTopBtn.css";

const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
const SideNavigationBar: React.FC = () => (
    <div className={"scrollToTop"}>
        <button onClick={handleScrollToTop}>
            <img className={"scrollToTopImage"} src={arrowUp} alt={"Arrow pointing up"}/>
            <p>Scroll to Top</p>
        </button>
    </div>
);

export default SideNavigationBar;