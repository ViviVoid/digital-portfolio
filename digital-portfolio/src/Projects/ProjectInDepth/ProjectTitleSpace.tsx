import React from 'react';

import MAICLogo from "./MAIC_Logo.png";
import {Link} from "react-router-dom";

class Prop {
    projectTitle: string;
    htmlID: string;
}

const ProjectTitleSpace: React.FC<Prop> = (props: Prop) => (
    <div id={props.htmlID} className={"ProjectTitleSpace"}>
        <h1> {props.projectTitle} </h1>
    </div>

    // <App />
);

export default ProjectTitleSpace