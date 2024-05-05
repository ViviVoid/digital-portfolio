import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import SideNavigationBar from "./Global-Elements/SideNavigationBar";
import ProjectRoute from "./Projects/ProjectInDepth/ProjectRoute";
import BackToTopBtn from "./Global-Elements/BackToTopBtn";

const App: React.FC = () => {
    console.log("Got here...");
    console.log(process.env.PUBLIC_URL);
    return (
        <HashRouter>
            <div id={"sideBar"}>
                <SideNavigationBar/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Projects/:project" element={<ProjectRoute/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Resume" element={<Resume/>}/>
            </Routes>
            {/*<BackToTopBtn/>*/}
        </HashRouter>
    );
}

export default App;
